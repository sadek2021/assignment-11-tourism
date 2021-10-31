import React from 'react';
import { Row } from 'react-bootstrap';
import useDepartments from '../../Hooks/useDepartments/useDepartments';
import DepartmentItem from '../Item/DepartmentItem';
import './Departments.css';

const Departments = () => {
    const { departments } = useDepartments();
    return (
        <div>
            <div>
                <div className="dept-banner mb-5">
                    <div className="content text-center">
                        <h1 className="fw-bold text-danger">The Most Letest News</h1>
                        <h4 className="text-white">The World Travel & Tourism Council has announced that its 22nd <br /> Global Summit will take place in Riyadh, Saudi Arabia. <br /> The event is scheduled to take place at the end of 2022.</h4>
                    </div>
                    {/* <div className="col-lg-6 my-5 text-center">
                        <p>They are: medicine, surgery, gynaecology, obstetrics, paediatrics, eye, ENT, dental, orthopaedics, neurology, cardiology, psychiatry, skin, <br /> plastic surgery, nuclear medicine, infectious disease etc. medical superintendent is a destination who has control over all medical department.</p>
                    </div> */}
                </div>
            </div>
            <div className="container mt-5">
                <div className="container my-5">
                    <Row xs={1} md={3} className="g-5 p-4">
                        {
                            departments.map(department => <DepartmentItem key={department.id} department={department}></DepartmentItem>)
                        }
                    </Row>
                </div>
            </div>

        </div>
    );
};

export default Departments;