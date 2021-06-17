//project1

import React from "react";
//import { NavLink } from 'react-router-dom';
import web from "../src/images/img2.jpg";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name1="About :"
        heads="India's No. 1 Online Platform "
        headed="▶ We Help You to choose your Dream Internship."
        para1="▶ We are a Family Since 2k21 and Heading towards more Years."
        para2="Founder: DEEPANSHU CHHANNA"
        imgsrc={web}
        visit="/contact"
        btname="Contact Us"
      />
    </>
  );
};

export default About;
