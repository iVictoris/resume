import React from 'react'
import PropTypes from 'prop-types'

import './title.css';

const Title = ({name}) => {
  return (
    <header className='title'>
      {name}
    </header>
  )
}

Title.propTypes = {

}

export default Title
