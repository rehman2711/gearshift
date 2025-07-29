import React from 'react'
import "./About.css";



const CommonComponent = (props) => {
  return (
    <>

<div className="bgmain">
                <div className="bgblur">
                    <div id='about'>
                        <h1 className='fs-1 fw-bold'>{props.pageName}<span style={{ color: 'orangered' }}> GearShift </span> </h1>
                        <p className='my-2 fs-4'>{props.pageContent}</p>
                    </div>
                </div>
            </div>
      
    </>
  )
}

export default CommonComponent
