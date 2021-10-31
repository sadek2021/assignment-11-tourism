import React from 'react';
import { Row } from 'react-bootstrap';
import ServiceItem from '../Item/ServiceItem';

const MyBooking = () => {
    // const { myBooking } = useMyBooking();
    return (
        <div>
            <h2>This is my Booking</h2>
            <div className="mt-5 text-center">
                <h1 className="text-danger">Most Popular Packages</h1>
                <h5 className="text-secondary">Enjoy our Cheap Holiday packages and create your own most memorable moment and a <br /> trip to remember with Travel Time with your loved ones.</h5>
            </div>
            <div className="container my-5">
                <Row xs={1} md={4} className="g-5 p-3">
                    {
                        MyBooking.map(booking => <ServiceItem key={booking.id} booking={booking}></ServiceItem>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default MyBooking;