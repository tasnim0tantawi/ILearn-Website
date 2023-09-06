import React from "react";

function CoursesForm(props){
    return (
        <div> 
           <h1 className="text-center mt-5 mb-3">{props.type} course</h1>
           <hr className="my-4 w-50 m-auto" />
           <form className="w-50 m-auto">
              <div className="mb-3">
                  <label for="courseName" className="form-label">Name</label>
                  <input type="text" className="form-control" id="courseName" aria-describedby="nameHelp" placeholder="Enter course name" />
             </div>
             <div className="mb-3">
                  <label for="instructorName" className="form-label">Instructor</label>
                  <input type="text" className="form-control" id="instructorName" aria-describedby="instructorHelp" placeholder="Enter instructor name" />
             </div>
             <div className="input-group mb-3">
                  <span className="input-group-text">BD</span>
                  <span className="input-group-text">0.00</span>
                  <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" placeholder="Enter course price" />
             </div>
             <div className="mb-3">
                  <label for="courseName" className="form-label">Time</label>
                  <input type="text" className="form-control" id="courseName" aria-describedby="nameHelp" placeholder="Enter session timing" />
             </div>
             <div className="d-grid d-flex justify-content-center gap-5">
                  <button type="button" className="btn btn-outline-secondary px-5">Cancel</button>
                  <button type="submit" className="btn btn-primary px-5">{props.type}</button>
             </div>
           </form>
        </div>
    );
}

export default CoursesForm;