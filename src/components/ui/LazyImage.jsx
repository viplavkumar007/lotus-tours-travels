import { useState } from 'react'

export default function LazyImage({ src, alt, className = '', ...props }) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && !error && (
        <div className="absolute inset-0 bg-navy-50 animate-pulse" />
      )}
      {error ? (
        <div className="absolute inset-0 bg-navy-50 flex items-center justify-center">
          <span className="text-navy-300 text-sm">Image unavailable</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          {...props}
        />
      )}
    </div>
  )
}
