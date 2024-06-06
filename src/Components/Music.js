import React from 'react'
import { Link } from 'react-router-dom'

const Music = () => {
  return (
    <div>
        <div className='container-box'>
            <div className='secondary-heading'>You're music to my ears!</div>
            <Link to={'/timeline'}>click</Link>
        </div>
    </div>
  )
}

export default Music