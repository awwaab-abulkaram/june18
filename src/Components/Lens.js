import React from 'react'
import { motion } from 'framer-motion';


const Lens = () => {
  return (
    <div> 
        <div className='sections'>
            <motion.div 
            className='secondary-heading'
            initial={{ opacity: 0, x: 75 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            >
              Look at Amruta thru my eyes 👀
            </motion.div>
        </div>
    </div>
  )
}

export default Lens