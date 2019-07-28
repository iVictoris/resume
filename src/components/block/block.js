import React from 'react'
import PropTypes from 'prop-types'

import './block.css';

const Block = ({children}) => {
  return (
    <section className='block'>
      {children}
    </section>
  )
}

Block.propTypes = {

}

export default Block
