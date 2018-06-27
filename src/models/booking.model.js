import { observable, runInAction, keys, values } from 'mobx';


class BookingModel {

    booking = observable.map(new Map([
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

        runInAction('UPDATE-BookingModel', ()=> {

        });
    }
}

export default new BookingModel();
