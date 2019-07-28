import React from 'react'
import PropTypes from 'prop-types'
import Block from '../block/block';
import JobDetails from '../jobDetails/jobDetails';

import './workExperience.css';
import Title from '../title/title';

const jobs = [
  {
    title: 'Task Force Lead',
    company: 'Tetra Tech',
    'start': '3/2019',
    'end' : 'current',
    location: 'Paradise, CA',
    tasks: [
      'Lead debris removal crew in the proper debris removal guidelines set forth in the Debris Removal Operations Plan.',
      'Assist homeowners affected by the Camp Fire disaster through the debris removal program.',
      'Maintain safety compliance in the job site per OSHA standards.',
      'Ensuring data integrity by following proper protocol for documentation.'
    ],
    description: ""
  },
  {
    title: 'Field Supervisor \u2014 Waterways',
    company: 'Tetra Tech',
    'start': '2/2019',
    'end' : '3/2019',
    location: 'Bay County, FL',
    tasks: [
      'Maintain a safe environment for field monitors as well as making sure they are well-equipped for work.',
      'Ensure updates from higher management are being communicated down the line effectively and enforced.',
    ],
    description: ""
  },
  {
    title: 'Field Monitor \u2014 Waterways',
    company: 'Tetra Tech',
    'start': '2/2019',
    'end' : '2/2019',
    location: 'Bay County, FL',
    tasks: [
      'Observe crew clearing of eligible debris from Econfina Creek, and document process of removing of debris',
      'Steer a boat for another field monitor to document debris removal, or do both activities',
      'Accept debris trucks at landfill and properly process recoverytrac tickets for proper tracking',
    ],
    description: ""
  },
  {
    title: 'Field Monitor \u2014 Lynn Haven',
    company: 'Tetra Tech',
    'start': '10/2018',
    'end' : '2/2019',
    location: 'Bay County, FL',
    tasks: [
      'Observe crew clearing of eligible debris from ROW, and document process of removing of debris',
      'Accept debris trucks at disposal sites and properly process recoverytrac tickets for proper tracking',
      'Document the clearing of leaning trees and hanging tree limbs, and determine eligibility.'
    ],
    description: ""
  }

]

const WorkExperience = props => {
  return (
    <div className='work experience'>
      <Block>
        <Title  name='Work Experience' />
        <JobDetails data={jobs}/>
      </Block>
    </div>
  )
}

WorkExperience.propTypes = {

}

export default WorkExperience
