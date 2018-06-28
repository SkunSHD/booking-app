import React, { Component } from "react";
import { keys } from 'mobx';
import styles from './BookingInfo.module.scss';
//MobX
import { observer } from 'mobx-react';
// Models
import bookingModel from 'models/booking.model';


@observer
class BookingInfo extends Component {

    infoTitles = {
        checkedIn: 'Checked in',
        availableRooms: 'Rooms available',
        reservedRooms: 'Reserved rooms'
    };


    render() {
        if(!bookingModel.booking.size) return 'loading...';
        return (
            <ul className={ `${styles.booking_info} row`}>
                { keys(bookingModel.booking).map(bookingKey =>
                    <li className="col-sm-4" key={bookingKey}>
                        <p className="item">{bookingModel.booking.get(bookingKey)}</p>
                        <p>{this.infoTitles[bookingKey]}</p>
                    </li>
                )}
            </ul>
        );
    }
}

export default BookingInfo;
