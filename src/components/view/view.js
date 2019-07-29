import React from 'react'
import PropTypes from 'prop-types'
import About from '../about/about';
import WorkExperience from '../workExperience/workExperience';

import './view.css';
import EducationExperience from '../educationExperience/educationExperience';

const View = props => {
  return (
    <div className='view center'>
      <About />
      <WorkExperience />
      <EducationExperience />    
    </div>
  )
}

View.propTypes = {

}

export default View
