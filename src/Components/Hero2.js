import React from 'react'
import { motion } from 'framer-motion';
import cats from '../Assets/cats&cake.png'

const Hero2 = () => {
  return (
    <div> 
    <div className='sections'>
        <motion.div
        className="secondary-heading"
        initial={{ opacity: 0, x: 75 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      >
       Look the whole party is here!
      </motion.div>
        <img src={cats}></img>
        
    </div>
</div>
  )
}

export default Hero2