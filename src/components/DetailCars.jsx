import React, { useEffect } from 'react'
import axios from 'axios';

import { useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom'
import FooterCards from './FooterCards';

// import { CarGrid , carList } from './components/ShowAll'

const DetailCars = () => {

    const param =useParams();
    // console.log(param.idd)

    const [carData , setCardata] = useState({
        id:"",
        cId:"",
        cImg:"",
        cName:"",
        cText:"",
        cCurrency:"",
        cMoney:"",
        cDay:"",
        cYear:"",
        cButton:"",
        cModel:"",
        cBrand:"",
        cFuel:"",
        img1:"",
        img2:"",
        img3:"",
        mileage:"",
        type:"",
        person:"",
        bags:"" ,

        })
    

    const fetchURLdata = async()=>{

        const carResult = await axios.get(`${process.env.REACT_APP_PUBLIC_API_URL}/cars/${param.idd}`)

        console.log(carResult);

        const {data} = carResult

        console.log(data)


        setCardata({
            id:(data.id),
            cId:(data.cId),
            cImg:(data.cImg),
            cName:(data.cName),
            cText:(data.cText),
            cCurrency:(data.cCurrency),
            cMoney:(data.cMoney),
            cDay:(data.cDay),
            cYear:(data.cYear),
            cButton:(data.cButton),
            cModel:(data.cModel),
            cBrand:(data.cBrand),
            cFuel:(data.cFuel),
            img1:(data.img1),
            img2:(data.img2),
            img3:(data.img3),
            mileage:(data.mileage),
            type:(data.type),
            person:(data.person),
            bags:(data.bags) ,

        });

        console.log(carData)

        
    }
    
    useEffect (()=>{
        fetchURLdata() ;
    },[])

    // Box Show Variable 
    { var shadow = {  boxShadow: "0.7px 0.5px 5px rgba(0, 0, 0, 0.3)"}}

    { var shadow2 = {  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)"}}
    

    // ***************************************************************

    const nav = useNavigate();
    

  return (
    <>

    <div className="container-fluid pb-5" style={{ backgroundColor: "#81b29a"  }}>

      <div className="container">
        
        <div className="row">
    
    <div className="col-md-12" style={{marginTop:'170px'}}>

    <span className='d-flex justify-content-end'><button className='btn btn-sm btn-danger fs-5 py-0 rounded-3' onClick={()=>{nav(-1)}}><i class="bi bi-backspace"></i></button></span>
        
        <div className="row" >

            {/* Car Image */}
            <div className="col-md-6">
        <div className="col-6 col-lg-6 mb-4" ><img src={carData.cImg} alt='' className='' height={"450px"} style={{borderRadius:'30px'}}/>
        </div>
        {/* Main image section END */}

        {/* Sub image Start  */}

        <div className="container d-flex space-between bg- p-0 position-relative" style={{top:'20px', right:'10px'}}>

                <div className="col-md-4"><img src={carData.img1} className='img-fluid rounded-4' alt="" /></div>
                <div className="col-md-4 mx-2"><img src={carData.img2} className='img-fluid rounded-4' alt="" /></div>
                <div className="col-md-4"><img src={carData.img3} className='img-fluid rounded-4' alt="" /></div>

            {/* these images are under main image block */}
            </div>

            {/* #3 images Section Ends here  */}

            <div className="col-md-12 my-5 position-relative" style={{top:'100px', right:'10px'}}>
                <div className="card rounded-4" style={{...shadow}}>

                    <div className="card-body">
                        <div className='d-flex justify-content-start ms-4'>
                            <div className='mt-3 me-2 fs-4'>{carData.cCurrency}</div>
                            <div className='fw-bolder fs-1'>{carData.cMoney}</div>
                            <div className='mt-3 ms-2 fs-4'>&#160;&#8725;&#160; {carData.cDay}</div>
                        </div>

                        <br />
                        <hr />
                        <br />

                        <h2 className='text-start ms-4'>Interested in Renting This Car?</h2>

                        <button className='btn btn-lg btn-warning my-4 ms-4'>Submit An Enquiry</button>

                        <br />
                        <hr />
                        <br />

                        <h2>Contact Us</h2>
    <div style={{ height: '70px' }} className='d-flex flex-column justify-content-between mt-3'>

                     <div className='d-flex gap-3 ps-4'>
                        <span><img src="/images/card-svg/email.png" height={'27px'} alt="" /></span>
                        <span className='h6'>rehman@gearshift.com</span>
                     </div>

                     <div className='d-flex gap-3 ps-4'>
                        <span><img src="/images/card-svg/telephone.png" height={'27px'} alt="" /></span>
                        <span className='h6'>+91 9021100157</span>
                    </div>

 </div>



                    </div>

                </div>
            </div>

            </div>

            

            
            {/* Name and other below */}
            <div className="col-md-6 text-center">
                <h1 className='text-start ms-4 text-light display-5 fw-bold'>{carData.cName}</h1>
                {/* gap between that 6 buttons consist mileage automatic . . . */}
                <div className='d-flex gap-3' style={{marginTop:'30px',marginLeft:'30px'}}>

                    <div className='bg-light p-2 box-show' style={{borderRadius: "20px", ...shadow }}><span className='mx-2'><img src="/images/card-svg/mileage-icon.svg" alt="" height={"25px"}/></span><span>{carData.mileage}</span></div>

                    <div className='bg-light p-2' style={{borderRadius:"20px", ...shadow }}><span className='mx-2'><img src="/images/card-svg/transmission-icon.svg" alt="" height={"25px"}/></span>
                    <span>{carData.type}</span></div>

                    <div className='bg-light p-2' style={{borderRadius:"20px", ...shadow }}><span className='mx-2'><img src="/images/card-svg/seats-icon.svg" alt="" height={"25px"}/></span>
                    <span>{carData.person}</span></div>

                    <div className='bg-light p-2' style={{borderRadius:"20px", ...shadow }}><span className='mx-2'><img src="/images/card-svg/baggage-icon.svg" alt="" height={"25px"}/></span>
                    <span>{carData.bags}</span></div>

                    <div className='bg-light p-2' style={{borderRadius:"20px", ...shadow }}><span className='mx-2'><img src="/images/card-svg/calendar.svg" alt="" height={"25px"}/></span>
                    <span>{carData.cYear}</span></div>

                    <div className='bg-light p-2' style={{borderRadius:"20px", ...shadow }}><span className='mx-2'><img src="/images/card-svg/car-type.svg" alt="" height={"25px"}/></span>
                    <span>{carData.cModel}</span></div>

                </div>
                {/* six buutons end here  */}

                {/* Decription Text Here */}
                <div className="container my-5">
                    <p className='fs-5 ps-4 text-start'>{carData.cText}</p>

                    <br />
                    <hr />
                    <br />

                    {/* Specifications area */}
                    <h2 className='text-start ms-3 mt-3'>Specifications</h2>
                    <div className="container my-5 d-flex flex-column gap-4">
                        <div className='p-2 rounded-3 d-flex justify-content-between px-4' style={{backgroundColor:'#f5f5f5',...shadow2}}><span className='fw-bold'>Fuel Type</span> <span>{carData.cFuel}</span></div>

                        <div className='p-2 rounded-3 d-flex justify-content-between px-4' style={{backgroundColor:'#f5f5f5',...shadow2}}><span className='fw-bold'>Mileage</span> <span>{carData.mileage}</span></div>

                        <div className='p-2 rounded-3 d-flex justify-content-between px-4' style={{backgroundColor:'#f5f5f5',...shadow2}}><span className='fw-bold'>Transmission</span> <span>{carData.type}</span></div>

                        <div className='p-2 rounded-3 d-flex justify-content-between px-4' style={{backgroundColor:'#f5f5f5',...shadow2}}><span className='fw-bold'>Seats</span> <span>{carData.person}</span></div>

                        <div className='p-2 rounded-3 d-flex justify-content-between px-4' style={{backgroundColor:'#f5f5f5',...shadow2}}><span className='fw-bold'>Baggage</span> <span>{carData.bags}</span></div>

                        <div className='p-2 rounded-3 d-flex justify-content-between px-4' style={{backgroundColor:'#f5f5f5',...shadow2}}><span className='fw-bold'>Year</span> <span>{carData.cYear}</span></div>

                        <div className='p-2 rounded-3 d-flex justify-content-between px-4' style={{backgroundColor:'#f5f5f5',...shadow2}}><span className='fw-bold'>Type</span> <span>{carData.cModel}</span></div>

                        <div className='p-2 rounded-3 d-flex justify-content-between px-4' style={{backgroundColor:'#f5f5f5',...shadow2}}><span className='fw-bold'>Brand</span> <span>{carData.cBrand}</span></div>
                    </div>

                    {/* Specification end */}


                    <br />
                    <hr />
                    <br />

                    {/* Features Section */}
                    <h2 className='text-start ms-3 mt-3'>Features</h2>
                    <div className="container">
                        <div className="row my-3">

                            <div className="col-md-6 d-flex gap-4 my-2"><span><img src="/images/features/bluetooth.svg" height={'27px'} alt="" /></span>
                            <span><h5 className='fw-normal'>Bluetooth</h5></span></div>

                            <div className="col-md-6 d-flex gap-4 my-2"><span><img src="/images/features/control.svg" height={'27px'} alt="" /></span>
                            <span><h5 className='fw-normal'>Cruise Control</h5></span></div>

                            <div className="col-md-6 d-flex gap-4 my-2"><span><img src="/images/features/gps.svg" height={'27px'} alt="" /></span>
                            <span><h5 className='fw-normal'>Built-in GPS</h5></span></div>

                            <div className="col-md-6 d-flex gap-4 my-2"><span><img src="/images/features/camera.svg" height={'27px'} alt="" /></span>
                            <span><h5 className='fw-normal'>Rear Camera</h5></span></div>

                            <div className="col-md-6 d-flex gap-4 my-2"><span><img src="/images/features/charging.svg" height={'27px'} alt="" /></span>
                            <span><h5 className='fw-normal'>Wireless Charging</h5></span></div>

                            <div className="col-md-6 d-flex gap-4 my-2"><span><img src="/images/features/sensor.svg" height={'27px'} alt="" /></span>
                            <span><h5 className='fw-normal'>Parking Sensors</h5></span></div>
                        
                        </div>
                        
                    </div>


                </div>


            </div>
            {/* right side section endsssss */}
        </div>
    </div>

        </div>
      </div>

      </div>
      {/* All container End => For bg color to avoid navbar visibility */}

      {/*  ALL END  */}
      {/* NEW Container Begin */}

      <div className="container">

      </div>


      {/* ********************************************************************************************* */}
        
        {/* FEATURED CARD = 4 CARDS SECRION AGAIN  */}
        {/* STORED THAT CODE ONLY AND USED BELOW */}

        {/* 1 . Your FooterCards is trying to render <NavLink>.
        React says "Hey! I can't use NavLink unless there is a <Router> wrapped around it."
        That's why the error appears:
        useLocation() may be used only in the context of a <Router> component. */}

        {/* 2. In the file where you are rendering <FooterCards /> , wrap your app/components inside <BrowserRouter> like this: */}
        {/* <BrowserRouter>
                 <FooterCards />
           </BrowserRouter> */}

           {/*  ✅ After this,
                ✅ <NavLink>, useNavigate, etc., will work properly
                ✅ Error will be solved. */}




           {/* <BrowserRouter> */}
                 <FooterCards />
           {/* </BrowserRouter>  */}

    </>
  )
}

export default DetailCars
