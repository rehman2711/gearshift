import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

// ======================================================
//    BELOW THIS ALL IS COPY PASTED FROM RENTNOW.JSX FILE 
//    BECAUSE SAME RENT NOW 

const RentTheCarNow = () => {

    const [ RentTheCarNow , setRentTheCarNow]=useState()
    // =======================2===============================
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
          cName: ""})




    // *********************************************************************************************************************************

    const param = useParams();

    // console.log(param.choosen_id)


    // **********************************************************************************************************************************

    const nav = useNavigate()

    // **********************************************************************************************************************************


    const fetch = async()=>{

        const res = await axios.get(`${process.env.REACT_APP_PUBLIC_API_URL}/cars/${param.choosen_id}`)

        // console.log(res.data)

        setRentTheCarNow({
            cName : res.data.cName ,
            cImg : res.data.cImg 
        })
    }

    useEffect(()=>{
        fetch()
    },[])

    // =================================2=================================
    const fetchD = async()=>{
        const result = await axios.get(`${process.env.REACT_APP_PUBLIC_API_URL}/cars`);
 
        setRentNow(result.data)
 
        setRentNow2(result.data)
     }
         // console.log(rentNow)
         // console.log(rentNow2)
 
         useEffect(()=>{
             fetchD();
             },[])
 

    // **********************************************************************************************************************************
    // =====================2===============================
    const customerRenting =(e)=>{
        // console.log("disha")

        // FORCEFULLY CHANGED THE KEY'S VALUE BY AFTER PASSING THEM MANUALLY 
        // SETTED IN CUSTOMER-STATE FROM RENTTHECARNOW-STATE
        // ALSO SETTING A DEFAULT IMAGE
        setCustomer({...customer , [e.target.name] : e.target.value ,image:`/images/form-images/defaultAvatar.jpg` , cName : RentTheCarNow.cName})
        
        console.log(customer)

    }


    // _______________________________________

    const submitForm =(e)=>{
        
        e.preventDefault();

    console.log(customer)


        axios.post(`${process.env.REACT_APP_PUBLIC_API_URL}/bookings`,customer)

        // setCustomer(
        //     {
        //         image: "",
        //         name:"",
        //         mobile:"",
        //         email:"",
        //         gender:"",
        //         address:"",
        //         licence:"",
        //         cName: ""}
        // )

        nav("/")


    }




  return (
    <>

    <div className="container-fluid" style={{height:"100px",backgroundColor:"black"}}></div>

    <div className="container d-flex justify-content-center align-items-center" style={{height:"87vh"}}>
        <div className="row">
            
            {/* 1 */}
            <div className="col-md-7">
                
                
                <form action="" onSubmit={(e)=>{submitForm(e)}}>

                    <div className="row px-4 py-4 bg-dark text-light rounded-4">

                    <h2 className='text-center bg-primary p-1 rounded-4 mb-3'>Provide Documents</h2>

                    <label htmlFor="name" className='mb-1'>Customer Name</label>
                    <input type="text" name='name' className='form-control mb-3' onChange={(e)=>{customerRenting(e)}} placeholder='Enter Your Name' />

                    <label htmlFor="number" className='mb-1'>Mobile Number</label>
                    <input type="number" name='mobile' className='form-control mb-3' onChange={(e)=>{customerRenting(e)}} placeholder='Enter Your Number' />

                    <label htmlFor="number" className='mb-1'>Email Address</label>
                    <input type="email" name='email' className='form-control mb-3' onChange={(e)=>{customerRenting(e)}} placeholder='Enter Your Email' />

                    <label htmlFor="gender" className='mb-1'>Gender</label>
                    <select name="gender" className='form-control mb-3' onChange={(e)=>{customerRenting(e)}} id="">
                        <option value="none">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>

                    <label htmlFor="address" className='mb-1'>Residential Address</label>
                    <input type="text" name='address' className='form-control mb-3' onChange={(e)=>{customerRenting(e)}} placeholder='Enter Your Address' />

                    <div className="col-md-6">
                    <label htmlFor="licence" className='mb-1'>Driving Licence</label>
                    {/* <input type="file" name='licence' className='form-control mb-3' onChange={(e)=>{customerRenting(e)}}/> */}
                    <input type="text" name='licence' className='form-control mb-3' onChange={(e)=>{customerRenting(e)}} placeholder="27 DF 2001 " pattern="^\d{2} [A-Z]{3} \d{4}$" />
                    </div>

                    <div className="col-md-6">
                    <label htmlFor="carnamedisplay" className='mb-1'>Car Name</label>
                    <input type="text" className='form-control' readOnly name='cName' value={RentTheCarNow?.cName} onChange={(e)=>{customerRenting(e)}} />
                    </div>

                    <div className="col-md-12 text-center mt-3"><button type='submit' className='btn btn-warning'>Submit Form</button></div>

                    </div>

                    
                </form>
            </div>

            {/* 2 */}
            <div className="col-md-5 d-flex justify-content-center align-items-center ps-5">
                <span>
                    <p className='h3 text-center mb-5'>YOU CHOOSEN <mark className='rounded-3 px-2 my-4'>{RentTheCarNow?.cName}</mark> CAR</p>
                 {RentTheCarNow?.cImg && <img src={RentTheCarNow.cImg} className='img-fluid rounded-5' alt="" />}
                </span>
            </div>

            
        </div>
    </div>

    </>
  )
}

export default RentTheCarNow
