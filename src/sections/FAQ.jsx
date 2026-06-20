import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from '../components/ui/SectionTitle'
import { faqs } from '../data/siteContent'

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border border-navy-100 rounded-xl overflow-hidden bg-white hover:border-gold-300 transition-colors duration-200">
      <button
        onClick={onToggle}
        className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-navy-300"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-navy-800 text-sm md:text-base pr-4">{item.q}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0 w-6 h-6 rounded-full bg-navy-50 flex items-center justify-center text-navy-600"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7"/>
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-navy-50 pt-3">
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  return (
    <section id="faq" className="section-pad bg-ivory">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Questions" title="Frequently" titleAccent="Asked Questions" subtitle="Everything you need to know about our services and booking process." />
        <div className="space-y-3">
          {faqs.map((item, idx) => (
            <FAQItem
              key={idx}
              item={item}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
