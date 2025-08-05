import React, { useEffect, useState } from 'react'
import axios from 'axios'

const RentNow = () => {
    // to iterate option tag
    const [rentNow , setRentNow] = useState([]);
    
    // to dynamically store car-name on a onChange event
    const[ state , setState ] = useState({})    

    //used in filtering of selected cName and new c-name 
    const [rentNow2 , setRentNow2] = useState([]);

    // set the result in state and use its image only for show purpose 
    const[ image , setImage ] = useState({})

    // to post the information
    const [ customer , setCustomer ] = useState({
      // passing this image as by default so that can be changed after 
      image: "/images/form-images/defaultAvatar.jpg",
      name:"",
      mobile:"",
      email:"",
      gender:"",
      address:"",
      licence:"",
      cName: ""}
)

    // ************************************************

    const fetch = async()=>{
       const result = await axios.get(`${process.env.REACT_APP_PUBLIC_API_URL}/cars`);

       setRentNow(result.data)

       setRentNow2(result.data)
    }
        // console.log(rentNow)
        // console.log(rentNow2)

        useEffect(()=>{
            fetch();
            },[])

    //  *********************************************

    const carUpdate =(e)=>{

        var selectedCar = e.target.value
        // console.log(selectedCar)

        setState({[e.target.name]: e.target.value})

        // KEEP THAT OBJECT WHICH MEANT TO OUR CONDITION
        //  LIKE SELECTED CAR FROM DROP-DOWN (name_as_key) = IS EQUALS TO FILTER METHOD SAME API'S VAL.cName
        const imageResult = rentNow2.filter((val)=> selectedCar === val.cName  )

        // stored only that perticular object in image=state .
        // so that it is an array-object , access it using image[0].cImage
        setImage(imageResult) ;

        // console.log(imageResult)
    }

    //   console.log(image)

    // **********************************************************

    // onChange Event 

    const customerRenting =(e)=>{
        // console.log("disha")

        setCustomer({...customer , [e.target.name] : e.target.value })

    }


    // _______________________________________

    const submitForm =(e)=>{
        
        e.preventDefault();

    console.log(customer)


        axios.post(`${process.env.REACT_APP_PUBLIC_API_URL}/bookings`,customer)

        setCustomer(
            {
                image: "",
                name:"",
                mobile:"",
                email:"",
                gender:"",
                address:"",
                licence:"",
                cName: ""}
        )

        // MAKE IMAGE BLOCK EMPTY 
        setImage({}) ;



        // nav("/rented the car ")


    }


    
    
    



  return (
    <>
    {/* Checking image for state */}
    {/* <div className="container">
        <img src="/images/form-images/defaultAvatar.jpg" alt="" />
    </div> */}

    <div className="container-fluid" style={{height:"100px",backgroundColor:"black"}}></div>

    <div className="container d-flex justify-content-center align-items-center" style={{height:"87vh"}}>
        <div className="row">
            
{/* 1 */}
<div className="col-md-7">
                
                
    <form action="" onSubmit={(e)=>{submitForm(e)}}>

        <div className="row px-4 py-4 bg-dark text-light rounded-4">

            <h2 className='text-center bg-primary p-1 rounded-4 mb-3'>Provide Documents</h2>

                <label htmlFor="name" className='mb-1'>Customer Name</label>
                <input type="text" className='form-control mb-3' name='name' value={customer.name} onChange={(e)=>{customerRenting(e)}} placeholder='Enter Your Name' />

                <label htmlFor="number" className='mb-1'>Mobile Number</label>
                <input type="number" className='form-control mb-3' name='mobile' value={customer.mobile} onChange={(e)=>{customerRenting(e)}} placeholder='Enter Your Number' />

                <label htmlFor="number" className='mb-1'>Email Address</label>
                <input type="email" className='form-control mb-3' name='email' value={customer.email} onChange={(e)=>{customerRenting(e)}} placeholder='Enter Your Email' />

                <label htmlFor="gender" className='mb-1'>Gender</label>
                 <select name="gender" value={customer.gender} onChange={(e)=>{customerRenting(e)}} className='form-control mb-3' id="">
                     <option value="none">Select</option>
                     <option value="Male">Male</option>
                     <option value="Female">Female</option>
                 </select>

                <label htmlFor="address" className='mb-1'>Residential Address</label>
                <input type="text" className='form-control mb-3' name='address' value={customer.address} onChange={(e)=>{customerRenting(e)}} placeholder='Enter Your Address' />

                <div className="col-md-6">
                    {/* FILE FORMAT */} {/* ////////////////////////////////////////////// */}
                {/* <label htmlFor="licence" className='mb-1'>Driving Licence</label>
                <input type="file" className='form-control mb-3' name='licence' value={customer.licence} onChange={(e)=>{customerRenting(e)}}/> */}
                {/* TEXT FORMAT */}     {/* ////////////////////////////////////////////// */}
                <label htmlFor="licence" className='mb-1'>Driving Licence Number</label>
                <input type="text" className='form-control mb-3' name='licence' value={customer.licence} onChange={(e)=>{customerRenting(e)}} placeholder="27 DRF 2001" pattern="^\d{2} [A-Z]{3} \d{4}$" oninput="this.placeholder = 'HELLOW'"/>
                </div>
                <div className="col-md-6">
                    {/* select car map method */}
                <label htmlFor="choosecar" className='mb-1'>Choose A Car</label>
                {/* TWO FUNCTIONS ON ONE ONCHANGE EVENT */}

                <select name="cName" id="cName" className='form-control'  onChange={(e)=>{carUpdate(e); customerRenting(e)}} >
                    <option className='text-center' value="none">Select Car</option>
                    {
                        rentNow.map((val,index)=>{
                            return(
                                <option className='text-center' key={index} value={val.cName}>{val.cName}</option>
                            )
                        })
                        // +++++++++ MAP END ++++++++++++++
                    }                    
                 </select>
                </div>

                <div className="col-md-12 text-center mt-3"><button className='btn btn-warning'>Submit Form</button></div>

        </div>

                        
    </form>
</div>

            {/* 2 */}
            <div className="col-md-5 d-flex justify-content-around ps-5 mt-5">
                <span>
                    {/* USED IMAGE STATE INSTEAD OF STATE STATE  */}
                    {/* BECAUSE IN IMAGE STATE THERE IS A OBJECT OF THAT  */}
                    {image.length > 0 && <p className='h2 text-center mb-3'>YOU CHOOSEN <mark className='rounded-3 px-2 my-2'> {image[0].cName}</mark> CAR </p> }

                    {/* LOGIC FAILED */}
                  {/* {  customer.cImg ?  <h4 className='text-center'>You Selected {customer.cImg} Car</h4> : null  } */}


                 {/* APPLY FILTER ON ARRAY-O AND STORE DESIRED RESULT IN A STATE AND USEIT */}
                 {image.length > 0 && (<img src={image[0].cImg} alt="Selected Car" className="img-fluid rounded-4 my-5"  />)}


                </span>
            </div>

            
        </div>
    </div>

    </>
  )
}

export default RentNow
