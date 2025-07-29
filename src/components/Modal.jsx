import React from 'react';

const Modal = (props) => {

    const {carBrand , carFuel , carTransmission , carSeats , carMileage , carRent , onclickFunction , carViewMoreOnclick } = props

    // *****************************************************************

    // Effect For Main Box
    const shodowEffect = { boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.20)" }

    // Effect For small Box
    // const shodowEffect2 = { boxShadow:"0px 0px 10px rgba(255, 0, 150, 0.4)" } REJECTED

    // const shodowEffect2 = { boxShadow: "0 4px 12px rgba(78, 192, 255, 0.35), 0 2px 6px rgba(255, 78, 207, 0.25)"}  REJECTED

    // const shodowEffect2 = { boxShadow: "0 4px 12px rgba(0, 255, 209, 0.3), 0 2px 6px rgba(153, 0, 255, 0.25)"}  REJECTED

    const shodowEffect2 = { boxShadow: "0 4px 15px rgba(0, 255, 255, 0.2), 0 2px 10px rgba(255, 0, 255, 0.2)"} // APPROVED




  return (
    <>

    {/* VERTICAL CARDS */}
{/* 
    <div className="container p-4 my-3 rounded-5" style={{...shodowEffect, width:"40%"}}>
        <div className="row">
            
            <div className="col-md-12 ">
                // HTML ENTITY USED
                <button className=' btn btn-danger rounded-4 d-flex float-end fs-5' onClick={onclickFunction}>&#160;X&#160;</button>
                <h1 className="modal-title fw-bold text-center d-flex">{props.carName}</h1>
            </div>

            <div className="col-md-12 mt-2 mb-4">
                <img src={props.carImage} className="img-fluid px-5" alt="car" style={{borderRadius:"100px"}}/>
            </div>

        

            <div className="col-md-12 text-center d-flex justify-content-center align-items-center flex-column gap-2">
                        <div style={{...shodowEffect2}} className="mb-2 w-75 py-2 rounded-3 d-flex justify-content-around"><span>Brand</span>   <span> {carBrand}</span></div>
                        <div style={{...shodowEffect2}} className="mb-2 w-75 py-2 rounded-3 d-flex justify-content-around"><span>Fuel</span>   <span> {carFuel}</span></div>
                        <div style={{...shodowEffect2}} className="mb-2 w-75 py-2 rounded-3 d-flex justify-content-around"><span>Transmission</span>  <span>{carTransmission}</span></div>
                        <div style={{...shodowEffect2}} className="mb-2 w-75 py-2 rounded-3 d-flex justify-content-around"><span>Seats</span>   <span> {carSeats}</span></div>
                        <div style={{...shodowEffect2}} className="mb-2 w-75 py-2 rounded-3 d-flex justify-content-around"><span>Mileage</span>  <span> {carMileage} km/hr</span></div>
                        <div style={{...shodowEffect2}} className="mb-2 w-75 py-2 rounded-3 d-flex justify-content-around"><span>Rent/Day</span> <span> {carRent}/day</span></div>
            </div>

            <div className="col-md-12 text-center mt-3">
                <button className='btn btn-success' onClick={carViewMoreOnclick}>View More</button>
            </div>

            
        </div>
    </div> */}

    {/* __________________________________________________________________________________________________________________ */}

    {/* HORIZONTAL CARD POP UP =BACKUP


    <div className="container p-4 my-3 rounded-5 py-5" style={{...shodowEffect, width:"80%"}}>
        <div className="row">
            
        <div className="col-md-6 text-center">
            {/* HTML ENTITY USED 
            <h1 className="modal-title fw-bold text-center">{props.carName}</h1>
                
            <div className="col-md-12 mt-4 mb-4">
                <img src={props.carImage} className="img-fluid px-5" alt="car" style={{borderRadius:"100px"}}/>
            </div>
                
         </div>

         <div className="col-md-6">
            <div>
                <button className=' btn btn-danger rounded-4 d-flex float-end fs-5' onClick={onclickFunction}>&#160;X&#160;</button>
            </div>
            <div className="col-md-12">
                    <div className='text-center d-flex justify-content-center align-items-center flex-column gap-2' style={{paddingTop:"35px"}}>
                        <div style={{...shodowEffect2}} className="mb-2 w-75 py-2 rounded-3 d-flex justify-content-around"><span>Brand</span>   <span> {carBrand}</span></div>
                        <div style={{...shodowEffect2}} className="mb-2 w-75 py-2 rounded-3 d-flex justify-content-around"><span>Fuel</span>   <span> {carFuel}</span></div>
                        <div style={{...shodowEffect2}} className="mb-2 w-75 py-2 rounded-3 d-flex justify-content-around"><span>Transmission</span>  <span>{carTransmission}</span></div>
                        <div style={{...shodowEffect2}} className="mb-2 w-75 py-2 rounded-3 d-flex justify-content-around"><span>Seats</span>   <span> {carSeats}</span></div>
                        <div style={{...shodowEffect2}} className="mb-2 w-75 py-2 rounded-3 d-flex justify-content-around"><span>Mileage</span>  <span> {carMileage} km/hr</span></div>
                        <div style={{...shodowEffect2}} className="mb-2 w-75 py-2 rounded-3 d-flex justify-content-around"><span>Rent/Day</span> <span> {carRent}/day</span></div>
                    </div>
            </div>
         </div>

           

        

            

            <div className="col-md-12 text-center mt-3">
                <button className='btn btn-success' onClick={carViewMoreOnclick}>View More</button>
            </div>

            
        </div>
    </div> */}


    {/* ======================================================================================= */}


    {/* HORIZONTAL CARD POP UP */}


<div className="modal-overlay position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center" 
       style={{ backdropFilter: "blur(2px)", backgroundColor: "rgba(0, 0, 0, 0.4)", zIndex: 1050 }} >

  <div className="modal-card bg-white rounded-5 p-4" style={{ ...shodowEffect, width: "80%", maxHeight: "90vh", overflowY: "auto" }} >

    <div className="row py-3">
      {/*NAME , IMG*/}
      <div className="col-md-6 text-center">
        <h1 className="modal-title fw-bold text-center">{props.carName}</h1>
      </div>
      <div className="col-md-6">
          <button className="btn btn-danger rounded-4 d-flex float-end fs-5" onClick={onclickFunction}>&#160;X&#160;</button>
      </div>

    {/* ((((((((((((((((((((((((((((((((((((())))))))))))))))))))))))))))))))))))) */}

    <div className="col-md-12">
        <div className="row">

        <div className="col-md-6 mt-4 mb-4">
             <img src={props.carImage} className="img-fluid px-5" alt="car" style={{ borderRadius: "100px" }} />
        </div>

        <div className="col-md-6 text-center d-flex justify-content-center align-items-center flex-column gap-2">
          
            <div style={{ ...shodowEffect2 }} className="mb-2 w-75 py-2 rounded-3 d-flex justify-content-around"><span>Brand</span> <span>{carBrand}</span></div>
            <div style={{ ...shodowEffect2 }} className="mb-2 w-75 py-2 rounded-3 d-flex justify-content-around"><span>Fuel</span> <span>{carFuel}</span></div>
            <div style={{ ...shodowEffect2 }} className="mb-2 w-75 py-2 rounded-3 d-flex justify-content-around"><span>Transmission</span> <span>{carTransmission}</span></div>
            <div style={{ ...shodowEffect2 }} className="mb-2 w-75 py-2 rounded-3 d-flex justify-content-around"><span>Seats</span> <span>{carSeats}</span></div>
            <div style={{ ...shodowEffect2 }} className="mb-2 w-75 py-2 rounded-3 d-flex justify-content-around"><span>Mileage</span> <span>{carMileage} km/hr</span></div>
            <div style={{ ...shodowEffect2 }} className="mb-2 w-75 py-2 rounded-3 d-flex justify-content-around"><span>Rent/Day</span> <span>{carRent}/day</span></div>
          </div>

            {/* </div> */}
        </div>
    </div>

    {/* ((((((((((((((((((((((((((((((((((((())))))))))))))))))))))))))))))))))))) */}

      {/* RIGHT-COL DETAILS  */}

      <div className="col-md-12 text-center mt-3">
             <button className="btn btn-success" onClick={carViewMoreOnclick}>View More</button>
      </div>

      {/* (((((((((((((((((((((((((((((((((((((((((((((((()))))))))))))))))))))))))))))))))))))))))))))))) */}

    </div>

    
  </div>
</div>



    </>
  );
};

export default Modal;
