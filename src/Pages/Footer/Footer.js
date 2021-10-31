import React from 'react';
import logo from './../../Images/favicon/logo.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className=" footer bg-danger p-4 align-items-center ">
            <div className="mb-4">
                <img width="150" src={logo}className="mx-auto d-block" alt="" />
            </div>
            <div>
                <p className="text-white text-center m-0">Copyright © 2021 All rights reserved City Medicare Clinic.</p>
            </div>
        </div>
    );
};

export default Footer;