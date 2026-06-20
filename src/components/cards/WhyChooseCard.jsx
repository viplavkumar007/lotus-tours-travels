import { motion } from 'framer-motion'

export default function WhyChooseCard({ item }) {
  const { icon, title, desc } = item
  return (
    <motion.div
      className="group flex gap-4 p-5 rounded-2xl bg-white border border-navy-100 hover:border-gold-300 hover:shadow-gold transition-all duration-300"
      whileHover={{ y: -2 }}
    >
      <div className="w-11 h-11 rounded-xl bg-navy-600 flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-gold-500 transition-colors duration-300">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-navy-800 text-sm mb-1">{title}</h3>
        <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  )
}
