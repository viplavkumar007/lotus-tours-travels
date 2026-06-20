export default function TestimonialCard({ t }) {
  const { name, location, rating, review, initial } = t
  return (
    <div className="bg-white rounded-2xl p-6 shadow-card border border-navy-50 h-full flex flex-col">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-gold-500 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-sm text-gray-600 leading-relaxed flex-1 italic">"{review}"</p>
      <div className="flex items-center gap-3 mt-5 pt-4 border-t border-navy-50">
        <div className="w-9 h-9 rounded-full bg-navy-600 flex items-center justify-center text-white text-sm font-bold">
          {initial}
        </div>
        <div>
          <p className="font-semibold text-navy-800 text-sm">{name}</p>
          <p className="text-xs text-gray-400">{location}</p>
        </div>
      </div>
    </div>
  )
}
