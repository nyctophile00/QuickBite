import Banner from '../components/Banner'
import b1 from '../assets/b1.jpg'
import b2 from '../assets/b2.jpg'
import b3 from '../assets/b3.jpg'
import Foods from '../components/Foods'
import ReviewSection from '../components/Review.jsx'
import AboutUs from '../components/AboutUs.jsx'
import Grocery from '../components/Grocery.jsx'
import ServiceSection from '../components/ServiceSection.jsx'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    
    // banner start

          <div className='w-3/4 mx-auto'>
            <div  className='w-3/5 mx-auto my-6'>
  <div className="carousel w-full">
    <div id="slide1" className="carousel-item relative w-full">
      <img
        src={b1}
        className="w-full" />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href="#slide1" className="btn btn-circle">❮</a>
        <a href="#slide2" className="btn btn-circle">❯</a>
      </div>
    </div>
    <div id="slide2" className="carousel-item relative w-full">
      <img
        src={b2}
        className="w-full" />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href="#slide1" className="btn btn-circle">❮</a>
        <a href="#slide3" className="btn btn-circle">❯</a>
      </div>
    </div>
    <div id="slide3" className="carousel-item relative w-full">
      <img
        src={b3}
        className="w-full" />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href="#slide2" className="btn btn-circle">❮</a>
        <a href="#slide1" className="btn btn-circle">❯</a>
      </div>
    </div>
  </div>

</div>


    {/* home foods start */}

  <div className='my-20'>
    <h1 className='text-center font-bold text-6xl'>Prepared Foods</h1>
  </div>
  
  <div className='flex justify-between'>
  <div className="card bg-base-100 image-full w-80 shadow-xl">
  <figure>
    <img
      src="https://images.pexels.com/photos/6605232/pexels-photo-6605232.jpeg?auto=compress&cs=tinysrgb&w=600"
      alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Margherita Pizza</h2>
    <p>$8.5</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div><div className="card bg-base-100 image-full w-80 shadow-xl">
  <figure>
    <img
      src="https://images.pexels.com/photos/8251536/pexels-photo-8251536.jpeg?auto=compress&cs=tinysrgb&w=600"
      alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Chicken Caesar Salad</h2>
    <p>$7.0</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div><div className="card bg-base-100 image-full w-80 shadow-xl">
  <figure>
    <img
      src="https://images.pexels.com/photos/14979836/pexels-photo-14979836/free-photo-of-burrito-in-close-up-photography.jpeg?auto=compress&cs=tinysrgb&w=600"
      alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Beef Burrito!</h2>
    <p>$6.5</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  </div>
  <Link to={`/foods`}><button className="btn justify-center w-full my-5">See more>>></button></Link>

  {/* home foods end */}


    {/* home groceries start */}
<div className='my-20'>
  <h1 className='text-center font-bold text-6xl'>Groceries</h1>
</div>
 <div className='flex justify-between'>
 <div className="card bg-base-100 image-full w-80 shadow-xl">
  <figure>
    <img
      src="https://images.pexels.com/photos/672101/pexels-photo-672101.jpeg?auto=compress&cs=tinysrgb&w=600"
      alt="Fresh Organic Apples" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Fresh Organic Apples</h2>
    <p>$4.99</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    <div className="card bg-base-100 image-full w-80 shadow-xl">
  <figure>
    <img
      src="https://images.pexels.com/photos/10672664/pexels-photo-10672664.jpeg?auto=compress&cs=tinysrgb&w=600"
      alt="Whole Wheat Bread" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Whole Wheat Bread</h2>
    <p>$2.99</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    <div className="card bg-base-100 image-full w-80 shadow-xl">
  <figure>
    <img
      src="https://images.pexels.com/photos/20285568/pexels-photo-20285568/free-photo-of-cartons-of-flavored-milk.jpeg?auto=compress&cs=tinysrgb&w=600"
      alt="Low-Fat Milk" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Low-Fat Milk</h2>
    <p>$1.99</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
 </div>
 <Link to={`/groceries`}><button className="btn justify-center w-full my-5">See more>>></button></Link>

    {/* home groceries end */}


    <ServiceSection/>

    <ReviewSection/>

  </div>
  )
}
