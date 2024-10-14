import React from 'react';
import './AboutUs.css'; // Optional: for custom styling

const AboutUs = () => {
    return (
        <div className="about-us-section">
            <h2 className="about-us-title">About Us</h2>
            <div className="about-us-content">
                <p>
                    Welcome to <strong>QuickBite</strong>! We are your go-to destination for quick, easy, and reliable food and grocery delivery.
                    Our mission is simple: to connect you with your favorite local restaurants and grocery stores so you can enjoy delicious meals and essential items without leaving the comfort of your home.
                </p>

                <p>
                    Whether you're craving a hot meal or need fresh produce delivered to your doorstep, we've got you covered. With a wide range of cuisines and products to choose from, we ensure that quality and freshness are always a top priority. 
                </p>

                <h3 className="about-us-mission-title">Our Mission</h3>
                <p>
                    At <strong>QuickBite</strong>, we believe in providing exceptional service by:
                </p>
                <ul>
                    <li>Delivering fresh, high-quality food and groceries to your door.</li>
                    <li>Partnering with the best local restaurants and stores.</li>
                    <li>Offering quick delivery times and a seamless ordering experience.</li>
                    <li>Ensuring customer satisfaction with every order.</li>
                </ul>

                <h3 className="about-us-highlight-title">Why Choose Us?</h3>
                <p>
                    With years of experience in the food and grocery delivery industry, we understand your needs. That’s why we prioritize:
                </p>
                <ul>
                    <li><strong>Speed:</strong> Fast delivery so your food arrives fresh and hot.</li>
                    <li><strong>Variety:</strong> A wide selection of cuisines and grocery products.</li>
                    <li><strong>Convenience:</strong> Easy ordering through our website and app.</li>
                    <li><strong>Customer Support:</strong> 24/7 customer support to assist you with any concerns.</li>
                </ul>

                <p>Thank you for choosing <strong>FoodieDelight</strong>! We look forward to serving you.</p>
            </div>
        </div>
    );
};

export default AboutUs;
