import React from "react";

function Card(props) {
  // javascript here
  return (
    <div className="card" style="width: 18rem;">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text">{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
