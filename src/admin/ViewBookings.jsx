import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewBookings = () => {

    const [viewCustomerBookings , setViewCustomerBookings ] = useState([]);

    // ===================================================

    const fetchCustomer = async()=>{
        const result = await axios.get(`${process.env.REACT_APP_PUBLIC_API_URL}/bookings`)

        setViewCustomerBookings(result.data)
    }

    useEffect(()=>{
        fetchCustomer();
    },[])

  return (
    <>

      <div className="container bg-dark rounded-4 p-3 text-light text-center my-5">
        <h1>ALL BOOKINGS</h1>
      </div>

      <div className="container my-5">
        <div className="row">

          {
            viewCustomerBookings.map((val,index)=>{
                return(
                    <div className="col-md-3">
            <div className="card shadow-lg rounded-5 border-0 p-3 my-3">
               <div className="card-body text-center">
                <img src={val.image} alt="Customer" height={'100px'} width={'100px'} className="rounded-circle img-fluid mb-3" style={{objectFit: 'cover' }}/>
                <h4 className="card-title mb-3 text-primary"> {val.name}</h4>
                <div className='text-start'>
                        <p className="mb-1"><strong>Mobile:</strong> {val.mobile}</p>
                        <p className="mb-1"><strong>Email:</strong> {val.email}</p>
                        <p className="mb-1"><strong>Gender:</strong> {val.gender}</p>
                        <p className="mb-1"><strong>Address:</strong> {val.address}</p>
                        <p className="mb-1"><strong>Licence:</strong> {val.licence}</p>

                        {/* USED cName INTEAD OF bookedCar */}
                        {/* BECAUSE GETTING THE VALUE ON SAVEFORM BY THE KEY-NAME cName = IN RENT NOW BOOKING   */}
                        <p className="mb-1"><strong>Booked Car:</strong> {val.cName}</p>
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

export default ViewBookings;
