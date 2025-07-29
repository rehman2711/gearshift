import React from 'react';
import "./About.css";
import CommonComponent from './CommonComponent';

// import { NavLink } from 'react-router-dom';

const About = () => {

    const numarr = [
        {
            id: 1,
            num: "10+",
            word: "Years of Experience",

        },
        {
            id: 2,
            num: "1000+",
            word: "Happy Clients",
        },
        {
            id: 3,
            num: "200+",
            word: "Vehicles",
        },
        {
            id: 4,
            num: "10+",
            word: "Locations",
        },
    ]

    const values = [
        {
            id: 1,
            img: '/images/about-images/excellence.png',
            heading: 'Excellence',
            text : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, ipsa."
        },
        {
            id: 2,
            img: '/images/about-images/reliability.png',
            heading: 'Reliability',
            text : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, ipsa."
        },
        {
            id: 3,
            img: '/images/about-images/affordability.png',
            heading: 'Affordability',
            text : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, ipsa."
        },
        {
            id: 4,
            img: '/images/about-images/loyalty.png',
            heading: 'Loyalty',
            text : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, ipsa."
        },
    ]

    const locations = [
        {
            id: 1,
            img: "/images/about-images/ichalkaranji.jpg",
            lname: 'Ichalkaranji'
        },
        {
            id: 2,
            img: "/images/about-images/dhule.jpg",
            lname: 'Dhule'

        },
        {
            id: 3,
            img: "/images/about-images/satara.jpg",
            lname: 'Satara'

        },
        {
            id: 4,
            img: "/images/about-images/nashik.jpg",
            lname: 'Nashik'

        },
    ]
    return (
        <>

        <CommonComponent
        pageName = "About"
        pageContent = "Your trusted partner for easy and reliable car rentals."
        />

            <div className="container mt-5">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 style={{ marginTop: 110 }}>Our Journey</h1>
                            <p className='fs-5 text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. facere ipsa saepe. Distinctio vitae maiores doloremque, est, quia atque nulla quod blanditiis repellendus quos quae? Repellat facere, qui molesti ducimus vnim itaque maxime quam architecto aut at, nemo corrupti.</p>

                            <h1 style={{ marginTop: 60 }}>Our mission</h1>
                            <p className='fs-5 text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. facere ipsa saepe. Distinctio vitae maiores doloremque, est, quia atque nulla quod blanditiis repellendus quos quae? Repellat facere, qui molesti ducimus vnim itaque maxime quam architecto aut at, nemo corrupti.</p>
                        </div>

                        <div className="col-md-6 my-5">
                            <img src="/images/about-images/about-image.jpg" alt="" height={550} width={590} style={{ borderRadius: 30 }} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="info1 mt-5">
                <div className="container mt-5">
                    <div className="col-md-12">
                        <div className="row mb-5">
                            {
                                numarr.map((val, index) => {
                                    return (
                                        <div className="col-md-3">
                                            <h1 className=' fw-bold text-center' style={{ color: 'orangered' }}  >{val.num} </h1>
                                            <h5 className='text-dark text-center fw-bold ' >{val.word}</h5>
                                            <p className='text-center my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, eos!</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-3">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-6 my-5">
                            <img src="/images/about-images/person.jpg" alt="" height={550} width={590} style={{ borderRadius: 30 }} />
                        </div>


                        <div className="col-md-6">
                            <h1 style={{ marginTop: 110 }}>Meet Our Founder</h1>
                            <p className='fs-5 text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. facere ipsa saepe. Distinctio vitae maiores doloremque, est, quia atque nulla quod blanditiis repellendus quos quae? Repellat facere, qui molesti ducimus vnim itaque maxime quam architecto aut at, nemo corrupti.</p>

                            <h1 style={{ marginTop: 60 }}>Leadership & Expertise</h1>
                            <p className='fs-5 text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. facere ipsa saepe. Distinctio vitae maiores doloremque, est, quia atque nulla quod blanditiis repellendus quos quae? Repellat facere, qui molesti ducimus vnim itaque maxime quam architecto aut at, nemo corrupti.</p>
                        </div>


                    </div>
                </div>
            </div>

            <div style={{ backgroundColor:" rgba(193, 197, 200, 0.2)", boxShadow:"0px 0px 10px rgba(242, 243, 245, 0.2)",margin:"50px 0px"}}>
                <div className="container" style={{padding: "40px"}}>
                    <div className="col-md-12">
                        <div className="row">
                            {
                                values.map((val, index) => {
                                    return (
                                        <div className=" col-md-3 text-center">
                                            <div className="text-center" >
                                                <span style={{padding:'40px 25px'}} className='bg-warning rounded-circle'><img src={val.img} alt="" height={"60px"} className='my-4' /></span>
                                            </div>
                                            <h4 className='my-3'>{val.heading}</h4>
                                            <p className='my-3'>{val.text}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="loca my-5">
                <div className="container">
                    <h1 className=' fs-1'>Our Locations</h1>
                    <div className="row">
                        {
                            locations.map((val, index) => {
                                return (
                                    <div className="col-md-3 mt-5 text-center" >
                                        <div className="blur h-100 w-100 position-relative" >
                                           <div className='my-3'> <img src={val.img} alt="" height={200} style={{ borderRadius: 19 }} /></div>
                                            <span className=' text-secondary fw-bold'>{val.lname}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <br /><br />
                <br />
            </div>

           

        </>
    )
}

export default About
