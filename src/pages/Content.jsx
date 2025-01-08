import React from "react";
import loginsignup from '../assets/loginsignup.png';

const Content = ({ isLogin }) => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center  text-black p-8">
      {isLogin ? (
        <>
            <img src={loginsignup} alt="" className="w-100 h-100 mb-4 object-contain md:w-100 md:h-100"/>
          <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
          <p className="text-lg">
            <span style={{color:"#f5da47",fontWeight:"800"}}>Login</span> to continue exploring your dashboard.
          </p>
        </>
      ) : (
        <>
        <img src={loginsignup} alt="" className="w-100 h-100 mb-4 object-contain md:w-100 md:h-100"/>
          <h1 className="text-4xl font-bold mb-4">Join Us Today!</h1>
          <p className="text-lg">
          <span style={{color:"#f5da47",fontWeight:"800"}}>Register</span> now and unlock a world of possibilities.
          </p>
        </>
      )}
    </div>
  );
};

export default Content;
