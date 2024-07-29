import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';

const Navbar2 = () => {
  return (
    <div className='navbar-section'>
      <div className='text-navbar'><FavoriteIcon/><Link className='link-in-buttons' to = '/'> Made for Amruta, with love</Link> <FavoriteIcon/>.</div>
    </div>
  )
}

export default Navbar2