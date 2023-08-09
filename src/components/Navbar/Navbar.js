import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";
import SignIn from "../SignIn/SignIn";
import Signup from "../SignIn/Signup";
import { useNavigate } from "react-router-dom";
// import Dalilouna from "../../images/dalilouna.png";

function Navbar() {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);
  const [button, setButton] = useState(true);
  const navigate = useNavigate();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenSignup = () => {
    setOpenSignUp(true);
    setOpen(false);
  };
  const handleCloseSignup = () => {
    setOpenSignUp(false);
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            TRAVL <i className="fab fa-gripfire"></i>
          </Link> */}
          <div className="navbar-logo">
            Dalilouna
            {/* <img
              src="images/dalilouna.png"
              width="80px"
              height="80px"
              alt=""
              class="d-inline-block align-top"
            ></img> */}
          </div>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              {/* <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link> */}
              <div className="nav-links" onClick={() => navigate("/")}>
                home
              </div>
            </li>
            <li className="nav-item">
              {/* <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link> */}
              <div className="nav-links" onClick={() => navigate("/Services")}>
                services
              </div>
            </li>

            <li className="nav-item">
              {/* <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link> */}
              <div className="nav-links" onClick={() => navigate("/Booking")}>
                booking
              </div>
            </li>
            <li className="nav-item">
              {/* <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link> */}
              <div className="nav-links" onClick={() => navigate("/History")}>
                history
              </div>
            </li>

            <li className="nav-item">
              {/* <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign up
              </Link> */}
              <div className="nav-links-mobile">Login</div>
            </li>
          </ul>
          {button && (
            <Button buttonStyle="btn--outline" onClick={handleOpen}>
              Login
            </Button>
          )}
        </div>
      </nav>
      <SignIn open={open} onClose={handleClose} openSignUp={handleOpenSignup} />
      <Signup open={openSignUp} onClose={handleCloseSignup} />
    </>
  );
}

export default Navbar;
