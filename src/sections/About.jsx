import { motion } from 'framer-motion'
import { about } from '../data/siteContent'
import ScrollReveal from '../components/motion/ScrollReveal'
import SectionTitle from '../components/ui/SectionTitle'
import { StaggerContainer, StaggerItem } from '../components/motion/StaggerChildren'
import LazyImage from '../components/ui/LazyImage'

export default function About() {
  return (
    <section id="about" className="section-pad bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Our Story" title="About" titleAccent="Lotus Tours" subtitle={about.subtitle} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-12">
          {/* Image side */}
          <ScrollReveal>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-card-hover">
                <LazyImage src={about.image} alt="Lotus Tours premium fleet" className="h-80 md:h-96 lg:h-[480px]" />
              </div>
              {/* Gold accent border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-gold-500/30 -z-10" />
              {/* Experience badge */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-navy-gradient rounded-2xl flex flex-col items-center justify-center shadow-navy text-white">
                <span className="font-playfair font-bold text-xl leading-none">5+</span>
                <span className="text-[9px] text-gold-400 font-medium text-center leading-tight mt-0.5">Years<br/>Service</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Content side */}
          <div>
            <ScrollReveal>
              {about.body.map((para, i) => (
                <p key={i} className={`text-gray-600 leading-relaxed ${i < about.body.length - 1 ? 'mb-4' : 'mb-8'}`}>
                  {para}
                </p>
              ))}
            </ScrollReveal>

            {/* Stats */}
            <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {about.stats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <div className="text-center p-4 bg-white rounded-xl border border-navy-100 shadow-sm hover:shadow-card hover:border-gold-200 transition-all duration-300">
                    <div className="font-playfair font-bold text-2xl md:text-3xl text-navy-700 gold-text">{stat.value}</div>
                    <div className="text-xs text-gray-500 mt-1 font-medium">{stat.label}</div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  )
}
