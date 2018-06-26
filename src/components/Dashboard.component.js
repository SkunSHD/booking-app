import React, { Component } from "react";
import PropTypes from 'prop-types';
// MobX
import { observer } from 'mobx-react';
import {action, reaction, observable, observe, computed, autorun, asStructure, runInAction, toJS, values } from 'mobx';
// Models
// import limitsModel from 'models/limits.model';
// Components


@observer
class Dashboard extends Component {

    static displayName = 'Dashboard.component';

    static propTypes = {
        lang: PropTypes.string.isRequired
    };

    isFetching = observable.box(false);


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
            </div>
        )
    };
}

export default Dashboard;
