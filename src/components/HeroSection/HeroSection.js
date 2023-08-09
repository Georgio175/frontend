import React from "react";
// import { useNavigate } from "react-router-dom";
import "./HeroSection.css";
// import VideoBg from "../../images/video-1.mp4";
import VideoBg from "../../images/lebanonbackground.mp4";
import RawsheJPG from "../../images/rawshe.jpg";

function HeroSection() {
  //   let navigate = useNavigate();

  const routeChange = () => {
    let path = "/services";
    // navigate(path);
  };

  return (
    <div className="hero-container">
      <video src={VideoBg} autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>

      {/* <form className="search">
        <div className="search-container">
          <label>Where are you going?</label>
          <input id="location" type="text" placeholder="Search your location" />
        </div>
        <div className="row-container">
          <div className="search-container">
            <label></label>
            <input id="check-in" type="date" />
          </div>
          <div className="search-container">
            <label>Check out</label>
            <input id="check-out" type="date" />
          </div>
        </div>
        <div className="search-container">
          <button className="hero-btn" type="submit" onClick={routeChange}>
            Explore
          </button>
        </div>
      </form> */}
    </div>
  );
}

export default HeroSection;
