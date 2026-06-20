import { motion } from 'framer-motion'
import { contact } from '../data/siteContent'

export default function CTAStrip() {
  return (
    <section className="relative py-16 overflow-hidden bg-navy-gradient" aria-label="Call to action">
      {/* Animated gold glow blobs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-16 -left-16 w-64 h-64 rounded-full"
        style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)' }}
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full"
        style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gold-400 text-xs font-semibold tracking-[0.2em] uppercase">Book Your Journey Today</span>
          <h2 className="font-playfair font-bold text-white text-3xl md:text-4xl lg:text-5xl mt-3 mb-4">
            Ready for a <span className="gold-text">Royal Experience?</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg mb-8 max-w-xl mx-auto">
            Contact us now for instant quotes on luxury cars, tempo travellers, coaches, and all travel solutions across Varanasi and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={contact.primary.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 py-4 text-base shadow-gold"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Send WhatsApp Enquiry
            </a>
            <a
              href={contact.secondary.call}
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z"/>
              </svg>
              {contact.secondary.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
