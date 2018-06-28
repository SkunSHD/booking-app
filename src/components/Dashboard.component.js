import React, { Component } from "react";
// Components
import BookingInfo from 'components/BookingInfo.component';
import EmployeesChart from 'components/EmployeesChart.component';


export default class Dashboard extends Component {

    static displayName = 'Dashboard.component';

    render() {
        return (
            <React.Fragment>
                <BookingInfo />
                <EmployeesChart />
            </React.Fragment>
        )
    };
}
