import React from 'react';
import './ServiceSection.css';

const ServiceSection = () => {
    return (
        <div className="service-section my-10">
            <h2 className="service-title">Our Services</h2>
            <div className="services-container">
                <div className="service-card">
                <i class="fa-solid fa-truck"></i>
                    <h3>Fast Delivery</h3>
                    <p>Get your groceries delivered to your door in no time with our quick and reliable delivery service.</p>
                </div>

                <div className="service-card">
                <i class="fa-solid fa-seedling"></i>
                    <h3>Fresh Produce</h3>
                    <p>We source the freshest fruits, vegetables, and meats, ensuring you get high-quality products every time.</p>
                </div>

                <div className="service-card">
                <i class="fa-solid fa-headset"></i>
                    <h3>24/7 Support</h3>
                    <p>Our customer support team is available around the clock to assist you with any issues or concerns.</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;
