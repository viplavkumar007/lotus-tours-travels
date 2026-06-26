import { motion } from 'framer-motion'
import { hero, contact, brand } from '../data/siteContent'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={hero.backgroundImage}
          alt="Luxury travel fleet"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950/90 via-navy-900/75 to-navy-800/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
      </div>

      {/* Gold line accent */}
      <div className="absolute left-0 top-1/4 w-1 h-32 bg-gold-gradient opacity-80 rounded-r-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40 text-center">
        {/* Eyebrow */}
        <motion.div {...fadeUp(0.1)} className="mb-6">
          <span className="inline-flex items-center gap-2 text-gold-400 text-xs font-semibold tracking-[0.25em] uppercase border border-gold-500/30 rounded-full px-4 py-1.5 backdrop-blur-sm bg-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            Varanasi's Premium Travel Partner
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 {...fadeUp(0.25)} className="font-playfair font-bold text-white leading-[1.12] mb-4">
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl py-1">{hero.headline}</span>
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl gold-text py-1">{hero.headlineAccent}</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p {...fadeUp(0.4)} className="font-playfair italic text-champagne text-lg md:text-xl mb-4">
          — {brand.tagline} —
        </motion.p>

        {/* Subheadline */}
        <motion.p {...fadeUp(0.5)} className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          {hero.subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.65)} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href={hero.cta1.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 py-4 text-base shadow-gold"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {hero.cta1.label}
          </a>
          <a
            href={hero.cta2.href}
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-full backdrop-blur-sm bg-white/10 hover:bg-white/20 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z"/>
            </svg>
            {hero.cta2.label}
          </a>
        </motion.div>

        {/* Trust Badges */}
        <motion.div {...fadeUp(0.8)} className="flex flex-wrap justify-center gap-3">
          {hero.trustBadges.map((badge) => (
            <span key={badge} className="flex items-center gap-1.5 text-xs text-gray-300 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-3 py-1.5">
              <svg className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
              </svg>
              {badge}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-1.5">
          <span className="text-xs text-white/40 tracking-widest uppercase">Explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-5 h-8 border-2 border-white/20 rounded-full flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-gold-400 rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
