import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate , useParams } from 'react-router-dom'
import axios from 'axios'



const AdminCarEdit = () => {

    const [carInfo , setCarInfo]=useState({
        cId:'',
        cName:'',
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
        buttonDelete:"Delete"
    })

    // *****************************************************

    const para = useParams();

    // fetching car id through params
    console.log(para.carid);

    // **************************************

    const fetchData = async()=>{

    const carResult = await axios.get(`https://gearshift-api-9isy.onrender.com/api/cars/${para.carid}`)

    setCarInfo({
        cId:carResult.data.cId,
        cName:carResult.data.cName,
        cImg:carResult.data.cImg,
        cText:carResult.data.cText,
        cCurrency:carResult.data.cCurrency,
        cMoney:carResult.data.cMoney,
        cDay:carResult.data.cDay,
        cYear:carResult.data.cYear,
        cModel:carResult.data.cModel,
        cBrand:carResult.data.cBrand,
        cButton:'See Full Details',
        img1:carResult.data.img1,  
        img2:carResult.data.img2,  
        img3:carResult.data.img3 ,
        mileage:carResult.data.mileage,  
        type:carResult.data.type,  
        person:carResult.data.person,
        bags:carResult.data.bags,
        buttonEdit:"Edit",
        buttonDelete:"Delete"
    });

    // const {}

    }

    useEffect(()=>{
        fetchData();
    },[])

    // ***************************************

    const updateValue =(e)=>{
        setCarInfo ({...carInfo , [e.target.name] : e.target.value})
    }

    // *******************************************

    const nav = useNavigate(); 

    // *******************************************

    const updateInformation =(e)=>{

        e.preventDefault();

        axios.patch(`https://gearshift-api-9isy.onrender.com/api/cars/${para.carid}`,carInfo)

        nav('/admin/managedata')

        setCarInfo(
            ({
                cId:'',
                cName:'',
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
                buttonDelete:"Delete"
            })
        )
        
       
    }


        
  return (
    <>

    <form action="" onSubmit={(e)=>{updateInformation(e)}}>

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
                <div className="col-md-10 my-2">
                    <label htmlFor="carname" className='my-1'> Car Name</label>
                    <input type="text" placeholder='Enter Car Name' name='cName' id='cName' value={carInfo.cName} onChange={(e)=>{updateValue(e)}} className='form-control' />
                </div>
                
                {/* ******************************************** */}

                <div className="col-md-6 my-2">
                    <label htmlFor="carname" className='my-1'> Car Model</label>
                    <input type="text" placeholder='Enter Car Brand' name='cModel' id='cModel' value={carInfo.cModel} onChange={(e)=>{updateValue(e)}} className='form-control' />
                </div>
                <div className="col-md-6 my-2">
                    <label htmlFor="carname" className='my-1'> Car Brand</label>
                    <input type="text" placeholder='Enter Car Brand' name='cBrand' id='cBrand' value={carInfo.cBrand} onChange={(e)=>{updateValue(e)}} className='form-control' />
                </div>

                {/* ********************************* */}

                <div className="col-md-6 my-2">
                    <label htmlFor="carimage" className='my-1'>Car Image</label>
                    <input type="file" name='cImg' id='cImg' onChange={(e)=>{updateValue(e)}} className='form-control' />

                    {/* Used detail tag for open=close to view that perticular image */}
                    <details>
                    <summary>Show Car Image</summary>
                    <img src={carInfo.cImg} alt="" className='img-fluid my-3'/>
                    </details>
                </div>
                <div className="col-md-6 my-2">
                    <label htmlFor="cartext" className='my-1'>Car Description</label>
                    <textarea placeholder="Write Car Description here" name='cText' id='cText' value={carInfo.cText} onChange={(e)=>{updateValue(e)}} className='form-control'></textarea>
                </div>

                {/* ****************************************** */}

                <div className="col-md-3 my-2">
                    <label htmlFor="currency" className='my-1'>Currency</label>
                    <select  name='cCurrency' id='cCurrency' value={carInfo.cCurrency} onChange={(e)=>{updateValue(e)}} className='form-control'>
                        <option value="select">_SELECT_</option>
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
                        <option value="select">_SELECT_</option>
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
                    <input type="file" name='img1' id='img1' onChange={(e)=>{updateValue(e)}} className='form-control' />
                    <details>
                    <summary>Show Car Image</summary>
                    <img src={carInfo.img1} alt="" className='img-fluid my-3'/>
                    </details>
                </div>
                <div className="col-md-4 my-2">
                    <label htmlFor="2" className='my-1'>Image 2</label>
                    <input type="file" name='img2' id='img2' onChange={(e)=>{updateValue(e)}} className='form-control' />
                    <details>
                    <summary>Show Car Image</summary>
                    <img src={carInfo.img2} alt="" className='img-fluid my-3'/>
                    </details>
                </div>
                <div className="col-md-4 my-2">
                    <label htmlFor="3" className='my-1'>Image 3</label>
                    <input type="file" name='img3' id='img3' onChange={(e)=>{updateValue(e)}} className='form-control' />
                    <details>
                    <summary>Show Car Image</summary>
                    <img src={carInfo.img3} alt="" className='img-fluid my-3'/>
                    </details>
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
                        <option value="none">_SELECT_</option>
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

export default AdminCarEdit
