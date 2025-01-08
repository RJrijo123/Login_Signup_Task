import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import image from '../assets/paper.png';
import img from '../assets/img.png';
import { motion } from 'framer-motion';

const Home = () => {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate('/shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='hero'>
      <div className="hero-container">
        <div className="hero-left">
          <h2>New Arrivals</h2>
          <h1><span style={{color:"#ad7749"}}>Discover</span> Our New Collections</h1>
          <p>
            Explore our latest collection, crafted with care and designed to elevate your style. Unveil a new you with our exclusive range that combines comfort and elegance.
          </p>
          <button onClick={handleBuyNow}>Buy Now</button>
        </div>
        <div className="hero-right">
          <img src={image} alt="Background" className="background-img" />
          <div className="hero-box">
            <motion.img 
              className='product-img' 
              src={img} 
              alt="Product" 
              initial={{ x: -50 }}   // Initial position (original position)
              animate={{ x: 0 }}   // Animate to 50px to the right
              transition={{ duration: 1.5,ease: "easeInOut" }} // Set the animation duration
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
