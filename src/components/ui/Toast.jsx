import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Toast({ message, type = 'success', onClose }) {
  useEffect(() => {
    const t = setTimeout(onClose, 4000)
    return () => clearTimeout(t)
  }, [onClose])

  return (
    <AnimatePresence>
      <motion.div
        role="alert"
        aria-live="polite"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className={`fixed bottom-24 left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl text-sm font-medium max-w-sm ${
          type === 'success' ? 'bg-navy-800 text-white' : 'bg-red-600 text-white'
        }`}
      >
        <span className="text-lg">{type === 'success' ? '✅' : '❌'}</span>
        {message}
        <button onClick={onClose} className="ml-2 text-white/70 hover:text-white text-lg leading-none">×</button>
      </motion.div>
    </AnimatePresence>
  )
}
