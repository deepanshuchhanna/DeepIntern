//project1

import React from "react";
//import { NavLink } from 'react-router-dom';
import web from "../src/images/img1.jpg";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Welcome To: "
        head="Choose Your Dream Intership With Your One and Only Family:"
        a="DEEP INTERN'S"
        b="DEEP FAMILY"
        imgsrc={web}
        visit="/service"
        btname="Let's Start"
      />
    </>
  );
};

export default Home;
