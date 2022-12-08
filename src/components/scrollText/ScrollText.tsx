import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';
import './scrollText.css';

interface Props {
    text: string
}

const ScrollText: React.FC<Props> = ({ text }) => {
    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [0, 1], [0, -600]);

  return (
    <motion.h1 className='scrollText' style={{ x }}>
        {text}
    </motion.h1>
  )
}

export default ScrollText