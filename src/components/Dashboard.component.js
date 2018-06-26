import React, { Component } from "react";
import PropTypes from 'prop-types';
// MobX
import { observer } from 'mobx-react';
import {action, reaction, observable, observe, computed, autorun, asStructure, runInAction, toJS, values } from 'mobx';
// Models
import bookingModel from 'models/booking.model';
// Components
import BookingInfo from 'components/BookingInfo.component';


@observer
class Dashboard extends Component {

    static displayName = 'Dashboard.component';

    static propTypes = {
        lang: PropTypes.string.isRequired
    };


    componentDidMount() {
        // this[`@reaction: LimitsModel -> LimitSpend change`] = reaction(
        //     ()=> values(limitsModel.limits),
        //     ()=> this.isCurrentLimitsChanged && this.updateFormState(),
        //     {
        //         name: `@reaction: LimitsModel -> LimitSpend change`,
        //         fireImmediately: true
        //     }
        // );
    }


    componentWillUnmount() {
        // this[`@reaction: LimitsModel -> LimitSpend change`]();
    };


    get pendingNames() { return Object.keys(this.formState.pending) }



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
