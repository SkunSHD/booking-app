import React, { Component } from "react";
import { keys } from 'mobx';
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
        return (
            <div>
                <div>
                    { keys(bookingModel.booking)
                        .map(bookingKey =>
                            <div key={bookingKey}>
                                <p>{bookingModel.booking.get(bookingKey)}</p>
                                <p>{this.infoTitles[bookingKey]}</p>
                            </div>
                        )
                    }
                </div>

            </div>
        );
    }
}

export default BookingInfo;
