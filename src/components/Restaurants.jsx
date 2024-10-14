
import React from 'react';

import data from './restaurants.json'; 

const Restaurants = () => {
  return (
    <div className='flex gap-5 flex-wrap justify-center'>
      {data.map((person, index) => {

        const { name, price, image, } = person;

        return (
          <div key={index}>
            <div className="card bg-base-100 image-full w-80 mb-5 shadow-xl">
  <figure>
    <img
      src={image}
      alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>Price: ${price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Order Now</button>
    </div>
  </div>
</div>
          </div>
        );
      })}
    </div>
  );
};

export default Restaurants;