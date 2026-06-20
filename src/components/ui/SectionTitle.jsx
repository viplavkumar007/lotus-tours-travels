import ScrollReveal from '../motion/ScrollReveal'

export default function SectionTitle({ eyebrow, title, titleAccent, subtitle, light = false }) {
  return (
    <ScrollReveal className="text-center mb-12 md:mb-16">
      {eyebrow && (
        <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-gold-600 mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className={`font-playfair text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${light ? 'text-white' : 'text-navy-800'}`}>
        {title}
        {titleAccent && (
          <span className="gold-text"> {titleAccent}</span>
        )}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base md:text-lg max-w-2xl mx-auto leading-relaxed ${light ? 'text-navy-200' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
      <div className="flex items-center justify-center gap-2 mt-5">
        <div className={`h-px w-12 ${light ? 'bg-navy-400' : 'bg-navy-200'}`} />
        <div className="w-2 h-2 rounded-full bg-gold-500" />
        <div className={`h-px w-12 ${light ? 'bg-navy-400' : 'bg-navy-200'}`} />
      </div>
    </ScrollReveal>
  )
}
