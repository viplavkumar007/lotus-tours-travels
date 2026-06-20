import { useState } from 'react'
import SectionTitle from '../components/ui/SectionTitle'
import FleetCard from '../components/cards/FleetCard'
import { StaggerContainer, StaggerItem } from '../components/motion/StaggerChildren'
import { luxuryCars } from '../data/siteContent'

const INITIAL_SHOW = 8

export default function LuxuryCars() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? luxuryCars : luxuryCars.slice(0, INITIAL_SHOW)

  return (
    <section id="luxury-cars" className="section-pad bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Our Fleet"
          title="Luxury Car"
          titleAccent="Collection"
          subtitle="Handpicked premium vehicles for weddings, corporate travel, airport transfers, and every special occasion."
        />
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visible.map((vehicle) => (
            <StaggerItem key={vehicle.name}>
              <FleetCard vehicle={vehicle} />
            </StaggerItem>
          ))}
        </StaggerContainer>
        {!showAll && luxuryCars.length > INITIAL_SHOW && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="btn-secondary px-8 py-3"
            >
              View All {luxuryCars.length} Vehicles
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
