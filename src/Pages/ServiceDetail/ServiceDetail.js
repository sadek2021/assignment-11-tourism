import React from 'react';
import { useParams } from 'react-router';
import image from './../../Images/medicare.png'
import useAuth from '../../Hooks/useAuth/useAuth';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const { services } = useAuth();

    const data = services.find(service => service.id === Number(serviceId));
    return (
        <div className="container">
            <div className="d-lg-flex align-items-center my-5">
                <img className="img-fluid" src={data?.img} alt="" />
                <div className="m-5">
                    <h1 className=" fw-bold text-danger">{data?.name}</h1>
                    <p>{data?.detail}</p>
                </div>
            </div>
            <div className="d-lg-flex align-items-center my-5">
                <div className="m-5">
                    <h1 className=" fw-bold text-danger">City Medicare Clinic</h1>
                    <br />
                    <h5>Our clinic is open Monday to Friday. Please visit the Location & Hours page for detailed information.</h5>
                    <p>City Medical GP and Vaccination Clinic is located in the heart of the Melbourne CBD. We have been providing quality GP and vaccination services to CBD workers, students and visitors since we opened in 2012. We are currently accepting new patients.</p>
                </div>
                <img className="img-fluid" width="600" src={image} alt="" />
            </div>
        </div>
    );
};

export default ServiceDetail;