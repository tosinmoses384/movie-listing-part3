import React, { Fragment } from "react";
import './Card.css';
const Card = ({ poster, year, title }) => {
  return (
    <Fragment>
      <div className="card-container">
        <div className="card-group">
          <div className="card">
            <div className="card-img">
              <img src={poster} alt="" />
            </div>
            <div className="title">
              <h6>{title}</h6>
            </div>
            <div className="year">
              <h6>{year}</h6>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
