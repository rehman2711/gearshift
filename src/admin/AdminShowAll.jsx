// ADMIN SHOW ALL => MANAGE DATA OF API FILE


import React from 'react'
import { useState , useEffect } from "react";
import axios from 'axios'
import { NavLink } from 'react-router-dom';

const AdminShowAll = () => {

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    const [car , setCar] = useState([])

    // ************************************

  const fetchData = async()=>{
    const resultData = await axios.get(`https://gearshift-api-9isy.onrender.com/api/cars`)
  
    setCar(resultData.data)
    console.log(resultData.data)

  }
  
        useEffect (()=>{
          fetchData(); 
        },[])


//   *******************************************************
  // Deleting Car Logic 

const DeleteCar =(click)=>{
    alert(`Car Is Successfully Deleted [ Car Id Is ${click} ] `)

    const res = car.filter((val)=>{

        return (val.id !== click )
    })

    setCar(res); 

    axios.delete(`https://gearshift-api-9isy.onrender.com/api/cars/${click}`)
}

// ************************************************



  return (
    <>

    <h1 className='text-light py-2 mx-3 my-4 text-center rounded-4 display-3 fw-bold' style={{backgroundColor:"#b0c4b1"}}> All Rental Cars</h1>

<div className="container-fluid" style={{backgroundColor:'rgba(1,1,1,0.27)'}}>

<div className="container">
    
    {/*     CARDS SECTION STARTS */}
    {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}

    <div className="container mt-5">
        <div className="row">

            {
                car.map((val , index , array)=>{
                    return(

                      <div className="col-md-3 my-3">
                <div className="card rounded-4">
                    <div className="card-body">
                        {/* img-fluid for image  */}
                        <div>
                                <span className="bg-warning px-3 py-0 rounded" style={{position:"absolute",right:'30px', top:'24px' }}>{
                            val.cYear}</span>

                            <div>
                            <img src={val.cImg} className="img-fluid rounded" alt="" style={{ height: "200px", width: "100%", objectFit: "cover" }}/> 
                            </div>

                        </div>
                        <h5 className="mt-4">{val.cName}</h5>

                    <div><span>{val.cCurrency}</span>
                    {/* used HTML Entity */}
                         <span className="fw-bold fs-4">&#160;{val.cMoney}</span>
                         <span> <span className='fs-5'> &#8725; </span> {val.cDay}</span>
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

                    <div className='d-flex justify-content-around'>
                        {/* 3 buttons */}

                    <div className="text-center mt-4"><NavLink to={`/admin/managedata/car-edit/${val.id}`} className="btn px-4 py-1 btn-success rounded-4" >{val.buttonEdit}</NavLink></div>
                    <div className="text-center mt-4"><button className="btn btn-danger px-4 py-1 rounded-4" onClick={()=>{DeleteCar(val.id)}}  >{val.buttonDelete}</button></div>

                    </div>
                    


                    </div>
                </div>
            </div>


                        // <AdminShowAllCard
                        // imageC ={val.cImg}
                        // nameC ={val.cName}
                        // currencyC ={val.cCurrency}
                        // moneyC ={val.cMoney}
                        // dayC ={val.cDay}
                        // yearC ={val.cYear}
                        // mileageC ={val.mileage}
                        // typeC ={val.type}
                        // personC ={val.person}
                        // bagsC ={val.bags}
                        // buttonEditC ={val.buttonEdit}
                        // buttonDeleteC ={val.buttonDelete}

                        // id ={val.id}

                        // // onClick={()=>{DeleteCar(val.id)}} 

                        // />
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


      
    </>
  )
}



export default AdminShowAll
