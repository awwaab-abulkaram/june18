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
        Happiest Belated Birthday, Beautiful!
      </motion.div>
        <motion.div 
        className='text-content'
        initial={{ opacity: 0, x: -75 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        >Happy belated birthday, I know I am a lil late. This thing took longer than expected.
        </motion.div>
        
    </div>
</div>
  )
}

export default Hero