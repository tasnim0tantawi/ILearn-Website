import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Dcards(props) {
    return (
        <div class="album bg-body-tertiary mb-100">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3  justify-content-around ">
            
            <div class="col">
              <div class="card shadow-sm">          
                 <div class="card-body d-flex justify-content-lg-around">
                   <div class="icons">
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-person-fill-add" viewBox="0 0 16 16">
                      <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                      <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z"/>
                    </svg>
                     {/* <i class="bi bi-person-fill-add"></i>  */}
                   </div> 
                   <div>
                    <small class="text-body-secondary">Total subscribers</small>
                    <p class="card-text fs-3">79,091</p>
                   </div>
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                       {/* <a href="#" class="d-block text-decoration-none" aria-expanded="false">View All</a>  */}
                      <button type="button" class="btn btn-sm btn-warning my-3 mx-5">View All</button>
                  </div>
                </div>
             </div>
             
            <div class="col">
              <div class="card shadow-sm">              
                <div class="card-body  d-flex justify-content-lg-around">
                  <div class="icons">
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                      <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                    </svg>
                    {/* <i class="bi bi-people-fill"></i> */}
                  </div> 
                  <div>
                    <small class="text-body-secondary">Total instructors</small>
                    <p class="card-text fs-3">31</p>
                  </div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    {/* <a href="#" class="d-block text-decoration-none" aria-expanded="false">Add</a>  */}
                    <button type="button" class="btn btn-sm btn-warning my-3 mx-5"><a href="addInstructor.html" class="btn btn-sm btn-warning p-0">Add</a></button>
               </div>
              </div>
           </div>

        </div>
      </div>
    </div>
    );
}

export default Dcards;