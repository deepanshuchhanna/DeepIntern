import React from "react";
//import { NavLink, Link } from "react-router-dom";
//import web  from '../src/images/img3.jpg'

//import { Button } from "bootstrap";
const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card ">
          <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p>{props.head}</p>
            <strong className="deep">{props.price}</strong>
          </div>

          {/* <Link to="https://www.youtube.com/" className="btn btn-primary"> */}
          {/* Enroll */}
          {/* </Link> */}
          {/* <div class="d-grid gap-2 mx-lg-8"> */}

          <div class="chhanna">
            <a href={props.btn}>
              <button class="btn btn-primary" type="button">
                Enroll
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
