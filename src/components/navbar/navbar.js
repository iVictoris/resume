import React from 'react'
import PropTypes from 'prop-types'
import Avatar from '../avatar/avatar';

import './navbar.css';

const Navbar = props => {
  return (
    <div className='navbar'>
      <Avatar />
    </div>
  )
}

Navbar.propTypes = {

}

export default Navbar
