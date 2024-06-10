import React from 'react'
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div> 
    <div className='sections'>
        <motion.div
        className="main-heading"
        initial={{ opacity: 0, x: 75 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      >
        Happiest Birthday, Beautiful!
      </motion.div>
        <motion.div 
        className='text-content'
        initial={{ opacity: 0, x: -75 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        >Many many happy returns of the day, my pretty pretty girl
        </motion.div>
        
    </div>
</div>
  )
}

export default Hero