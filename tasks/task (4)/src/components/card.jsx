import React from "react";

function Card({ data }) {
  return (
    <div className="card">
      <img src={data.thumbnail} alt={data.description} />
      <h5>{data.title}</h5>
      <p>{data.description}</p>
      <p className="card-text">{data.price}$</p>
      <a href="/" className="btn btn-primary">
        Go somewhere
      </a>
    </div>
  );
}

export default Card;
