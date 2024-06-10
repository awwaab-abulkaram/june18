import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';

const Music = () => {
  return (
    <div>
        <div className='sections'>
        <motion.div 
            className='secondary-heading'
            initial={{ opacity: 0, x: -75 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            >
              You are the music to my ears!
            </motion.div>
        </div>
    </div>
  )
}

export default Music