import React from 'react';
import { useEffect, useState } from "react";
import './ReviewSection.css';

const ReviewSection = () => {
     const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch("./reviews.json")
        .then(res=>res.json())
        .then(data=>setProducts(data))
  },[])


    return (
        <div className="review-section ">
            <h2 className="review-title mt-12 mb-10 text-xl text-center">Customer Reviews</h2>
            <div className="reviews-container flex">
                {products.map((review, index) => (
                    <div className="review-card" key={index}>
                        <div className="review-header">
                            <img
                                src={review.avatar}
                                alt={`${review.name}'s avatar`}
                                className="review-avatar"
                            />
                            <div>
                                <h4 className="reviewer-name">{review.name}</h4>
                                <div className="star-rating">
                                    {'★'.repeat(review.rating)}
                                    {'☆'.repeat(5 - review.rating)}
                                </div>
                            </div>
                        </div>
                        <p className="review-text">{review.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewSection;
