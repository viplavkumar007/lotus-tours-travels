import { useState, useEffect } from 'react'

export function useScrollSpy(sectionIds, offset = 80) {
  const [active, setActive] = useState('')
  useEffect(() => {
    const handler = () => {
      let current = ''
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= offset + 10) {
          current = id
        }
      }
      setActive(current)
    }
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [sectionIds, offset])
  return active
}
