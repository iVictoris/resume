import React from "react";
import PropTypes from "prop-types";

import './contactInfo.css';

const ContactInfo = props => {
  return (
    <div className="contact info">
      <div>Victor Tran</div>
      <div>6949 21st St N</div>
      <div>Saint Petersburg, FL, 33702</div>
      <div>(850) 866-5156</div>
      <div>(727) 239-9316</div>
      <div>victor.n.tran@outlook.com</div>
    </div>
  );
};

ContactInfo.propTypes = {};

export default ContactInfo;
