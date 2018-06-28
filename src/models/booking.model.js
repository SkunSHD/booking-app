import { observable, runInAction, keys } from 'mobx';


class BookingModel {

    booking = observable(new Map([
        ['availableRooms', null],
        ['checkedIn', null],
        ['reservedRooms', null]
    ]));


    constructor() {
        this.fetchBookingTotal()
    }


    async fetchBookingTotal() {
        const respRaw = await fetch('https://interview-booking-api.herokuapp.com/api/booking-snapshot');
        const respParsed = await respRaw.json();

        runInAction('UPDATE-BookingModel-SUCCESS', ()=> {
            for(let prop of keys(this.booking)) {
                if(respParsed.hasOwnProperty(prop)) {
                    this.booking.set(prop, respParsed[prop]);
                }
            }
        });
    }
}

export default new BookingModel();
