import React from "react";
import { Link } from "react-router-dom";

function DashboardText(){
    return (
        <>
        <h1 className="text-center mt-5 mb-3">Dashboard</h1>
<hr className="my-4 w-50 m-auto" />
<div className="container d-flex gap-5">
<div className="container-fluid py-2 border">
  <div className="d-flex flex-column">
  <div className="d-flex justify-content-around mb-5 mt-3">
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-person-fill-check" viewBox="0 0 16 16">
    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
    <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z"/>
  </svg>
  <div className="d-flex flex-column row">
  <p className="col-md-8 fs-6 col-12 text-secondary"> Subscribers</p>
  <p className="col-md-8 fs-4">76,091</p>
</div>
  </div>
  <button className="btn btn-primary btn-lg" type="button"><a href="#" className="btn btn-primary btn-lg m-0 p-0">View all</a></button>
  </div>
</div>


<div className="container-fluid py-2 border">
 <div className="d-flex flex-column">
  <div className="d-flex justify-content-around mb-5 mt-3">
      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16">
          <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
      </svg>
      <div className="d-flex row">
         <p className="col-md-8 fs-6 col-12 text-secondary"> Instructors</p>
         <p className="col-md-8 fs-4">31</p>
      </div>
  </div>
      <button className="btn btn-primary btn-lg" type="button"><Link to="/AddIns" className="btn btn-primary btn-lg m-0 p-0">Add</Link></button>
  </div>
</div>

</div>
        </>
    );
}

export default DashboardText;