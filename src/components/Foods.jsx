// App.js or any other component file
import React from 'react';
// Import the JSON file
import data from './foods.json'; // Adjust the path based on your file structure

const Foods = () => {
  return (
    <div className='flex justify-between flex-wrap'>
      {data.map((person, index) => {
        // Destructure multiple data points from each object in the array
        const { name, price, imageUrl, } = person;

        return (
          <div key={index}>
            <div className="card bg-base-100 image-full w-80 mb-5 shadow-xl">
  <figure>
    <img
      src={imageUrl}
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

export default Foods;
