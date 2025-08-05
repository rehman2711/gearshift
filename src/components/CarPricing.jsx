import React from 'react';
import './CarPricing.css'; 
import Modal from './Modal';


import { useState , useEffect } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const CarPricing = () => {

    // ***********************************************************

    const [car , setCar] = useState([])

    // state to manage MODAL
    // initialy false because , no need to display initially 
    // used if true then render so , have to be false
    // ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    const [clickedCar , setClickedCar ] = useState(false);


    // *****************************************************************

  const fetchData = async()=>{
    const resultData = await axios.get(`${process.env.REACT_APP_PUBLIC_API_URL}/cars`)
  
    setCar(resultData.data)
    console.log(resultData.data)

  }
  
  useEffect (()=>{
    fetchData(); 
  },[])

    // ***********************************************************

    const nav =  useNavigate()

    // *************************************************************


  return (
    <>
      {/* For Navbar*/}
      <div className="container-fluid bg-dark" style={{ padding: '50px 0' }}></div>

          {/* Modal */}
      {/* ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, */}

      <div className="container text-center border-dark border-5">
        { clickedCar &&
         <Modal 
         carName = {clickedCar.cName}
         carBrand = {clickedCar.cBrand}
         carImage = {clickedCar.cImg}
         carFuel = {clickedCar.cFuel}
         carTransmission = {clickedCar.type}
         carSeats = {clickedCar.person}
         carMileage = {clickedCar.mileage}
         carRent = {clickedCar.cMoney}
         carViewMoreOnclick = {()=>{nav(`/showall/cardetail/${clickedCar.id}`)}}
         onclickFunction = {()=>{setClickedCar(false)}} />}
      
      </div>

      {/* _____________________________________________________________________________ */}


      {/* *************************************************** */}

      <div className="container my-4">
        <h1 className='bg-warning text-light text-center py-2 my-5 rounded-4'>GET PRICING HERE</h1>
      </div>

      {/* Car Pricing Card */}
      <div className="container my-5">
        <div className="row">
          {
            car.map((val)=>{
                return(
                    <div className="col-md-4 col-lg-3 mb-5">
                        {/* card renamed to card-element ✅ */}
            <div className="card-element">

                        {/* price text */}
                 <div className='text-center text-light py-1 bg-dark' style={{borderRadius: "20px"}}>   
                        <h5>
                        <span>{val.cCurrency}</span>
                         <span className="fw-bold fs-4">&#160;{val.cMoney}</span>
                         <span> <span className='fs-5'>&#160;&#8725;&#160; </span> {val.cDay}</span>
                        </h5>
                 </div>
                <div style={{height:'200px'}}>
                <img
                src={val.cImg}
                // fake image url
                // src={val.cImg ? val.cImg : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="} 
                className="card-img-top car-imageHover img-fluid position-relative"
                style={{bottom:"45px"}}
                alt=""
                onClick={()=>{nav(`/pricing/showdetails/${val.id}`)}}
              />
                </div>
              
              <div className="card-body text-center mt-4">

                <h5 className="card-title fw-bold mb-2" style={{marginTop:"22px"}}>{val.cName}</h5>
                <p className="card-text text-dark text-opacity-75 px-2 fs-6">{val.cSlogan}</p>

                <div className='d-flex justify-content-around'>
                <button onClick={()=>{nav(`/carpricing/checkavailability/${val.id}`)}} style={{fontSize:"16px"}} className="btn btn-warning btn-sm mt-2 mb-4 px-2 py-1 rounded-3">{val.cAvailability}</button>
                <button className='btn btn-info px-2 py-1 mt-2 mb-4 rounded-3' onClick={()=>{setClickedCar(val)}}>Preview</button>
                {/* a modal should open for above */}

                </div>

              </div>

            </div>
          </div>

          
                )
            })
            }
        </div>
      </div>
    </>
  );
};

export default CarPricing;
