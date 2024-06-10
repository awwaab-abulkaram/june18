import React from 'react'
import { motion } from 'framer-motion';


const Game = () => {
  const redirect = () =>{
    window.location.href = '/game-pics';
  }
  return (
    <div> 
    <div className='sections'>
            <motion.div 
            className='secondary-heading'
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            >
              My Player Two
            </motion.div>

            <motion.div
            className='text-content'
            initial={{ opacity: 0, x: 75 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            >
              Looking back at moments of Waffles.hehe and Daisyyy
            </motion.div>

            <motion.button
            className='play-button'
            initial={{ opacity: 0, size:0.5 }}
            whileInView={{ opacity: 1, size:1.2}}
            transition={{ duration: 2 }}
            onClick={redirect}
            >
              View
            </motion.button>
    </div>
</div>
  )
}

export default Game