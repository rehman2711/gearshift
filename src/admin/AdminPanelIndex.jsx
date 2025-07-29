import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPanelIndex = () => {

  // =========================================
    const nav = useNavigate();
  // =========================================
  return (
    <>
      <div className="container text-center mt-5">
        <h2 className="mb-4 display-1 fw-bold" style={{ fontFamily: 'Consolas' }}>
          Welcome to the Admin Panel
        </h2>
      </div>

      <div className="container mt-5">

        {/* Top Row */}
        <div className="row gy-4">
          <div className="col-md-4">
            <div className="card shadow h-100">
              <div className="card-body text-center">
                <h5 className="card-title">Users</h5>
                <p className="card-text">View and manage all registered users.</p>
                <button className="btn btn-primary">Go to Users</button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow h-100">
              <div className="card-body text-center">
                <h5 className="card-title">Manage Booking</h5>
                <p className="card-text">Generate and review activity.</p>
                <button className="btn btn-warning text-dark" onClick={()=>{nav("/admin/viewbookings")}}>View Bookings</button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow h-100">
              <div className="card-body text-center">
                <h5 className="card-title">Feedback</h5>
                <p className="card-text">Read user feedback and respond to inquiries.</p>
                <button className="btn btn-info">View Feedback</button>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row: Notifications & Support Tickets */}
        <div className="row mt-4 gy-4 justify-content-center">
          <div className="col-md-4 offset-md-2">
            <div className="card shadow h-100">
              <div className="card-body text-center">
                <h5 className="card-title">Notifications</h5>
                <p className="card-text">Manage and send notifications to users.</p>
                <button className="btn btn-dark">Send Notifications</button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow h-100">
              <div className="card-body text-center">
                <h5 className="card-title">Add Car</h5>
                <p className="card-text">Track and resolve user support issues.</p>
                <button className="btn btn-success" onClick={()=>{nav("/admin/form")}}>Add Car</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default AdminPanelIndex;
