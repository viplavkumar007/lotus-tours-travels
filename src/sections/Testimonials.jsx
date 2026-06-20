import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from '../components/ui/SectionTitle'
import TestimonialCard from '../components/cards/TestimonialCard'
import { testimonials } from '../data/siteContent'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const perPage = 3

  const pages = Math.ceil(testimonials.length / perPage)
  const visible = testimonials.slice(current * perPage, current * perPage + perPage)

  return (
    <section id="testimonials" className="section-pad bg-navy-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle light eyebrow="Client Stories" title="What Our" titleAccent="Clients Say" subtitle="Real reviews from happy customers across Varanasi and beyond." />

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          >
            {visible.map((t) => (
              <TestimonialCard key={t.name} t={t} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        {pages > 1 && (
          <div className="flex justify-center gap-2">
            {[...Array(pages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Page ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === i ? 'w-6 bg-gold-500' : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
