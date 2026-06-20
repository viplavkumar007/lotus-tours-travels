import SectionTitle from '../components/ui/SectionTitle'
import FleetCard from '../components/cards/FleetCard'
import { StaggerContainer, StaggerItem } from '../components/motion/StaggerChildren'
import { luxuryCars } from '../data/siteContent'

export default function LuxuryCars() {
  return (
    <section id="luxury-cars" className="section-pad bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Premium Collection"
          title="Luxury"
          titleAccent="Vehicles"
          subtitle="Handpicked premium vehicles for weddings, corporate travel, airport transfers, and every special occasion."
        />
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {luxuryCars.map((vehicle) => (
            <StaggerItem key={vehicle.name}>
              <FleetCard vehicle={vehicle} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
