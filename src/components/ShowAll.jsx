import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CarCard from "./CarCard";

const ShowAll = () => {
  const [car, setCar] = useState([]);

  const fetchData = async () => {
    const resultData = await axios.get(`https://gearshift-api-9isy.onrender.com/api/cars`);

    setCar(resultData.data);
    // console.log(resultData.data)
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div
        className="container-fluid"
        style={{ height: "100px", backgroundColor: "rgba(1,1,1,0.27)" }}
      ></div>

      <h1 className="bg-dark text-light py-3 mx-2 my-4 text-center rounded display-3 fw-bold">
        {" "}
        All Rental Cars
      </h1>

      <div
        className="container-fluid"
        style={{ backgroundColor: "rgba(1,1,1,0.27)" }}
      >
        <div className="container">
          {/*     CARDS SECTION STARTS */}
          {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}

          <div className="container mt-5">
            <div className="row">
              {car.map((val, index, array) => {
                return (
                  <CarCard
                    imageC={val.cImg}
                    nameC={val.cName}
                    currencyC={val.cCurrency}
                    moneyC={val.cMoney}
                    dayC={val.cDay}
                    yearC={val.cYear}
                    mileageC={val.mileage}
                    typeC={val.type}
                    personC={val.person}
                    bagsC={val.bags}
                    buttonC={val.cButton}
                    id={val.id}
                  />
                ); //ending of return
              })}
            </div>
          </div>

          {/* CAR CARD SECTION END */}
          {/* $$$$$$$$$$$$$$$$$$$$$ */}
        </div>
        {/* SIMPLE CONTAINER END */}
      </div>
    </>
  );
};

export default ShowAll;
