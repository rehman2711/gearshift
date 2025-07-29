import {BrowserRouter as Router , Routes , Route , useLocation } from 'react-router-dom'

// Scrolling To Top
import ScrollToTop from './Scroll-Behaviour/ScrollToTop'



import Navbar from './components/Navbar'
import Home from './components/Home'
import ShowAll from './components/ShowAll'
import DetailCars from './components/DetailCars'
import FourCarDetails from './components/FourCarDetail'
import OurFleets from './components/OurFleets'
import CarPricing from './components/CarPricing'
import PricingCarDetails from './components/PricingCarDetails'
import Footer from './components/Footer'
import Contact from './components/Contact'
import CheckAvailability from './components/CheckAvailability'
import About from './components/About'
import RentTheCarNow from './components/RentTheCarNow'
import NotifyMe from './components/NotifyMe'
import RentNow from './components/RentNow'


import FormCar from './admin/FormCar'
import AdminPanelNavbar from './admin/AdminPanelNavbar'
import AdminShowAll from './admin/AdminShowAll'
import AdminDashboard from './admin/AdminDashboard'
import AdminPanelIndex from './admin/AdminPanelIndex'
import AdminCarEdit from './admin/AdminCarEdit'
import ViewBookings from './admin/ViewBookings'


const NavbarRoute = () => {

  const loc = useLocation();

  return (
    <>
    
    {/* {loc.pathname !== ("/admin" && "/admin/dashboard" && "/admin/form" && "/admin/managedata" && "/admin/viewbookings") && <Footer/>} */}

    {/* GPT LOGIC */}
    {!["/admin", "/admin/dashboard", "/admin/form", "/admin/managedata", "/admin/viewbookings"].includes(loc.pathname) && <Footer />}

      
    </>
  )
}


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const App = () => {

  return (
    <>

    <Router>

    {/* Execute Globally */}
    <ScrollToTop />

      <Routes>

      <Route path="/" element={<Navbar/>} >

      {/* child routes */}
      <Route index element={<Home/>}></Route>

      <Route path="/ourfleet" element={<OurFleets/>}></Route>

      <Route path="/carpricing" element={<CarPricing/>}></Route>

      <Route path='/showall' element={<ShowAll/>}></Route>

      {/* Detailed Car Page */}
      <Route path='/showall/cardetail/:idd' element={<DetailCars/>}></Route>

      <Route path='/cardetailed/:iddd' element={<FourCarDetails/>}></Route>

      <Route path='contact' element={<Contact/>}></Route>

      <Route path='about' element={<About/>}></Route>

      <Route path='rentitnow/:choosen_id' element={<RentTheCarNow/>}></Route>
      
      <Route path='/rentnow' element={<RentNow/>}></Route>


      </Route>

      {/* ******************************** */}

      {/* FAKE PARENT CHILD PATHS  */}

      <Route path='/pricing/showdetails/:idddd' element={<PricingCarDetails/>}></Route>

      <Route path='/carpricing/checkavailability/:car_id' element={<CheckAvailability/>}></Route>


      {/* ******************************** */}

      <Route path='/notifyme' element={<NotifyMe/>}></Route>
      
      {/* ******************************** */}

      {/* parent admin */}
      <Route path="/admin" element={<AdminPanelNavbar/>}>

      <Route index element={<AdminPanelIndex/>}></Route>

      {/* child route */}
      <Route path='dashboard' element={<AdminDashboard/>} ></Route>

      <Route path='form' element={<FormCar/>} ></Route>

      <Route path='managedata' element={<AdminShowAll/>} ></Route>

      <Route path='viewbookings' element={<ViewBookings/>} ></Route>


      </Route>

      {/* ******************************** */}

     <Route path='/admin/managedata/car-edit/:carid' element={<AdminCarEdit/>} ></Route>

      {/* ******************************** */}






      


      </Routes>

      {/* Footer Used Globally == Also for Admin Panel*/}
      {/* <Footer/> */}

      {/* So We Are Using Conditional Rendering Using useLocation */}
      <NavbarRoute/>
      

    </Router>



    </>
  )
}

export default App
export {NavbarRoute}