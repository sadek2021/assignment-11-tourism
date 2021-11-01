import React from 'react';
import { Row, } from 'react-bootstrap';
import useDestinations from '../../Hooks/useDestinarions/useDestinations';
// import useDestinations from '../../Hooks/useDestinations/useDestinations';
import DestinationsItem from '../Item/DestinationsItem';
import './Destinations.css'

const Destinations = () => {
    const [destinations] = useDestinations()
    return (
        <div>
            <div>
                <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                            <img src="https://html.geekcodelab.com/holiday-planners/assets/images/destination-detail-banner.jpg" class="d-block w-100 h-50" alt="..."/>
                            <div class ="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="https://html.geekcodelab.com/holiday-planners/assets/images/banner-slide-1.jpg" class="d-block w-100" alt="..."/>
                            <div class ="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://gotravel.qodeinteractive.com/wp-content/uploads/2016/04/slide-2.jpg" class="d-block w-100" alt="..."/>
                            <div class ="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            {/* <div className="des-banner text-center">
                <div className="content text-center">
                    <h1 className="des-title fw-bold text-danger">Destinations</h1>
                    <h3 className="text-white">There are three basic forms of tourism: domestic tourism,  inbound tourism, and outbound tourism. <br /> Domestic tourism refers to activities of a visitor within their country of residence and outside of their home.</h3>
                </div>
            </div> */}
            <div className="container">
                <div className="container my-5">
                    <h2 className="text-danger">Popular Destination</h2>
                    <p className="text-secondary">With a world full of fascinating destinations,<br /> choosing the perfect vacation spot can present a challenge.</p>
                    <Row xs={1} md={4} className="g-3 p-3">
                        {
                            destinations.map(destination => <DestinationsItem key={destination.id} destination={destination}></DestinationsItem>)
                        }
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Destinations;