import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NotifyMe = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

//   ********************************************************

  const nav = useNavigate(); 

//   ********************************************************

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Notification requested for:", email);
    setSubmitted(true);
  };

 
  return (
    <>
<div className="d-flex justify-content-center align-items-center min-vh-100 bg-light p-3">
        <div
          className="card notify-card p-5 w-100"
          style={{
            maxWidth: "400px",
            borderRadius: "1rem",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2 className="text-center mb-2 fw-bold">Stay Updated!</h2>
          

          {submitted ? (
            <div className="text-success text-center mt-4 fw-medium">
              Thank you! You’ll be notified soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">

              <p className="text-muted text-center mb-4">
            Enter your email to be notified when new cars become available.
          </p>
                <input
                  type="email"
                  className="form-control"
                  placeholder="email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Notify Me
              </button>
            </form>
          )}

          {/* Go to Home Button (only when not submitted) */}
                    {/* submitted is initially false  */}
                    {/* So this runs only when "Submitted" is true  */}
                    
                    {submitted && (
                <div className="text-center" style={{paddingBottom:"10px"}}>
                    <button className="btn btn-success mt-5 mb-0" onClick={()=>{nav("/")}}>
                    Go To Home
                    </button>
                </div>
                )}

        </div>

        
                    
 </div>



    </>
  );
};

export default NotifyMe;
