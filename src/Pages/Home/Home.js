import React from 'react';
import { Carousel, Row } from 'react-bootstrap';
import useServices from '../../Hooks/useServices/useServices';
import ServiceItem from '../Item/ServiceItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Home.css';
// import useDestinations from '../../Hooks/useDestinations/useDestinations';
// import DestinationsItem from '../Item/DestinationsItem';
import useDestinations from '../../Hooks/useDestinarions/useDestinations';
import aboutImg from './../../Images/aboutImg.png';
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons';
import DestinationsItem from '../Item/DestinationsItem';

const Home = () => {
    const { services } = useServices();
    const [destinations] = useDestinations()
    const newDestinations = destinations.slice(0, 6)

    /* Icon */
    const checkIcon = <FontAwesomeIcon icon={faCheckSquare} />

    return (
        <div>
            <div className="mb-5">
                <Carousel>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src="https://getaway.qodeinteractive.com/wp-content/uploads/2017/08/main-slider-3.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption className="fw-bold">
                            <h1>WELCOME TO TRAVEL TIME</h1>
                            <p>Start Your Enjoyable Travel</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src="https://getaway.qodeinteractive.com/wp-content/uploads/2017/08/main-slider-2.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption className="fw-bold">
                            <h1>TRAVEL TO YOUR BEAUTIFUL PLACES</h1>
                            <p>Start Booking Your Favourite Package</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src="https://getaway.qodeinteractive.com/wp-content/uploads/2017/08/main-slider-1.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption className="fw-bold">
                            <h1>Plan Your Trip with Travel Time</h1>
                            <p>Get Enjoy with Memorable Moment</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="container">
                <div className="my-5 text-center">
                    <h1 className="fw-bold text-danger">Most Popular Packages</h1>
                    <p>Enjoy our Cheap Holiday packages and create your own most memorable moment and a <br /> trip to remember with Travel Time with your loved ones.</p>
                </div>
                <div className="container">
                    <Row xs={1} md={4} className="g-5 mb-5 p-4">
                        {
                            services.map(service => <ServiceItem key={service.id} service={service}></ServiceItem>)
                        }
                    </Row>
                </div>
                <div className="my-5 text-center">
                    <h1 className="fw-bold text-danger">Plan Your Trip with <br /> Travel Time</h1>
                    <p>Enjoy our Cheap Holiday packages and create your own most memorable moment .</p>
                </div>
                <div className="row row-cols-1 row-cols-lg-2 mx-auto">
                    <div className="tour-plan col text-lg-end  front-icon">
                        <img className="img-fluid" width="600" src={aboutImg} alt="" />
                    </div>
                    <div className="col front-icon">
                        <h2 className="mt-5 text-danger">Let's Get Started To Go Your Dream Places</h2>
                        <p className="mt-3">There are many variations of passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don't look even slightly.</p>
                        <h5 className="mt-5"><span>{checkIcon}</span> Invest in your simply neighborhood</h5>
                        <h5 className="my-3"><span>{checkIcon}</span> Support people in free text extreme need</h5>
                        <h5 className="my-3"><span>{checkIcon}</span> Largest global industrial business community</h5>
                        <h5 className="my-3"><span>{checkIcon}</span> We understand and appreciate what’s on the line</h5>
                        <h5 className="my-3"><span>{checkIcon}</span> To ensure your funds are protected, Tour Time</h5>
                    </div>
                </div>
                <div className="my-5 text-center">
                    <h1 className="fw-bold text-danger">Destinations</h1>
                    <p>There are three basic forms of tourism: domestic tourism,  inbound tourism, and outbound tourism. <br /> Domestic tourism refers to activities of a visitor within their country of residence and outside of their home.</p>
                </div>
                <div className="container my-5">
                    <Row xs={1} md={3} className="g-5 p-4">
                        {
                            newDestinations.map(destination => <DestinationsItem key={destination.id} destination={destination}></DestinationsItem>)
                        }
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Home;