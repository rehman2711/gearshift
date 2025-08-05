import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios"

const CheckAvailability = () => {

    const nav = useNavigate();

    // ***************************************************

    const [ carData  , setCarData] = useState("")


    // **********************************************

    const param = useParams();
    console.log(param.car_id)

    // ***************************************************************

    const fetchCar = async()=>{
        const result = await axios.get(`${process.env.REACT_APP_PUBLIC_API_URL}/cars/${param.car_id}`)
        // console.log(result.data)
        setCarData(result.data);
    }

    useEffect(()=>{
        fetchCar();
    },[])

    // +++++++++++++++++++++++++++++++++++++++++++++
    // __________________________________________________________________________
    
    // VISIBILITY CHANGE STATUS 

        // var visibilityStatusChange = ""

        // const functionVisible = function() {
        //     if (carData.cStatus.toLowerCase() === "available")
        //         {
        //         visibilityStatusChange = "visible"
        //         }
        //     else {
        //         visibilityStatusChange = "hidden"
        //     }

        // }
        // functionVisible();
        
        

        //     console.log(visibilityStatusChange)
        
        // ____________________________________________


  return (
    <>

    <div className="container-fluid" style={{backgroundColor:"rgba(173, 216, 230, 0.5)"}}>

        {/* CROSS BUTTON FOR DISMISS  */}
    <div className='float-end pt-3 pe-3'>
        <button className='btn btn-sm btn-danger fs-5 py-0 rounded-3' onClick={()=>{nav(-1)}}> <i className="bi bi-x"></i></button>
    </div>

    {/* &&&&&&&&&&&&&&&&&&&&&&& */}

        <div className="container pt-5">

            <div className="row d-flex justify-content-center align-items-center" style={{height:"100vh"}}>

                {/* 1 */}
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-12">
                            <img src={carData.cImg}  alt="" className='img-fluid border border-5 border-info rounded-5' />
                        </div>
                    </div>
                </div>

                {/* 2 */}
                {/* d-flex justify-content-end */}
                <div className="col-md-6 ">
                    <div className="row">
                        
                        <div className="col-md-12 text-center d-flex flex-column gap-5">
                        {/* <div className='d-flex justify-content-around'><h1><abbr title="Car Name" style={{textDecoration:"none"}}>Aston Martin</abbr></h1><h1>BMW</h1></div> */}
                        
                        <div className='d-flex justify-content-around mb-5'><h1>{carData.cName}</h1><h1>{carData.cBrand}</h1></div>
                        
                        {/* **********  TABLE ************** */}
                        
                        {/* DIV taken to center the table */}
                        <div className='d-flex justify-content-center align-items-center'>

                        <table className="table table-bordered table-striped w-75 ms-5 align-middle">
                                <tbody>
                                    <tr>
                                    <th
                                        className="bg-light text-end px-4 py-3 align-middle fs-5"
                                        style={{ width: "30%", whiteSpace: "nowrap" }}
                                    >
                                        Car Price
                                    </th>
                                    <td className="px-4 py-3 align-middle text-center fs-5" style={{ whiteSpace: "nowrap" }}>
                                        <span className="text-success">
                                        <span>{carData.cCurrency}&#160;</span><span>{carData.cMoney}</span><span> &#8725; {carData.cDay}</span>
                                        </span>
                                    </td>
                                    </tr>
                                    <tr>
                                    <th
                                        className="bg-light text-end px-4 py-4 align-middle fs-5"
                                        style={{ whiteSpace: "nowrap" }}
                                    >
                                        Car Status
                                    </th>
                                    <td className="px-4 py-4 align-middle text-center fs-5" style={{ whiteSpace: "nowrap" }}>
                                        {/* Conditionally Render The Button Color */}{/* IF Available = green ,, If Unavailable = red */}
                                        {/* style={{backgroundColor? :"green" , "red"}} */}
                                        {/* No need to write logic between {} because writing in style , and it is already inside { } */}
                                        {/* Used toLowerCase() to encounter "Available" || "available" this problem */}
                                        {/* We can make mistake like Writing available instead of Available so  . . .  */}
                                        <span className="text-light p-2 rounded" 
                                 style={{backgroundColor:  carData.cStatus && carData.cStatus.toLowerCase() === "available" ?"green": "red"}}>
                                                {carData.cStatus}
                                        </span>
                                    </td>
                                    </tr>
                                </tbody>
                        </table>

                        </div>

                        {/* **********************  TABLE END ************************** */}


                        </div>

                    </div>
                </div>

                {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

                {
                    // VISIBILITY BUTTONS HANDLING OF [ RENT NOW : NOTIFY ME ]

                    carData.cStatus === "Available" ? 

                <div className="col-md-12 text-center">
                    {/* RENT NOW BUTTON  */}
                    {/* instead val.id used carData.id because we are out-of map method  */}
                    <button className='btn btn-lg btn-info' onClick={()=>{nav(`/rentitnow/${carData.id}`)}}>Rent It Now</button>
                </div>
                :
                <div className="col-md-12 text-center">
                    {/* NOTIFY ME BUTTON  */}
                     <button className='btn btn-lg btn-info' onClick={()=>{nav(`/notifyme`)}}>Notify Me </button>
                </div>
                }


                {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

                
                

            </div>

        </div>

    </div>
    </>
  )
}

export default CheckAvailability
