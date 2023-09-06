import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Testemonials() {
  return (
    <div className="container">
      <h1 className="text-center mt-5 mb-3">Testimonials</h1>
      <hr className="my-4 w-50 m-auto" />
      <div className="d-flex row justify-content-center gap-5">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testemonials;
