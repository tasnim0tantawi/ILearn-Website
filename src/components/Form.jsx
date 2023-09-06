import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Form(props) {
  return (
    <div>
    <h1 className="text-center mt-5 mb-3">{props.type}</h1>
    <hr className="my-4 w-50 m-auto"/>
    <form className="w-50 m-auto ">
    {props.type === "Sign Up" && <div>  <label for="FirstNAme" className="form-label">Name</label>
      <div className="mb-3 d-flex gap-5">
        <input type="text" className="form-control" id="FirstNAme" aria-describedby="instructorHelp" placeholder="First name"/>
        <input type="text" className="form-control" id="lastName" aria-describedby="instructorHelp" placeholder="Last name"/>
      </div></div>}

      <div className="mb-3">
        <label for="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" aria-describedby="nameHelp" placeholder="Email"/>
      </div>

      <div className="mb-3">
        <label for="confPass" className="form-label">password</label>
        <input type="password" className="form-control" id="confPass" aria-describedby="instructorHelp" placeholder="Enter your password"/>
      </div>

      {props.type === "Sign Up" && <div className="mb-3">
        <label for="confPass" className="form-label">Confirm password</label>
        <input type="password" className="form-control" id="confPass" aria-describedby="instructorHelp" placeholder="Enter your password again"/>
      </div>}

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">{props.type}</button>
      </div>
    </form>
</div>
  );
}

export default Form;
