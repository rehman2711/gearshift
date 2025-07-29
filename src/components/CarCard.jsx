import React from 'react'

import { NavLink } from 'react-router-dom'

const CarCard = (props) => {
  return (
    <>

<div className="col-md-3 my-3">
                <div className="card rounded-4">
                    <div className="card-body">
                        {/* img-fluid for image  */}
                        <div>
                                <span className="bg-warning px-3 py-0 rounded" style={{position:"absolute",right:'30px', top:'24px' }}>{
                            props.yearC}</span>
                                <div className='text-center'> <img src={props.imageC} className="img-fluid rounded" alt="" style={{ height: "200px", width: "100%", objectFit: "cover" }}/> </div>
                        </div>
                        <h5 className="mt-4">{props.nameC}</h5>

                    <div><span></span>
                         <span className="fw-bold fs-4"></span>
                         <span></span>
                    </div>
                    <div><span>{props.currencyC}</span>
                    {/* used HTML Entity */}
                         <span className="fw-bold fs-4">&#160;{props.moneyC}</span>
                         <span> <span className='fs-5'> &#8725; </span> {props.dayC}</span>
                    </div>
                    
                    
                    {/* milage section // different object */}
                    <div className="d-flex justify-content-around mt-3 p-2 rounded-4" style={{backgroundColor:"rgba(1,1,1,0.15)"}}>
                        <div className="d-flex flex-column"><span><img src="/images/card-svg/mileage-icon.svg" alt="" height={"25px"}/></span>
                        <span style={{fontSize:"15px", textAlign:"center"}}>{props.mileageC}</span></div>

                        <div className="d-flex flex-column text-center"><span><img src="/images/card-svg/transmission-icon.svg" alt="" height={"25px"}/></span> <span style={{fontSize:"15px", textAlign:"center"}}>{props.typeC}</span></div>

                        <div className="d-flex flex-column"><span><img src="/images/card-svg/seats-icon.svg" alt="" height={"25px"}/></span>
                        <span style={{fontSize:"15px", textAlign:"center"}}>{props.personC}</span></div>

                        <div className="d-flex flex-column"><span><img src="/images/card-svg/baggage-icon.svg" alt="" height={"25px"}/></span>
                        <span style={{fontSize:"15px", textAlign:"center"}}>{props.bagsC}</span></div>
                    </div>

                    <div className="text-center mt-4"><NavLink to={`/showall/cardetail/${props.id}`} className="btn btn-warning rounded-4" >{props.buttonC}</NavLink></div>
                    


                    </div>
                </div>
            </div>
      
    </>
  )
}

export default CarCard
