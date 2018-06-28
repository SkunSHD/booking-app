import React, { Component } from "react";
//MobX
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
// Models
import employeesModel from 'models/employees.model';
import styles from './EmployeesChart.module.scss';
// Components
import ProgressEmployee from "components/ProgressEmployee.component";


@observer
class EmployeesChart extends Component {


    get renderEmployeesTopThree() {
        const employees = toJS(employeesModel.employeesStats);
        const mappedEmployees = Object.keys(employees).map(employeeKey => employees[employeeKey]);
        const sortedEmployees = mappedEmployees.sort((a, b)=> a.hoursSold < b.hoursSold);
        return sortedEmployees.slice(0,3);
    }


    render() {
        if(!employeesModel.employeesStats.size) return 'loading...';

        return (
            <div className="row">
                <div className={ styles.employeeChart }>
                    <h2 className="title">Employees stats:</h2>
                    <div className="col-xs-8">
                        { this.renderEmployeesTopThree.map(employee => (
                            <div className="row" key={employee.firstName}>
                                <div className="item">
                                    <div className="col-xs-2">
                                        <div className="img-profile-wrapper">
                                            <img src={employee.profileImageUrl} alt="profile photo"/>
                                        </div>
                                    </div>
                                    <div className="col-xs-10 item_info">
                                        <p className="info_name">{ employee.firstName } { employee.lastName.charAt(0) }.</p>
                                        <p className="info_hours">{ employee.hoursSold } hours</p>

                                        <ProgressEmployee hoursSold={ employee.hoursSold } />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default EmployeesChart;
