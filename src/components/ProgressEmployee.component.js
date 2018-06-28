import React, { Component } from "react";
import PropTypes from 'prop-types';
// Models
import styles from './ProgressEmployee.module.scss';


class ProgressEmployee extends Component {

    static displayName = 'ProgressEmployee.component';

    static propTypes = {
        hoursSold: PropTypes.number.isRequired
    };

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
