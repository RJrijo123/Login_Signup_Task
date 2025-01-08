import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleAccountClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLoginClick = () => {
    navigate("/login");
    setIsDropdownOpen(false);
  };

  const handleLogoutClick = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleIconClick = () => {
    navigate("/");
  };

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div
        className="text-white text-2xl font-bold cursor-pointer"
        onClick={handleIconClick}
      >
        TASK
      </div>

      <div className="relative">
        <div className="cursor-pointer" onClick={handleAccountClick}>
          <FaCircleUser className="w-7 h-7 text-white account" />
        </div>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-0 bg-gray-800 text-white rounded-sm shadow-lg p-.5 w-40 dropdown">
            <ul>
              {isLoggedIn ? (
                <div>
                  {isLoggedIn ? (
                  <li
                    onClick={() => navigate("/proile")}
                    className="cursor-pointer py-2 px-4 hover:bg-gray-700"
                  >
                    Profile
                  </li>) : (<li
                    onClick={() => navigate("/login")}
                    className="cursor-pointer py-2 px-4 hover:bg-gray-700"
                  ></li>) }
                  <hr />
                  <li
                    onClick={handleLogoutClick}
                    className="cursor-pointer py-2 px-4 hover:bg-gray-700"
                  >
                    Logout
                  </li>
                </div>
              ) : (
                <li
                  onClick={handleLoginClick}
                  className="cursor-pointer py-2 px-4 hover:bg-gray-700"
                >
                  Login
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;



//   useEffect(() => {
//     const user = localStorage.getItem("user"); 
//     if (user) {
//       setIsLoggedIn(true);
//     }
//   }, []);



    // localStorage.removeItem("user");
    // setIsLoggedIn(false); 
    // setIsDropdownOpen(false); 