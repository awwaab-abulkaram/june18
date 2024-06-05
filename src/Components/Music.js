import React from 'react'
import { Link } from 'react-router-dom'

const Music = () => {
  return (
    <div>
        <div className='container-box'>
            <div className='secondary-heading'>You're music to my ears!</div>
            <button><Link path ='/timeline'>Click Here! </Link></button>
        </div>
    </div>
  )
}

export default Music