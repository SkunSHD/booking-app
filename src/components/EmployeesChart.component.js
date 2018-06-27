import React, { Component } from "react";
//MobX
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
// Models
import employeesModel from 'models/employees.model';


@observer
class EmployeesChart extends Component {


    get renderEmployeesTopThree() {
        const employees = toJS(employeesModel.employeesStats);
        const mappedEmployees = Object.keys(employees).map(employeeKey => employees[employeeKey]);
        const sortedEmployees = mappedEmployees.sort((a, b)=> a.hoursSold < b.hoursSold);
        return sortedEmployees.slice(0,3);
    }


    render() {
        return (
            <div>
                <div>
                   Employees stats:
                    {this.renderEmployeesTopThree.map(employee => <div>
                        <p>{employee.firstName} {employee.lastName}; SOLD: {employee.hoursSold} hours</p>
                    </div>)}
                </div>
            </div>
        );
    }
}

export default EmployeesChart;
