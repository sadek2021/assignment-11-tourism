import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className=" footer bg-danger p-4 align-items-center ">
            <div className="mb-4">
                <img width="150" src="https://travel-time.cmsmasters.net/wp-content/uploads/2016/05/logo-footer-2.png"className="mx-auto d-block" alt="" />
            </div>
            <div>
                <p className="text-white text-center m-0">Copyright © 2021 All rights reserved Travel Time.</p>
            </div>
        </div>
    );
};

export default Footer;