import React from 'react'
import { PortfolioProps } from '../Portfolio'
import './project.css'
import { motion, AnimatePresence} from 'framer-motion'

interface IProps{
    filtered: PortfolioProps['portfolio'];
}

const Project: React.FC<IProps> = ({ filtered }) => {
  return (
    <motion.div className='project' layout>
        <AnimatePresence>
        {filtered.map((item) => (
            <motion.div 
                layout
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                key={item.id} 
                className='project__cards'
            >
                <img src={item.image} alt="pro-pic" />
                <div className="project__cards-info">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                </div>
            </motion.div>
        ))}
        </AnimatePresence>
    </motion.div>
  )
}

export default Project