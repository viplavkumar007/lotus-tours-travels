import SectionTitle from '../components/ui/SectionTitle'
import FleetCard from '../components/cards/FleetCard'
import { StaggerContainer, StaggerItem } from '../components/motion/StaggerChildren'
import { groupTravel } from '../data/siteContent'

export default function GroupTravel() {
  return (
    <section id="group-travel" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Group Transportation"
          title="Our"
          titleAccent="Fleet"
          subtitle="Spacious, comfortable, and well-maintained group transportation for every group size and occasion."
        />
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {groupTravel.map((vehicle) => (
            <StaggerItem key={vehicle.name}>
              <FleetCard vehicle={vehicle} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
