import { motion } from 'framer-motion'
import { waServiceEnquiry } from '../../utils/whatsappLink'

export default function ServiceCard({ service }) {
  const { icon, title, desc } = service
  return (
    <motion.div
      className="card-base group p-6 flex flex-col"
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center text-2xl mb-4 group-hover:bg-gold-50 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="font-playfair font-bold text-lg text-navy-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed flex-1">{desc}</p>
      <a
        href={waServiceEnquiry(title)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-600 hover:text-gold-600 transition-colors group/link"
      >
        Enquire
        <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </motion.div>
  )
}
