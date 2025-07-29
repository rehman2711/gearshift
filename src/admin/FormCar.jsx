import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'

const FormCar = () => {

    const [carInfo , setCarInfo]=useState({
        cId:'',
        cName:'',
        cSlogan:'',
        cStatus:'',
        cImg:null,
        cText:'',
        cCurrency:'',
        cMoney:'',
        cDay:'',
        cYear:'',
        cModel:'',
        cBrand:'',
        cButton:'See Full Details',
        img1:null,  
        img2:null,  
        img3:null ,
        mileage:"",  
        type:"",  
        person:"",
        bags:"",
        buttonEdit:"Edit",
        buttonDelete:"Delete",
        cAvailability:"Check Availability"
    })
    // useState initialization with empty and null finished
    // => pass the value using value=atribute
    // ✅ initial value being passed 

    // console.log(carInfo) 

    // ************************************************

    // Event Handler with Synthetic Event 
    const updateValue =(e)=>{
        setCarInfo({ ...carInfo, [e.target.name] : e.target.value } )

        // if (e.target.name ==='cImg'){
        //     setCarInfo({ ...carInfo, [e.target.name] : e.target.file[0] } )
        // }
    }

    // / coming problem
    // # solution
    // if e.target.name===day set value `/`+e.target.value 
    //  this is call extendation of handler function

    // ^^^^^^^^^^^^^^^^^ PLAN ^^^^^^^^^^^^^^^^^^6
    // 1. form should be in admin 
    // 2. show all for admin should be also different
    // 3. delete and edit should be only at asmin 
    // 4. manupulate the same api so that customer cards should manupulate too like if admin delete some cards it will also reflect to show all at user interface. 

    // ✅ data commimg to object stored and setted the data
    // console.log(carInfo)



    // *************************************************************

    const nav =  useNavigate()

    // *************************************************************


    const submitForm =(e)=>{

        // stoped reloading by default behaviuor of form by prevent handler
        e.preventDefault();

        axios.post("https://gearshift-api-9isy.onrender.com/api/cars" , carInfo )

        setCarInfo({
            cId:'',
            cName:'',
            cSlogan:'',
            cStatus:'',
            cImg:null,
            cText:'',
            cCurrency:'',
            cMoney:'',
            cDay:'',
            cYear:'',
            cModel:'',
            cBrand:'',
            cButton:'See Full Details',
            img1:null,  
            img2:null,  
            img3:null ,
            mileage:"",  
            type:"",  
            person:"",
            bags:"",
            buttonEdit:"Edit",
            buttonDelete:"Delete",
            cAvailability:"Check Availability"
        })

        nav("/admin/managedata")





    }



  return (
    <>

    <form action="" onSubmit={(e)=>{submitForm(e)}}>

    <div className="bg-warning text-white my-4 mx-3 rounded-4">
                    <h1 className='text-light py-3 mx-2 my-4 text-center rounded display-3 fw-bold'>CAR INFORMATION FORM</h1>
                </div>

        <div className="container">

            <div className="row fw-bold">

                <div className="col-md-12 h4 my-3 mt-4">
                    Basic Car Information
                </div>
                

                {/* ************************************ */}
                {/* ************************************ */}

                <div className="col-md-2 my-2">
                    <label htmlFor="carid" className='my-1'>Car ID</label>
                    <input type="text" placeholder='Enter Car Id' name='cId' id='cId' value={carInfo.cId} onChange={(e)=>{updateValue(e)}} className='form-control' />
                </div>
                <div className="col-md-5 my-2">
                    <label htmlFor="carname" className='my-1'> Car Name</label>
                    <input type="text" placeholder='Enter Car Name' name='cName' id='cName' value={carInfo.cName} onChange={(e)=>{updateValue(e)}} className='form-control' />
                </div>
                <div className="col-md-5 my-2">
                    <label htmlFor="carslogan" className='my-1'> Car Slogan</label>
                    <input type="text" placeholder='Enter Car Slogan' name='cSlogan' id='cSlogan' value={carInfo.cSlogan} onChange={(e)=>{updateValue(e)}} className='form-control'/>
                </div>
                
                {/* ******************************************** */}

                <div className="col-md-4 my-2">
                    <label htmlFor="carname" className='my-1'> Car Model</label>
                    <input type="text" placeholder='Enter Car Model' name='cModel' id='cModel' value={carInfo.cModel} onChange={(e)=>{updateValue(e)}} className='form-control' />
                </div>
                <div className="col-md-4 my-2">
                    <label htmlFor="carname" className='my-1'> Car Brand</label>
                    <input type="text" placeholder='Enter Car Brand' name='cBrand' id='cBrand' value={carInfo.cBrand} onChange={(e)=>{updateValue(e)}} className='form-control' />
                </div>
                <div className="col-md-4 my-2">
                    <label htmlFor="carname" className='my-1'> Car Status</label>
                    <select name="cStatus" id="cStatus" value={carInfo.cStatus} onChange={(e)=>{updateValue(e)}} className='form-control'>
                        <option value="None">Select Status</option>
                        <option value="Available">Available</option>
                        <option value="Not Available">Not Available</option>
                    </select>
                </div>

                {/* ********************************* */}

                <div className="col-md-6 my-2">
                    <label htmlFor="carimage" className='my-1'>Car Image</label>
                    <input type="file" name='cImg' id='cImg' value={carInfo.cImg} className='form-control' onChange={(e)=>{updateValue(e)}} />
                </div>
                <div className="col-md-6 my-2">
                    <label htmlFor="cartext" className='my-1'>Car Description</label>
                    <textarea placeholder="Write Car Description here" name='cText' id='cText' value={carInfo.cText} onChange={(e)=>{updateValue(e)}} className='form-control'></textarea>
                </div>

                {/* ****************************************** */}

                <div className="col-md-3 my-2">
                    <label htmlFor="currency" className='my-1'>Currency</label>
                    <select  name='cCurrency' id='cCurrency' value={carInfo.cCurrency} onChange={(e)=>{updateValue(e)}} className='form-control'>
                        <option value="select">Select Currency</option>
                        <option value="RUPEES"> RUPEES </option>
                        <option value="US DOLLAR"> US DOLLAR </option>
                        <option value="AED"> AED</option>
                        <option value="POUNDS"> POUNDS </option>
                        <option value="DIRAM"> DIRAM </option>
                    </select>
                </div>
                <div className="col-md-3 my-2">
                    <label htmlFor="money" className='my-1'>Amount</label>
                    {/* used step property to increase amount by 2000 */}
                    <input type="number" placeholder='Enter The Amount'step="2000" min="0" name='cMoney' id='cMoney' value={carInfo.cMoney} onChange={(e)=>{updateValue(e)}} className='form-control'/>
                </div>
                <div className="col-md-3 my-2">
                    <label htmlFor="day" className='my-1'>Tenure</label>
                    <select  name='cDay' id='cDay' value={carInfo.cDay} onChange={(e)=>{updateValue(e)}} className='form-control'>
                        <option value="select">Select Tenure</option>
                        <option value="DAY"> &#47; DAY</option>
                        {/* slash not commimg  */}
                        <option value="WEEK"> / WEEK</option>
                        <option value="MONTH"> / MONTH</option>
                        <option value="YEAR"> / YEAR</option>
                    </select>
                </div>
                <div className="col-md-3 my-2">
                    <label htmlFor="year" className='my-1'>Buying Year</label>
                    <input type="month" placeholder='Enter Car Buying Year' name='cYear' id='cYear' value={carInfo.cYear} onChange={(e)=>{updateValue(e)}} className='form-control'/>
                </div>

                {/* ******************************************* */}

                <div className="col-md-12">
                    <br />
                    <hr />
                </div>

                {/* ************************************************ */}


                <div className="col-md-12 h4 my-4">
                    Car Other Images
                </div>

                {/* ************************************** */}
                {/* ************************************** */}

                <div className="col-md-4 my-2">
                    <label htmlFor="1" className='my-1'>Image 1</label>
                    <input type="file" name='img1' id='img1' value={carInfo.img1} onChange={(e)=>{updateValue(e)}} className='form-control' />
                </div>
                <div className="col-md-4 my-2">
                    <label htmlFor="2" className='my-1'>Image 2</label>
                    <input type="file" name='img2' id='img2' value={carInfo.img2} onChange={(e)=>{updateValue(e)}} className='form-control' />
                </div>
                <div className="col-md-4 my-2">
                    <label htmlFor="3" className='my-1'>Image 3</label>
                    <input type="file" name='img3' id='img3' value={carInfo.img3} onChange={(e)=>{updateValue(e)}} className='form-control' />
                </div>

                {/* ************************************************* */}
                <div className="col-md-12">
                    <br />
                    <hr />
                </div>

                {/* ******************************************** */}

                <div className="col-md-12 h4 my-4">
                    Car Features
                </div>

                {/* ********************************************** */}
                {/* ********************************************** */}

                <div className="col-md-3 my-2">
                    <label htmlFor="mileage" className='my-1'>Mileage</label>
                    <input type="text" placeholder='Enter Mileage' name='mileage' id='mileage' value={carInfo.mileage} onChange={(e)=>{updateValue(e)}} className='form-control' />
                </div>
                <div className="col-md-3 my-2">
                    <label htmlFor="type" className='my-1'>Car Type</label>
                    <select  name='type' id='type' value={carInfo.type} onChange={(e)=>{updateValue(e)}} className='form-control'>
                        <option value="none">Select Car Type</option>
                        <option value="Automatic">Automatic</option>
                        <option value="Manual">Manual</option>
                    </select>
                </div>
                <div className="col-md-3 my-2">
                    <label htmlFor="person" className='my-1'>Person Capability</label>
                    <input type="number" placeholder='Person Capability' name='person' id='person' value={carInfo.person} onChange={(e)=>{updateValue(e)}} className='form-control' />
                </div>
                <div className="col-md-3 my-2"><label htmlFor="person">Bags / Storage Capability</label>
                <input type="number" placeholder='Bags Capability' name='bags' id='bags' value={carInfo.bags} onChange={(e)=>{updateValue(e)}} className='form-control' />
                </div>

                <div className="col-md-12 my-5 text-center">
                    <button type='submit' className='btn btn-warning btn-md'>Submit Details</button>
                </div>

            </div>

        </div>
    </form>
      
    </>
  )
}

export default FormCar
