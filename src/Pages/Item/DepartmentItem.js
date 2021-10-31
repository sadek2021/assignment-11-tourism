import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './DepartmentItem.css'

const DepartmentItem = (props) => {
    const { img, name, detail } = props.department;
    return (
        <div>
            <Col className="shadow-lg text-center">
                <Card className="department-item">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className="text-danger fw-bold">{name}</Card.Title>
                        <div>
                            <p>{detail}</p>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default DepartmentItem;