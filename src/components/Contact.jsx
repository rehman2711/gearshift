import React from 'react'
import CommonComponent from './CommonComponent'

const contact = () => {
  return (
    <>

<CommonComponent
        pageName = "Contact"
        pageContent = "Reach out anytime — we’re here to assist you."
        />

{/* <div className="container-fluid" style={{height:"100px",backgroundColor:"black"}}></div> */}

<div className="container-fluid">

  <div className="container my-5 py-5">

    <div className="row">

      {/* 1 */}
      <div className="col-md-5">

        <div className='my-5'>
        <h2 style={{fontFamily: 'Verdana', fontWeight: 500 }}>Get In Touch</h2>
        <p style={{fontFamily: 'Verdana', fontWeight: 500 , fontSize:"19px",paddingRight:'60px'}}>Have questions or feedback? Contact us — we are here to help!</p>
        </div>

        <div className='my-5'>

        <div className='d-flex gap-3'>
          <div><i class="bi bi-envelope fs-1 bg-warning text-light px-3 py-2" style={{borderRadius:"70px"}}></i></div>
          <div>
            <span><h5>Email</h5></span>
            <span>info@gearshift.com</span>
          </div>
        </div>

        <div className='mt-5 d-flex gap-3'>
          <div><i class="bi bi-telephone fs-1 bg-warning text-light px-3 py-2" style={{borderRadius:"70px"}}></i></div>
          <div> <span><h5>Phone</h5></span>
          <span>+91 9021100158</span></div>
        </div>

        </div>

      </div>

      {/* 2 */}
      <div className="col-md-7">

      <form action="" className='rounded-5 text-dark' style={{boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.20)"}}>
          <div className="row px-5 py-5">

                <div className="col-md-6 my-3">
                  <label htmlFor="" className='fw-bold mb-2' style={{fontSize:"20px"}}>First Name</label>
                  <input type="text" placeholder='First Name' className='form-control' />
                </div>
                <div className="col-md-6 my-3">
                  <label htmlFor="" className='fw-bold mb-2' style={{fontSize:"20px"}}>Last Name</label>
                  <input type="text" placeholder='Last Name' className='form-control'  />
                </div>
                {/* *********************** */}

                <div className="col-md-6 my-3">
                  <label htmlFor="" className='fw-bold mb-2' style={{fontSize:"20px"}}>Email Address</label>
                  <input type="email" placeholder='Enter Email' className='form-control' />
                </div>
                <div className="col-md-6 my-3">
                  <label htmlFor="" className='fw-bold mb-2' style={{fontSize:"20px"}}>Phone Number</label>
                  <input type="text" placeholder='Enter Mobile Number' className='form-control'  />
                </div>
                {/* ************************************ */}

                <div className="col-md-12 my-3">
                  <label htmlFor="" className='fw-bold mb-2' style={{fontSize:"20px"}}>Message Here</label>
                  <textarea name="" id="" placeholder='Enter Your Message Here' className='form-control'></textarea>
                </div>
                {/* ****************************************** */}

                <div className="col-md-12 my-4 d-flex justify-content-between">
                  <div className='pt-2'>
                    <button className='btn btn-lg btn-warning ms-3'>Send Message</button>
                  </div>
                  <div className='d-flex gap-2 me-4'>
                    <span className='px-4 py-3 bg-warning' style={{fontSize:"16px",borderRadius:"60px"}}><i class="bi bi-twitter-x"></i></span>
                    <span className='px-4 py-3 bg-warning' style={{fontSize:"16px",borderRadius:"60px"}}><i class="bi bi-instagram"></i></span>
                    <span className='px-4 py-3 bg-warning' style={{fontSize:"16px",borderRadius:"60px"}}><i class="bi bi-facebook"></i></span>
                    <span className='px-4 py-3 bg-warning' style={{fontSize:"16px",borderRadius:"60px"}}><i class="bi bi-whatsapp"></i></span>
                  </div>
                </div>

          </div>
      </form>

      </div>

    </div>
  </div>
</div>
      
    </>
  )
}

export default contact
