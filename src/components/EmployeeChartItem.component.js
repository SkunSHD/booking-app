import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
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
            <div className="row">
                <div className="item">
                    <div className="col-xs-2">
                        <div className="img-profile-wrapper">
                            <img src={employee.profileImageUrl} alt="profile"/>
                        </div>
                    </div>
                    <div className="col-xs-10 item_info">
                        <p className="info_name">{ employee.firstName } { employee.lastName.charAt(0) }.</p>
                        <p className="info_hours">{ employee.hoursSold } hours</p>

                        <ProgressEmployee hoursSold={ employee.hoursSold } />
                    </div>
                </div>
            </div>
        );
    }
}

export default EmployeeChartItem;
