import React, { Component } from 'react';
import styles from './App.module.scss';
//Components
import Dashboard from 'components/Dashboard.component';


export default class App extends Component {

    static displayName = 'App.component';

    render() {
        return (
            <div className={`container ${styles.app}`}>
                <Dashboard />
            </div>
        );
    }
}
