import React from "react";

function Login() {
  return (
    <>
      <h1>Login</h1>
      <div style="background-color: whitesmoke ; border: 1px solid rgba(208, 208, 208, 0.586); padding: 30px; margin-left: 250px; margin-right: 250px; margin-top: 80px; margin-bottom: 80px; justify-content: center; display: flex;">
        <div className="col-md-7 col-lg-8">
          <h4 className="mb-3" style="text-align: center;">
            Log In
          </h4>
          <form className="needs-validation">
            <div className="row g-3">
              <div className="col-12">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                />
                <div className="invalid-feedback">
                  Please enter a valid email address.
                </div>
              </div>

              <div className="col-sm-12">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  required=""
                  placeholder="Enter your password"
                />
                <div className="invalid-feedback">
                  Please enter a valid password.
                </div>
              </div>

              <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                <button
                  type="button"
                  className="btn btn-warning btn-lg px-4 me-md-2 fw-bold"
                >
                  Log in
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-lg px-4"
                >
                  <a href="/" className="nav-link px-2 link-body-emphasis">
                    Cancel
                  </a>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
