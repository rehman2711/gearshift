import React from 'react'
import { useState , useEffect } from "react";
import axios from 'axios'
import CarCard from './CarCard';

const OurFleets = () => {

    const [car , setCar] = useState([]) ; 
    
    const [allCars , setAllCars] = useState([]) ; 

    const [typeState , setTypeState] = useState([]) ;

  const fetchData = async()=>{
    const resultData = await axios.get(`${process.env.REACT_APP_PUBLIC_API_URL}/cars`)
  
    setCar(resultData.data)
    setAllCars(resultData.data)
    // console.log(resultData.data)

  }
  
  useEffect (()=>{
    fetchData(); 
  },[])

//   ***************************************************************************
//    ### ROUGH WORK ###
// const updateCars =(e)=>{

//         const originalValue = e.target.value ;

//         setTypeState({[e.target.name] : originalValue})

//             // Filter For SUV 
//         const result =car.filter((val,index,array)=>{
//             // console.log(`model is ${val.cModel}`)
//             // console.log(`type is ${typeState.carType}`)

//             // console.log(val.cModel)
//             // return originalValue === val.cModel ;

//             typeState.carType === "none" || car.cModel === typeState.carType
   
//            })
           
           
//            setCar(result);
    // }

    // ✅ console.log(typeState.carType);

    // APPLING FILTER METHOD TO GET SELECTIVE RESULTS .


    // ***********************************************************************

    // FULL AND FINAL LOGIC FOR CAR TYPE SELECTION 

    const updateCarType = (e) => {
        const selectedType = e.target.value;
    
        setTypeState({ [e.target.name]: selectedType }); 
        // Use it if have multiple work with the value 
    
        const resultType = selectedType === "none"
            ? allCars // full list showing using another state
            : allCars.filter((val) => selectedType === val.cModel );
            // if condition true => kept entire object
            // if not => ignore whole object
    
        setCar(resultType); //setting a state in state using by storing in a varible
    };

    // ***********************************************************************

    // FULL AND FINAL LOGIC FOR CAR BRAND SELECTION 

    const updateCarBrand = (e) => {
        const selectedBrand = e.target.value;
    
        setTypeState({ [e.target.name]: selectedBrand });
    
        const resultBrand = selectedBrand === "none"
            ? allCars
            : allCars.filter((val) => val.cBrand === selectedBrand);
    
        setCar(resultBrand);
    };
    

    // ***********************************************************************





    


    



  return (
    <>
    <div className="container-fluid" style={{height:"100px",backgroundColor:"black"}}>
    {/* 'rgba(1,1,1,0.27)' */}</div>

    <h1 className='bg-dark text-light py-3 mx-2 my-4 text-center rounded display-3 fw-bold'> Choose Your Car </h1>


<div className="container-fluid mb-5 pb-5" style={{backgroundColor:'rgba(1,1,1,0.27)'}}>

    <div className="container d-flex justify-content-around pt-5">
        <div>
            <select className='form-control text-center bg-success' style={{width:'400px'}} name="carType" id="carType" onChange={(e)=>{updateCarType(e)}}>
                <option value="none"> SELECT CAR TYPE</option>
                <option value="SUV">SUV</option>
                <option value="Luxury">LUXURY</option>
                <option value="Autobiography">AUTOBIOGRAPHY</option>
            </select>
        </div>

        <div>
            <select className='form-control text-center bg-info' style={{width:'400px'}}  name="carBrand" id="carBrand" onChange={(e)=>{updateCarBrand(e)}}>
                <option value="none">SELECT CAR BRAND</option>
                <option value="BMW">BMW</option>
                <option value="AUDI">AUDI</option>
                <option value="MERCEDEZ">MERCEDEZ</option>
                <option value="POSCHE">POSCHE</option>
                <option value="FERARI">FERARI</option>
            </select>
        </div>
    </div>

<div className="container">

<div className="container mt-5 text-center">
    {/* FOR DIPLAY PURPOSE OF MODEL AND BRAND  */}
{(typeState?.carType || typeState?.carBrand) && (
    <h1>
        {/* ek right side la filter sarakh karun tyat khali lihu ya , he currently watching this car / this brand  */}
      Currently Watching{" "}
      {typeState?.carBrand && typeState.carBrand !== "none" ? `${typeState.carBrand} Brand` : ""}
      {typeState?.carType && typeState.carType !== "none" ? `${typeState.carType} Cars` : ""}
    </h1>
  )}
</div>


    
    {/*     CARDS SECTION STARTS */}
    {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}

    <div className="container mt-5">
        <div className="row">

            {
                car.map((val , index , array)=>{
                    return(
                        <CarCard
                        imageC ={val.cImg}
                        nameC ={val.cName}
                        currencyC ={val.cCurrency}
                        moneyC ={val.cMoney}
                        dayC ={val.cDay}
                        yearC ={val.cYear}
                        mileageC ={val.mileage}
                        typeC ={val.type}
                        personC ={val.person}
                        bagsC ={val.bags}
                        buttonC ={val.cButton}

                        id ={val.id}

                        />
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



export default OurFleets
