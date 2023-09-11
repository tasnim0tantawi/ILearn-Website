import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


function AddInsForm(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  return (
    <div
      style={{
        backgroundColor: "whitesmoke",
        border: "1px solid rgba(208, 208, 208, 0.586)",
        padding: "30px",
        marginLeft: "250px",
        marginRight: "250px",
        marginTop: "80px",
        marginBottom: "80px",
        justifyContent: "center",
        display: "flex"
      }}
    >
      <div className="col-md-7 col-lg-8">
        <h4 className="mb-3">Instructor Information</h4>

        <hr className="my-4" />

        <form className="needs-validation" noValidate="">
          <div className="row g-3">
            <div className="col-sm-6">
              <label htmlFor="firstName" className="form-label">
                First name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder=""
                value={firstName}
                onChange={handleFirstNameChange}
                required=""
              />
              <div className="invalid-feedback">Valid first name is required.</div>
            </div>

            <div className="col-sm-6">
              <label htmlFor="lastName" className="form-label">
                Last name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder=""
                value={lastName}
                onChange={handleLastNameChange}
                required=""
              />
              <div className="invalid-feedback">Valid last name is required.</div>
            </div>
            <div className="col-12">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="you@example.com"
                />
                <div className="invalid-feedback">
                  Please enter a valid email address.
                </div>
              </div>
  
              <div className="col-sm-12">
                <label htmlFor="phoneNumber" className="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phoneNumber"
                  placeholder="+973 2777 6778"
                  required=""
                />
                <div className="invalid-feedback">
                  Valid phone number is required.
                </div>
              </div>
  
              <div className="col-12">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="1234 Main St"
                  required=""
                />
                <div className="invalid-feedback">Please enter your address.</div>
              </div>
  
              <div className="col-12">
                <label htmlFor="<EUGPSCoordinates>2</EUGPSCoordinates>" className="<EUGPSCoordinates>2</EUGPSCoordinates>">
                  Gender
                </label>
                <select
                  className="<EUGPSCoordinates>2</EUGPSCoordinates>"
                  id="<EUGPSCoordinates>2</EUGPSCoordinates>"
                >
                  <option selected>Choose...</option>
                  <option value="<EUGPSCoordinates>1</EUGPSCoordinates>">Female</option>
                  <option value="<EUGPSCoordinates>2</EUGPSCoordinates>">Male</option>
                </select>
              </div>
  
              <div className="<EUGPSCoordinates>3</EUGPSCoordinates> mb-4 mb-lg-3">
                <button type="<EUGPSCoordinates>4</EUGPSCoordinates>" className="<EUGPSCoordinates>5</EUGPSCoordinates> px-4 me-md-2 fw-bold">
                  Save
                </button>
                <button type="<EUGPSCoordinates>4</EUGPSCoordinates>" className="<EUGPSCoordinates>6</EUGPSCoordinates> px-4">
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
export default AddInsForm;