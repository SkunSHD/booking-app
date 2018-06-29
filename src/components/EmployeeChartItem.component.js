import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './EmployeeChartItem.module.scss';
// Components
import ProgressEmployee from 'components/ProgressEmployee.component';


class EmployeeChartItem extends PureComponent {

    static displayName = 'EmployeeChartItem.component';

    static propTypes = {
        employee: PropTypes.object.isRequired
    };


    render() {
        const { employee } = this.props;

        return (
            <div className={`row ${styles.employeeChartItem}`}>
                <div className="col-xs-2 item_wrapper">
                    <div className="img_wrapper">
                        <img className="item_img" src={employee.profileImageUrl} alt="profile"/>
                    </div>
                </div>
                <div className="col-xs-10 chartItemInfo">
                    <p className="info_name">{ employee.firstName } { employee.lastName.charAt(0) }.</p>
                    <p className="info_hours">{ employee.hoursSold } hours</p>

                    <ProgressEmployee hoursSold={ employee.hoursSold } />
                </div>
            </div>
        );
    }
}

export default EmployeeChartItem;
