import React from "react";
import { useState , useEffect } from "react";
import axios from 'axios'

import {NavLink, useNavigate} from 'react-router-dom'

import "../components/Home.css";
import Footer from "./Footer";

const Home = () => {

  const [car , setCar] = useState([])

  const fetchData = async()=>{
    
    // https://app.beeceptor.com/console/gearshift/ 

    // const resultData = await axios.get(`https://gearshift-car-api.onrender.com`)
    const resultData = await axios.get(`https://gearshift-api-9isy.onrender.com/api/cars`)
  
    setCar(resultData.data)
    console.log(resultData.data)

  }
  
  useEffect (()=>{
    fetchData(); 
  },[])

  const nav = useNavigate()

  const showAll =()=>{
  
    nav('/showall')

  }

  const Stats = [
    {
      number: "10+",
      text: "Years of Experience",
    },
    {
      number: "1000+",
      text: "Happy Clients",
    },
    {
      number: "200+",
      text: "Vehicles",
    },
    {
      number: "10+",
      text: "Locations",
    },
  ];

  
  return (
    <>
    {/* ^^^^^^^^^^^^^^^^^^^^^^^ */}
    {/* BACKGRORND SECTION START */}
      <div className="hero-bg">
        <div className="blur-effect">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div
                  style={{
                    marginTop: "370px",
                    marginBottom: "20px",
                    color: "white",
                    fontFamily: "homeFont",
                  }}
                >
                  <h1 style={{ fontSize: "48px", fontWeight: "1000" }}>
                    Explore the Road Ahead with{" "}
                    <span className="text-warning"> GearShift </span> Rentals
                  </h1>
                </div>

                <div className="col-md-11" style={{ marginBottom: "30px" }}>
                  <p className="text-light" style={{ fontSize: "18px" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    aliquam justo nec ligula eleifend efficitur.
                  </p>
                </div>

                <div className="col-md-4 ">
                  <button className="btn btn-lg btn-warning fw-bold text-light">
                    View Our Fleets
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BACKGROUND SECTION END */}
      {/* >>>>>>>>>>>>>>>>>>>>>> */}

      {/* FOUR CARDS OF CUSTOMER SECTION STARTS */}
      {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}

      <div className="container my-5 ">
        <div className="row">
          {Stats.map((val, index, array) => {
            return (
              <div className="col-md-3" key={index}>
                  <div>
                        <h1 className="text-center text-warning">{val.number}</h1>
                        <p className="text-center fw-bold fs-5">{val.text}</p>
                  </div>
            </div>
            );
          })}

        </div>
      </div>

      {/* FOUR CARDS OF CUSTOMER SECTION END */}
      {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}


    {/* CAR FLUID OUTER CONTAINER STARTS  */}

      <div className="container-fluid" style={{backgroundColor:'rgba(1,1,1,0.27)',paddingBottom:'100px'}}>

        <div className="container">
            
            <div className="d-flex justify-content-between" style={{paddingTop:'80px'}}>
                  <h1 className="mx-4 fw-bold">Featured Cars</h1>
                  <button className="btn btn-lg btn-warning px-5 py-2 mx-4" onClick={()=>{showAll()}}>Show All</button>
            </div>

            {/*     CARDS SECTION STARTS */}
            {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}

            <div className="container mt-5">
                <div className="row">

                    {
                        car.slice(0,4).map((val , index , array)=>{
                            return(
                                <div className="col-md-3 col-sm-6 my-3" key={index}>
                        <div className="card rounded-4">
                            <div className="card-body">
                                {/* img-fluid for image  */}
                                <div>
                                     <span className="btn btn-warning px-3 py-0" style={{position:"absolute",right:'30px', top:'24px' }}>{val.cYear}</span>
                                     <img src={val.cImg} alt="" className="img-fluid rounded"/>
                                </div>
                                <h5 className="mt-4">{val.cName}</h5>

                            <div><span>{val.cCurrency}</span>
                                 <span className="fw-bold fs-4">{val.cMoney}</span>
                                 <span> &#8725; {val.cDay}</span>
                            </div>
                            
                            {/* milage section // different object */}
                            <div className="d-flex justify-content-around mt-3 p-2 rounded-4" style={{backgroundColor:"rgba(1,1,1,0.15)"}}>
                                <div className="d-flex flex-column"><span><img src="/images/card-svg/mileage-icon.svg" alt="" height={"25px"}/></span>
                                <span style={{fontSize:"15px", textAlign:"center"}}>{val.mileage}</span></div>

                                <div className="d-flex flex-column text-center"><span><img src="/images/card-svg/transmission-icon.svg" alt="" height={"25px"}/></span> <span style={{fontSize:"15px", textAlign:"center"}}>{val.type}</span></div>

                                <div className="d-flex flex-column"><span><img src="/images/card-svg/seats-icon.svg" alt="" height={"25px"}/></span>
                                <span style={{fontSize:"15px", textAlign:"center"}}>{val.person}</span></div>

                                <div className="d-flex flex-column"><span><img src="/images/card-svg/baggage-icon.svg" alt="" height={"25px"}/></span>
                                <span style={{fontSize:"15px", textAlign:"center"}}>{val.bags}</span></div>
                            </div>

                                {/* just used navlink and redirected to `showall/cardetails/${val.cId}` page for details */}
                            <div className="text-center mt-4"><NavLink to={`/showall/cardetail/${val.id}`} className="btn btn-warning rounded-4">{val.cButton}</NavLink></div>
                            


                            </div>
                        </div>
                    </div>
                            ) //ending of return
                        })
                    }

                </div>
            </div>

            {/* CAR CARD SECTION END */}
            {/* $$$$$$$$$$$$$$$$$$$$$ */}

        </div>
      {/* SIMPLE CONTAINER END */}

      </div>
      {/* FLUID CONTAINER END */}

    </>
  );
};

export default Home;
