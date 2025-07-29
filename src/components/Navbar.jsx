import React from "react";

import "../components/Navbar.css";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      

          <nav className="navbar navbar-expand-lg position-absolute z-10 w-100 " id="gototop">
            <div className="container">
              <NavLink className="navbar-brand text-light" to="/">
                <img src="/images/motogear.png" height={"70px"} alt="" />  
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto gap-2">
                  <li className="nav-item">
                    <button className="nav-link nav-style fs-5">
                     <NavLink to="/" className="text-decoration-none nav-a">Home</NavLink> 
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link nav-style fs-5">
                     <NavLink to="ourfleet" className="text-decoration-none nav-a">Our Fleet</NavLink> 
                      
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link nav-style fs-5">
                     <NavLink to="/carpricing" className="text-decoration-none nav-a">Pricing</NavLink>                       
                    </button>
                  </li>
                  {/* Removed */}
                  {/* <li className="nav-item dropdown">
                    <button
                      className="nav-link nav-style dropdown-toggle text-light fs-5"                      
                      id="brandsDropdown"
                      data-bs-toggle="dropdown"
                    >
                     <NavLink to="#gototop" className="text-decoration-none nav-a ">Brands</NavLink>                      
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <button className="dropdown-item text-warning">
                          Audi
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item text-warning">
                          BMW
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item text-warning">
                          Mercedes
                        </button>
                      </li>
                    </ul>
                  </li> */}
                  <li className="nav-item">
                    <button className="nav-link nav-style fs-5">
                     <NavLink to="/about" className="text-decoration-none nav-a">About Us</NavLink>                       
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link nav-style fs-5">
                     <NavLink to="/contact" className="text-decoration-none nav-a">Contact Us</NavLink>                       
                    </button>
                  </li>
                </ul>
                <button className="btn btn-warning ms-4 fs-5">
                     <NavLink to="rentnow" className="text-decoration-none nav-a">Rent Now</NavLink>                 
                </button>
              </div>
            </div>
          </nav>

          <Outlet/>

        
    </>
  );
};



export default Navbar;
