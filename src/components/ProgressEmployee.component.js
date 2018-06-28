import React, { Component } from "react";
//MobX
import { observer } from 'mobx-react';
// Models
import styles from './ProgressEmployee.module.scss';


@observer
class ProgressEmployee extends Component {

    get width() { return `${this.props.hoursSold * 100 / 1000 }%` };


    render() {
        return (
            <div className={ styles.progressEmployee }>
                <div className="content" style={{ width: this.width }} />
            </div>
        );
    }
}

export default ProgressEmployee;
