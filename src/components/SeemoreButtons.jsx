import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";

function SeemoreButtons() {
  return (
    <div className="container d-flex justify-content-center mb-5 gap-5">
      <Link to="/Register">
        <button type="button" className="btn btn-outline-success mb-5">
          Register now
        </button>
      </Link>
      <Link to="/MyCourses">
        <button type="button" className="btn btn-outline-success mb-5">
          View my courses
        </button>
      </Link>
    </div>
  );
}

export default SeemoreButtons;
