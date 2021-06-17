//project1

import React from "react";
//import web  from '../src/images/img3.jpg'
import Sdata from "./Sdata";
import Card from "./Card";

const Service = () => {
  return (
    <>
      <section id="star">
        <div className="my-5">
          <h1 className="text-center ">OUR SERVICES</h1>
        </div>
      </section>

      <div className="container-fluid mb-5 ">
        <div className="row ">
          <div className="col-10 mx-auto ">
            <div className="row gy-4">
              {Sdata.map((val, ind) => {
                return (
                  <Card
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    head={val.head}
                    price={val.price}
                    btn={val.btn}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
