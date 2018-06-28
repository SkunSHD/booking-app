import React, { Component } from "react";
// import PropTypes from 'prop-types';
// MobX
import { observer } from 'mobx-react';
// Components
import BookingInfo from 'components/BookingInfo.component';
import EmployeesChart from 'components/EmployeesChart.component';


@observer
class Dashboard extends Component {

    static displayName = 'Dashboard.component';

    static propTypes = {
        // lang: PropTypes.string.isRequired
    };


    render() {
        return (
            <React.Fragment>
                <BookingInfo />
                <EmployeesChart />
            </React.Fragment>
        )
    };
}

export default Dashboard;
