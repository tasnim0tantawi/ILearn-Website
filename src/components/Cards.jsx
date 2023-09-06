import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";

function Cards(props) {
  return (
    <div className="container">
      <h1 className="text-center mt-5 mb-3">{props.title}</h1>
      <hr className="my-4 w-50 m-auto" />

      <div className="d-flex row justify-content-center gap-5">
        <div className="card" style={{ width: "18rem" }}>
          <img src={process.env.PUBLIC_URL + '/images/e.png'} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <div className="d-flex align-items-center gap-5 justify-content-between">
              <h5 className="m-0 p-0">price</h5>
              <Link to="/SeeMore" className="btn btn-primary">
                see more
              </Link>
            </div>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src={process.env.PUBLIC_URL + '/images/e.png'} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <div className="d-flex align-items-center gap-5 justify-content-between">
              <h5 className="m-0 p-0">price</h5>
              <Link to="/SeeMore" className="btn btn-primary">
                see more
              </Link>
            </div>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src={process.env.PUBLIC_URL + '/images/e.png'} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <div className="d-flex align-items-center gap-5 justify-content-between">
              <h5 className="m-0 p-0">price</h5>
              <Link to="/SeeMore" className="btn btn-primary">
                see more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
