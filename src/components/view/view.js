import React from 'react'
import PropTypes from 'prop-types'
import About from '../about/about';
import WorkExperience from '../workExperience/workExperience';

import './view.css';

const View = props => {
  return (
    <div className='view w80c'>
      <About />
      <WorkExperience />
      
    </div>
  )
}

View.propTypes = {

}

export default View
