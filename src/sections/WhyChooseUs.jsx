import SectionTitle from '../components/ui/SectionTitle'
import WhyChooseCard from '../components/cards/WhyChooseCard'
import { StaggerContainer, StaggerItem } from '../components/motion/StaggerChildren'
import { whyChooseUs } from '../data/siteContent'

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Why Us" title="Why Choose" titleAccent="Lotus Tours?" subtitle="We go beyond transportation — delivering experiences that reflect luxury, trust, and professionalism." />
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {whyChooseUs.map((item) => (
            <StaggerItem key={item.title}>
              <WhyChooseCard item={item} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
