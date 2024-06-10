import React from 'react'
import { motion } from 'framer-motion';

const Gallery = () => {
  return (
    <div>
        <div className='sections'>
        <motion.div 
            className='secondary-heading'
            initial={{ opacity: 0, x: 75 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            >
              A Gallery of us..,
            </motion.div>
        <img src='' alt=''></img>
        </div>
    </div>
  )
}

export default Gallery