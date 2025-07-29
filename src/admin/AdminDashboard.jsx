import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminDashboard = () => {
  return (
    <>

<div className="dashboard-container p-4">
      <h2 className="bg-warning text-light py-3 mx-3 my-3 mb-5 text-center rounded-4 display-3 fw-bold">Rental Car Dashboard</h2>

      {/* Dashboard Overview */}
      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card bg-info text-white">
            <div className="card-body">
              <h5 className="card-title">Total Cars</h5>
              <p className="card-text">150</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card bg-success text-white">
            <div className="card-body">
              <h5 className="card-title">Available Cars</h5>
              <p className="card-text">120</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card bg-danger text-white">
            <div className="card-body">
              <h5 className="card-title">Booked Cars</h5>
              <p className="card-text">30</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Bookings Section */}
      <div className="recent-bookings mt-4">
        <h4>Recent Bookings</h4>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Car Model</th>
              <th>Customer</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#001</td>
              <td>Toyota Corolla</td>
              <td>John Doe</td>
              <td><span className="badge bg-success">Confirmed</span></td>
            </tr>
            <tr>
              <td>#002</td>
              <td>Honda Civic</td>
              <td>Jane Smith</td>
              <td><span className="badge bg-warning">Pending</span></td>
            </tr>
            <tr>
              <td>#003</td>
              <td>Ford Focus</td>
              <td>Mike Johnson</td>
              <td><span className="badge bg-danger">Cancelled</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Quick Links */}
      <div className="quick-links mt-4">
        <h4>Quick Links</h4>
        <div className="row">
          <div className="col-md-4 mb-3">
            <NavLink to="/add-car" className="btn btn-primary w-100">
              Add New Car
            </NavLink>
          </div>
          <div className="col-md-4 mb-3">
            <NavLink to="/manage-bookings" className="btn btn-warning w-100">
              Manage Bookings
            </NavLink>
          </div>
          <div className="col-md-4 mb-3">
            <NavLink to="/car-reports" className="btn btn-success w-100">
              View Reports
            </NavLink>
          </div>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default AdminDashboard
