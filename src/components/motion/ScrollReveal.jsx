import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
}

export default function ScrollReveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}
