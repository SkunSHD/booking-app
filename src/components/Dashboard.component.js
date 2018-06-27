import React, { Component } from "react";
import PropTypes from 'prop-types';
// MobX
import { observer } from 'mobx-react';
import {action, reaction, observable, observe, computed, autorun, asStructure, runInAction, toJS, values } from 'mobx';
// Components
import BookingInfo from 'components/BookingInfo.component';


@observer
class Dashboard extends Component {

    static displayName = 'Dashboard.component';

    static propTypes = {
        // lang: PropTypes.string.isRequired
    };


    render() {
        return (
            <div className="layout__align-center">
                Dashboard
                <BookingInfo />
            </div>
        )
    };
}

export default Dashboard;
