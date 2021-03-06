import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// Models
import styles from './ProgressEmployee.module.scss';


export default class ProgressEmployee extends PureComponent {

    static displayName = 'ProgressEmployee.component';

    static propTypes = {
        hoursSold: PropTypes.number.isRequired
    };

    get width() { return `${this.props.hoursSold * 100 / 1000 }%` };


    render() {
        return (
            <div className={ styles.progressEmployee }>
                <div className="progress_bar" style={{ width: this.width }} />
            </div>
        );
    }
}
