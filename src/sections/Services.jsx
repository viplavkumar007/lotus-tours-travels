import SectionTitle from '../components/ui/SectionTitle'
import ServiceCard from '../components/cards/ServiceCard'
import { StaggerContainer, StaggerItem } from '../components/motion/StaggerChildren'
import { services } from '../data/siteContent'

export default function Services() {
  return (
    <section id="services" className="section-pad bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="What We Offer"
          title="Our Premium"
          titleAccent="Services"
          subtitle="From intimate weddings to large pilgrimages, we have the right vehicle and service for every journey."
        />
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
