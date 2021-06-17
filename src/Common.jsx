//project1

import React from "react";
import { NavLink } from "react-router-dom";
//import web from "../src/images/img2.jpg";

const Common = (props) => {
  return (
    <>
      <section id="header" className="">
        <div className="container-fluid">
          <div classNamerow="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <img
                  src={props.imgsrc}
                  className="img-fluid animated"
                  alt="About-img"
                />
                <div className="col-md-12 mt-4 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column ">
                  {/* <h1>
                    {" "}
                    {props.name}{" "}
                    <strong className="brand-w">{props.name}</strong>
                  </h1> */}
                  <h1>
                    {" "}
                    <p className="w">{props.name}</p>{" "}
                    <strong className="brand-name">{props.a}</strong>
                  </h1>
                  {/*  for about page  */}
                  <h1>
                    {""}
                    <p className="w">{props.name1}</p>
                    <p className="a1"> {props.heads}</p>
                    {/* About part */}
                  </h1>

                  <h3>
                    <p className="s">{props.head}</p>
                    <strong className="design"> {props.b} </strong>
                  </h3>
                  <h4>
                    <p className="a2">{props.headed}</p> {/* About part */}
                    <p className="a3">{props.para1}</p> {/* About part */}
                    <strong className="founder">{props.para2}</strong>{" "}
                    {/* About part */}
                  </h4>
                  <div className="mt-4">
                    {/* <a href="" className="btn-get-started">Let's Start</a> */}
                    <NavLink to={props.visit} className="btn-get-started">
                      {props.btname}
                    </NavLink>
                  </div>
                </div>
                {/* <div className="col-lg-6 order-1 order-lg-2 header-img"></div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
