import React from 'react';
import './ServiceItem.css'
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServiceItem = (props) => {
    const { _id, img, name, detail, price } = props.service;
    return (
        <div>
            <Col className="shadow-lg">
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className="text-danger fw-bold">{name}</Card.Title>
                        <div>
                            <p>{detail}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <Link to={`/bookings/${_id}`}>
                                <button type="button" className="btn btn-outline-danger btn-sm">Book Now</button>
                            </Link>
                            <p className="fw-bold text-danger">{price}/<small>person</small></p>
                        </div>
                    </Card.Body>

                </Card>
            </Col>
        </div>
    );
};

export default ServiceItem;