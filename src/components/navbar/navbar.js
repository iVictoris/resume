import React from "react";
import PropTypes from "prop-types";
import Avatar from "../avatar/avatar";

import "./navbar.css";
import Sidedrawer from "../sidedrawer/sidedrawer";
import ContactInfo from "../contactInfo/contactInfo";

const Navbar = props => {
  return (
    <div className="navbar">
      <div>
        <Avatar />
        <Sidedrawer />
        <ContactInfo />
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
