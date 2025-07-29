import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    
    <div className="container-fluid bg-darkkk">

<footer className="footer text-white">
      <div className="container py-5">
        <div className="row mb-5">
          {/* Left Column Part */}
          <div className="col-md-6">
            <div className="footer-logo d-flex align-items-center mb-3">
              <i className="bi bi-geo-alt-fill text-orange me-2"></i>
              <span className="fs-4 fw-bold">GEARSHIFT</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam justo nec ligula eleifend efficitur.
            </p>
            <div className="social-icons mt-4">
              <i className=" rounded-3 bg-warning bi bi-x"></i>
              <i className=" rounded-3 bg-warning bi bi-instagram"></i>
              <i className=" rounded-3 bg-warning bi bi-facebook"></i>
              <i className=" rounded-3 bg-warning bi bi-whatsapp"></i>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-md-6">
            <h5 className="fw-bold">Subscribe to our newsletter</h5>
            <input type="email" className="form-control my-4" placeholder="example@gmail.com" />
            <button className="btn btn-submit btn-success">SUBMIT</button>
          </div>
        </div>

        <hr className="border-secondary" />

        <div className="row mt-4">
          {/* Pages */}
          <div className="col-md-3">
            <h6 className="fw-bold">Pages</h6>
            <a href="/" className="footer-link">Home</a>
            <a href="/about" className="footer-link">About Us</a>
            <a href="/ourfleet" className="footer-link">Our Fleet</a>
            <a href="/contact" className="footer-link">Contact Us</a>
          </div>

          {/* Template Pages */}
          <div className="col-md-3">
            <h6 className="fw-bold">Template Pages</h6>
            <a href="/" className="footer-link">Cars Template</a>
            <a href="/" className="footer-link">Car Types Template</a>
            <a href="/" className="footer-link">Car Locations Template</a>
            <a href="/" className="footer-link">Car Brands Template</a>
            <a href="/" className="footer-link">Features Template</a>
          </div>

          {/* Utility Pages */}
          <div className="col-md-3">
            <h6 className="fw-bold">Utility Pages</h6>
            <a href="/" className="footer-link">Password Protected</a>
            <a href="/" className="footer-link">404 Not Found</a>
            <a href="/" className="footer-link">Style Guide</a>
            <a href="/" className="footer-link">Licenses</a>
            <a href="/" className="footer-link">Changelog</a>
            <a href="/" className="footer-link">Instructions</a>
          </div>

          {/* Contact Info */}
          <div className="col-md-3">
            <h6 className="fw-bold">Get In Touch</h6>
            <p className="mb-1">+91 00000 00000</p>
            <p className="mb-1">dear@motogear.com</p>
            <p>Sector-43 JM Road <br />Pune , 412 207</p>
          </div>
        </div>
      </div>
    </footer>

    </div>
  )
};

export default Footer;
