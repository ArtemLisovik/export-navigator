import { motion } from 'framer-motion'

import { buttonsReveal, imageReveal, textAnimation } from 'config/animation'

import './Button.scss'

type ButtonProps = {
  children: React.ReactNode,
  type?: string
}
export const Button = ({ children, type = '' }: ButtonProps) => {
  return (
    <motion.div
      className={`button ${type}`}
      initial='hidden'
      whileInView='visible'
      transition={{ease: "easeOut"}}
      viewport={{ amount: 0.1, once: true }}
      custom={0.2}
      variants={buttonsReveal}
      >
      <span className='button__text'> {children}</span>
    </motion.div>
  )
}