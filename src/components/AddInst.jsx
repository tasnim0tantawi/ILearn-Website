import React from "react";

function AddInst(){
    return (
        <>
        <h1 class="text-center mt-5 mb-3">Add insturctor</h1>
<hr class="my-4 w-50 m-auto" />
<form class="w-50 m-auto">
  <label for="name" class="form-label">Name</label>
  <div class="mb-3 d-flex gap-5">
    <input type="text" class="form-control" id="FirstNAme" aria-describedby="instructorHelp" placeholder="First name" />
    <input type="text" class="form-control" id="lastName" aria-describedby="instructorHelp" placeholder="Last name" />

  </div>
  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <input type="email" class="form-control" id="email" aria-describedby="nameHelp" placeholder="Email" />
  </div>
  <div class="mb-3 ">
    <label for="Phone" class="form-label">Phone</label>
    <input type="text" class="form-control" id="Phone" aria-describedby="instructorHelp" placeholder="Phone number" />
  </div>
  <label for="Address" class="form-label">Address</label> <br />
  <div class="mb-3 d-flex gap-5">
    <input type="text" class="form-control" id="Address1" aria-describedby="instructorHelp" placeholder="House" />
    <input type="text" class="form-control" id="Address2" aria-describedby="instructorHelp" placeholder="Block" />
    <input type="text" class="form-control" id="confPass3" aria-describedby="instructorHelp" placeholder="Road" />
  </div>
  <div class="mb-3 ">
    <label for="Gender" class="form-label">Gender</label> <br />
  <select class="form-select" aria-label="Default select example">
  <option selected>Select</option>
  <option value="1">M</option>
  <option value="2">F</option>
</select>
  </div>
  <div class="d-grid d-flex justify-content-center gap-5">
    <button type="button" class="btn btn-outline-secondary px-5">Cancel</button>
    <button type="submit" class="btn btn-primary px-5">Add</button>
  </div>
</form>
</>
    );
}

export default AddInst;