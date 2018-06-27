import { runInAction, observable } from 'mobx';
import moment from 'moment';


class Employees {

    employeesStats = observable(new Map());

    constructor() {
        this.fetchEmployeeStats()
    }


    getHoursSold({checkInDate, checkOutDate}) {
        const checkIn = moment(checkInDate, 'DD-MM-YYYY');
        const checkOut = moment(checkOutDate, 'DD-MM-YYYY');
        return checkOut.diff(checkIn, 'hours');
    }


    async fetchEmployeeStats() {
        const respRaw = await fetch('https://interview-booking-api.herokuapp.com/api/bookings');
        const respParsed = await respRaw.json();

        runInAction('UPDATE-EmployeesModel', ()=> {
            respParsed.forEach(visitor => {
                if(!visitor.employee) return;

                // new employee
                if(!this.employeesStats.has(visitor.employee.id)) {
                    this.employeesStats.set(visitor.employee.id, {
                        ...visitor.employee,
                        hoursSold: 0
                    });
                }
                // old employee
                const currentEmployee = this.employeesStats.get(visitor.employee.id);
                const newHoursSoldVal = currentEmployee.hoursSold + this.getHoursSold(visitor);

                this.employeesStats.set(visitor.employee.id, {
                    ...currentEmployee,
                    hoursSold: newHoursSoldVal
                })
            })
        });
    }

}

export default new Employees();
