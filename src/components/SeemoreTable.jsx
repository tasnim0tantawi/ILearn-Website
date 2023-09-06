import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function SeemoreTable() {
  return(
<div className="container mb-5 w-50">
<table className="table align-items-center">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Day</th>
      <th scope="col">Time</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry the Bird</td>
      <td>Thornton</td>
    </tr>
  </tbody>
</table>
</div>
  );
}

export default SeemoreTable;