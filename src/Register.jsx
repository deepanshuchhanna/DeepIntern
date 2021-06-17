import React from "react";
//import web from "../src/images/img3.jpg";
import Lg from "./Lg";
import { DatePicker } from "antd";
import "antd/dist/antd.css";

const Register = () => {
  return (
    <>
      <div className="date">
        <DatePicker />
      </div>
      <div>
        <Lg />
      </div>
    </>
  );
};

export default Register;

// .prettierrc   ---> {} ----> and ctrl+s   to clen the page
