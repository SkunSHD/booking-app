import React, { Component } from "react";
import styles from './App.module.scss';
//Components
import Dashboard from 'components/Dashboard.component';

export default class App extends Component {
    render() {
        return (
            <div className={styles.app}>
                <div className="page-content">
                    <Dashboard />
                </div>
            </div>
        );
    }
}
