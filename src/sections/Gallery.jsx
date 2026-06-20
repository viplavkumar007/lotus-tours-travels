import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from '../components/ui/SectionTitle'
import LazyImage from '../components/ui/LazyImage'
import { gallery, contact } from '../data/siteContent'

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const categories = ['All', ...gallery.categories.filter(c => gallery.images.some(i => i.category === c))]
  const filtered = activeCategory === 'All' ? gallery.images : gallery.images.filter(i => i.category === activeCategory)

  return (
    <section id="gallery" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Visual Journey" title="Our Premium" titleAccent="Gallery" subtitle="A glimpse of our luxury fleet and memorable travel experiences." />

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-navy-700 text-white shadow-navy'
                  : 'bg-navy-50 text-navy-600 hover:bg-navy-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, idx) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-card-hover"
                onClick={() => setLightbox(img)}
              >
                <LazyImage src={img.src} alt={img.alt} className="h-full transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/40 transition-colors duration-300 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                  </svg>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-navy-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs font-medium">{img.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="text-center mt-8">
          <a
            href={contact.primary.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Enquire About Our Fleet
          </a>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lightbox.src} alt={lightbox.alt} className="w-full max-h-[80vh] object-contain rounded-xl" />
              <p className="text-center text-white/60 text-sm mt-3">{lightbox.alt}</p>
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-10 right-0 text-white/70 hover:text-white text-3xl leading-none"
                aria-label="Close lightbox"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
