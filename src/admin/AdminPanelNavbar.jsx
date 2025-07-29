import React from 'react'
import { NavLink, Outlet } from "react-router-dom";

import '../admin/AdminPanelNavbar.css'

const AdminPanelNavbar = () => {
  return (
    <>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 px-3">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/admin"><h1>Admin</h1></NavLink>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse justify-content-center" id="navbarContent">
      <ul className="navbar-nav">

        <li className="nav-item">
          <NavLink className="nav-link fs-5" to="dashboard">Dashboard</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link fs-5" to="form">Form</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link fs-5" to="managedata">Manage Data</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link fs-5" to="viewbookings">View Bookings</NavLink>
        </li>

      </ul>
    </div>

    <div className="d-flex">
      <NavLink className="nav-link text-danger fs-4" to="#">Logout</NavLink>
    </div>
  </div>
</nav>

{/* **************************** Admin Navbar End ******************************** */}

<Outlet/>
    </>
  )
}

export default AdminPanelNavbar
