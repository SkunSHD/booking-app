import React, { Component } from "react";
//MobX
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
// Models
import employeesModel from 'models/employees.model';
import styles from './EmployeesChart.module.scss';
// Components
import EmployeeChartItem from "components/EmployeeChartItem.component";


@observer
class EmployeesChart extends Component {

    static displayName = 'EmployeesChart.component';


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
                        { this.renderEmployeesTopThree.map(employee => <EmployeeChartItem employee={employee} key={employee.firstName} />) }
                    </div>
                </div>
            </div>
        );
    }
}

export default EmployeesChart;
