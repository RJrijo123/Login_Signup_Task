import React, { useState } from "react";
import Content from "./Content"; 
import "./LoginSignup.css"; 
import { RiLockPasswordLine, RiLockPasswordFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleForm = () => setIsLogin(!isLogin);

const handleSubmit = async (e) => {
  e.preventDefault();

  const apiUrl = isLogin ? "/api/login" : "/api/signup";
  const payload = isLogin
    ? { email, password }
    : { name, email, password, confirmPassword };

  try {
    const response = await axios.post(apiUrl, payload, {
      headers: { "Content-Type": "application/json" },
    });

    
    toast.success(response.data.message || "Success!");
  } catch (error) {
    
    const errorMessage =
      error.response?.data?.message || "Network error. Please try again.";
    toast.error(errorMessage);
    console.error("Error:", error);
  }
};


  return (
    <div className="login-signup-container">
      <ToastContainer position="bottom-right" autoClose={3000} /> 
      <Content isLogin={isLogin} /> 

      <div className="login-signup-form">
        <div className="form-container">
          <h1>{isLogin ? "Login" : "Register"}</h1>
          <div className="log-section">
          <p>{isLogin ? "Enter your email and password to login." : "Fill out the form to register."}</p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="form__div">
                <input
                  type="text"
                  placeholder=" "
                  className="form__input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="" className="form__label">
                  <FaUser /> Username
                </label>
              </div>
            )}
            <div className="form__div">
              <input
                type="email"
                placeholder=" "
                className="form__input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="" className="form__label">
                <MdAlternateEmail /> Email
              </label>
            </div>
            <div className="form__div password-div">
              <input
                type={showPassword ? "text" : "password"}
                placeholder=" "
                className="form__input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="" className="form__label">
                <RiLockPasswordLine /> Password
              </label>
              <button
                type="button"
                className="eye-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </button>
            </div>
            {!isLogin && (
              <div className="form__div password-div">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder=" "
                  className="form__input"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <label htmlFor="" className="form__label">
                  <RiLockPasswordFill /> Confirm Password
                </label>
                <button
                  type="button"
                  className="eye-btn"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </button>
              </div>
            )}
            <button type="submit" className="submit-btn">
              {isLogin ? "Login" : "Register"}
            </button>
          </form>

          <p className="mt-4">
            {isLogin ? (
              <>
                Don't have an account?{" "}
                <span className="toggle-link" onClick={toggleForm}>
                  Register
                </span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span className="toggle-link" onClick={toggleForm}>
                  Login
                </span>
              </>
            )}
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
