import React from "react";
import PropTypes from "prop-types";

import "./about.css";
import Block from "../block/block";

const About = props => {
  return (
    <div className='about'>
      <Block>
        <div className="about-flex shrink">
          <div>
            <div>Victor Tran</div>
            <div>6949 21st St N</div>
            <div>Saint Petersburg, FL</div>
          </div>
          <div className='fx aife fdc'>
            <div>(850) 866-5156</div>
            <div>(727) 239-9316</div>
            <div>victor.n.tran@outlook.com</div>
          </div>
        </div>
      </Block>
    </div>
  );
};

About.propTypes = {};

export default About;
