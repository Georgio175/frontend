import React from "react";
import "./Footer.css";
// import { Button } from "./Button";
// import { Link } from "react-router-dom";
import { CustomButton } from "../Button/CustomButton";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <CustomButton buttonStyle="btn--outline">Subscribe</CustomButton>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <div>How it works</div>
            <div>Testimonials</div>
            <div>Careers</div>
            <div>Investors</div>
            <div>Terms of Service</div>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <div>Contact</div>
            <div>Support</div>
            <div>Destinations</div>
            <div>Sponsorships</div>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <div>Submit Video</div>
            <div>Ambassadors</div>
            <div>Agency</div>
            <div>Influencer</div>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <div>Instagram</div>
            <div>Facebook</div>
            <div>Youtube</div>
            <div>Twitter</div>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <div className="social-logo">
              Dalilouna <i className="fab fa-gripfire"></i>
            </div>
          </div>
          <small className="website-rights">Dalilouna © 2023</small>
          <div className="social-icons">
            <div className="social-icon-link facebook">
              <i className="fab fa-facebook-f" />
            </div>
            {/* <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
