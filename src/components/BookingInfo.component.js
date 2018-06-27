import React, { Component } from "react";
import { values, reaction, keys } from 'mobx';
// Models
import bookingModel from 'models/booking.model';
import { observer } from 'mobx-react';


@observer
class BookingInfo extends Component {

    infoTitles = {
        checkedIn: 'Checked in',
        availableRooms: 'Rooms avaliable',
        reservedRooms: 'Reserved rooms'
    };


    render() {
        return (
            <div>
                <div>
                    { keys(bookingModel.booking)
                        .map(bookingKey =>
                            <div>
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
