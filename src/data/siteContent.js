// ============================================================
// LOTUS TOURS & TRAVELS — SINGLE SOURCE OF TRUTH
// All content, links, and copy live here. Edit freely.
// ============================================================

export const brand = {
  name: 'Lotus Tours & Travels',
  tagline: 'Luxury Journey Safe Journey',
  logo: '/logo.png',
  colors: {
    navy: '#1B2A7B',
    navyDark: '#0F1C55',
    gold: '#D4AF37',
    champagne: '#E6C768',
  },
}

export const contact = {
  primary: {
    phone: '+91 7233830327',
    phoneRaw: '+917233830327',
    whatsapp: 'https://wa.me/917233830327',
    label: 'WhatsApp Enquiry',
  },
  secondary: {
    phone: '+91 7607760351',
    phoneRaw: '+917607760351',
    call: 'tel:+917607760351',
    label: 'Call Alternate Contact',
  },
  email: 'lotuslakes6606@gmail.com',
  address: 'Varanasi Enclave Colony, Morhaui, Varanasi – 221108',
  instagram: 'https://www.instagram.com/lotus_tour_andtravels',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.2!2d82.9739!3d25.3176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE5JzAzLjQiTiA4MsKwNTgnMjYuMCJF!5e0!3m2!1sen!2sin!4v1234567890',
}

export const hero = {
  headline: 'Luxury Travel.',
  headlineAccent: 'Royal Experience.',
  subheadline:
    'Premium Wedding Cars, Luxury Sedans, Tempo Travellers, Urbania, Coaches & Outstation Travel Solutions in Varanasi.',
  cta1: { label: 'Book on WhatsApp', href: contact.primary.whatsapp },
  cta2: { label: 'Call Us', href: contact.secondary.call },
  trustBadges: [
    'Professional Drivers',
    'Luxury Fleet',
    'Wedding Specialists',
    'Corporate Travel',
    'Outstation Tours',
  ],
  backgroundImage:
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=80',
}

export const about = {
  title: 'About Lotus Tours & Travels',
  subtitle: "Varanasi's Most Trusted Luxury Travel Partner",
  body: [
    'Lotus Tours & Travels is one of Varanasi\'s most trusted names in luxury transportation and travel services. We provide premium wedding cars, luxury chauffeur-driven vehicles, group transportation, tempo travellers, Urbania rentals, mini buses, and luxury coaches for all kinds of travel requirements.',
    'Whether it is a wedding, corporate event, airport transfer, family trip, pilgrimage tour, or outstation journey — our fleet and professional service ensure a comfortable and memorable travel experience every single time.',
  ],
  stats: [
    { value: '500+', label: 'Happy Clients' },
    { value: '15+', label: 'Luxury Vehicles' },
    { value: '5+', label: 'Years Experience' },
    { value: '24×7', label: 'Support' },
  ],
  image:
    'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=900&q=80',
}

export const whyChooseUs = [
  {
    icon: '🏆',
    title: 'Luxury Fleet Collection',
    desc: 'From Audi to Mercedes, BMW to Jaguar — handpicked premium vehicles for every occasion.',
  },
  {
    icon: '👔',
    title: 'Professional Chauffeurs',
    desc: 'Trained, uniformed, and courteous drivers committed to safe and comfortable journeys.',
  },
  {
    icon: '✨',
    title: 'Clean & Well-Maintained',
    desc: 'Every vehicle is meticulously maintained and sanitized before every trip.',
  },
  {
    icon: '💍',
    title: 'Wedding Specialists',
    desc: 'Exclusive wedding car arrangements to make your special day even more memorable.',
  },
  {
    icon: '💼',
    title: 'Corporate Travel',
    desc: 'Reliable, punctual professional transportation for business requirements.',
  },
  {
    icon: '🗺️',
    title: 'Group Tour Experts',
    desc: 'Spacious tempo travellers and coaches for groups of all sizes.',
  },
  {
    icon: '✈️',
    title: 'Airport Transfers',
    desc: 'Timely, hassle-free airport pickup and drop services in Varanasi.',
  },
  {
    icon: '🕐',
    title: '24×7 Support',
    desc: 'Round-the-clock customer service for bookings, queries, and assistance.',
  },
]

export const luxuryCars = [
  {
    name: 'Audi A6',
    category: 'Luxury Executive Sedan',
    features: ['Leather Interior', 'Climate Control', 'Professional Driver', 'Premium Sound'],
    image: '/fleet/audi-a6.jpg',
  },
  {
    name: 'Audi A4',
    category: 'Premium Business Sedan',
    features: ['Sport Seats', 'Panoramic Roof', 'Advanced Safety', 'In-car Entertainment'],
    image: '/fleet/audi-a4.jpg',
  },
  {
    name: 'Mercedes CLA',
    category: 'Luxury Coupé Sedan',
    features: ['Sporty Design', 'Premium Cabin', 'MBUX System', 'Chauffeur Driven'],
    image: '/fleet/mercedes-cla.jpg',
  },
  {
    name: 'Mercedes C-Class',
    category: 'Executive Luxury Sedan',
    features: ['Massage Seats', 'Ambient Lighting', 'Widescreen Display', 'Air Suspension'],
    image: '/fleet/mercedes-c-class.jpg',
  },
  {
    name: 'Mercedes E-Class',
    category: 'Premium Chauffeur Sedan',
    features: ['Executive Rear', 'Burmester Audio', 'Fragrance System', 'Night Package'],
    image: '/fleet/mercedes-e-class.jpg',
  },
  {
    name: 'Jaguar XF',
    category: 'Luxury Performance Sedan',
    features: ['Dynamic Handling', 'Meridian Sound', 'Touch Pro Duo', 'Leather Alcantara'],
    image: '/fleet/jaguar-xf.jpg',
  },
  {
    name: 'Jaguar XJL',
    category: 'Ultra Luxury Sedan',
    features: ['Extended Wheelbase', 'Rear Entertainment', 'Mood Lighting', 'Folding Tables'],
    image: '/fleet/jaguar-xjl.jpg',
  },
  {
    name: 'BMW 5 Series',
    category: 'Executive Luxury Sedan',
    features: ['Gesture Control', 'Harman Kardon', 'Driving Assistant', 'Panoramic Glass'],
    image: '/fleet/bmw-5-series.jpg',
  },
  {
    name: 'BMW GT 5 Series',
    category: 'Luxury Grand Tourer',
    features: ['Grand Touring', 'Spacious Cabin', 'Comfort Suspension', 'Sport Package'],
    image: '/fleet/bmw-5-series-gt.jpg',
  },
  {
    name: 'BMW Open Roof',
    category: 'Luxury Convertible Experience',
    features: ['Retractable Roof', 'Wind Deflector', 'Sport Exhaust', 'Premium Upholstery'],
    image: '/fleet/bmw-convertible.jpg',
  },
  {
    name: 'Fortuner Legender',
    category: 'Premium SUV',
    features: ['7-Seater', 'Terrain Mode', 'JBL Audio', 'ADAS Safety Suite'],
    image: '/fleet/fortuner-legender.jpg',
  },
  {
    name: 'Vintage Royal Car',
    category: 'Wedding Special Royal Vehicle',
    features: ['Classic Elegance', 'Floral Decoration', 'Royal Entry', 'Photo Moments'],
    image: '/fleet/vintage-royal.jpg',
  },
  {
    name: 'Innova Crysta',
    category: 'Premium MPV',
    features: ['8-Seater', 'Captain Seats', 'Diesel Power', 'Ambient Cabin'],
    image: '/fleet/innova-crysta.webp',
  },
]

export const groupTravel = [
  {
    name: 'Dzire',
    category: 'Comfort Sedan',
    features: ['Fuel Efficient', 'Comfortable Ride', 'Well Maintained', 'AC Cabin'],
    image: '/fleet/dzire.jpg',
    highlight: '2022–23 Model',
  },
  {
    name: 'Ertiga',
    category: 'Family MPV',
    features: ['7-Seater', 'Smart Hybrid', 'Spacious Boot', 'Family Comfort'],
    image: '/fleet/ertiga.jpg',
    highlight: '2022–23 Model',
  },
  {
    name: 'Tempo Traveller 20 Seater',
    category: 'Medium Group Travel',
    features: ['Reclining Seats', 'Air Conditioning', 'Charging Points', 'GPS Tracked'],
    image: '/fleet/tempo-20.jpg',
    highlight: null,
  },
  {
    name: 'Tempo Traveller 26 Seater',
    category: 'Large Group Travel',
    features: ['AC Coach', 'Ample Luggage', 'Experienced Driver', 'Comfortable Journey'],
    image: '/fleet/tempo-26.jpg',
    highlight: null,
  },
  {
    name: 'Tempo Traveller 17 Seater',
    category: 'Group Transportation',
    features: ['Pushback Seats', 'AC Cabin', 'Music System', 'Luggage Space'],
    image: '/fleet/tempo-17.webp',
    highlight: null,
  },
  {
    name: 'Force Urbania 17 Seater',
    category: 'Premium Group Coach',
    features: ['Luxury Pushback', 'Individual AC Vents', 'Reading Lights', 'Premium Cabin'],
    image: '/fleet/force-urbania.png',
    highlight: 'Luxury Pushback Seating',
  },
  {
    name: '13 Seater Maharaja Tempo Traveller',
    category: 'Ultra Luxury Group',
    features: ['Maharaja Seats', 'LCD Screens', 'Refrigerator', 'Premium Upholstery'],
    image: '/fleet/maharaja-tempo.webp',
    highlight: 'Maharaja Interior',
  },
  {
    name: '49 Seater AC Pack Glass Coach',
    category: 'Luxury Long-Distance Coach',
    features: ['Pushback Seats', 'Full Air Conditioning', 'Spacious Luggage', 'Glass Coach Design'],
    image: '/fleet/coach-49.webp',
    highlight: 'Glass Coach Experience',
  },
  {
    name: '35 Seater Mini Bus Coach',
    category: 'Group Coach',
    features: ['Comfortable Seats', 'Air Conditioning', 'Luggage Storage', 'Professional Driver'],
    image: '/fleet/coach-35.jpg',
    highlight: null,
  },
]

export const services = [
  {
    icon: '💍',
    title: 'Wedding Car Rental',
    desc: 'Make your wedding day unforgettable with our exclusive luxury vehicle arrangements. From vintage royals to modern Mercedes, we have your dream car.',
  },
  {
    icon: '💼',
    title: 'Corporate Travel',
    desc: 'Professional, punctual, and polished transportation solutions for executives, delegations, and business events across Varanasi and beyond.',
  },
  {
    icon: '✈️',
    title: 'Airport Transfers',
    desc: 'Reliable and timely pickup and drop services to and from Varanasi Lal Bahadur Shastri International Airport. Never miss a flight.',
  },
  {
    icon: '🛣️',
    title: 'Outstation Travel',
    desc: 'Comfortable long-distance journeys across Uttar Pradesh and neighbouring states with experienced drivers and well-maintained vehicles.',
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Family Tours',
    desc: 'Safe, spacious, and comfortable transportation for family trips, holidays, and special occasions. Making memories together.',
  },
  {
    icon: '🚌',
    title: 'Group Transportation',
    desc: 'Tempo travellers and luxury coaches for school trips, corporate outings, pilgrimage groups, and large gatherings.',
  },
  {
    icon: '🎉',
    title: 'Event Transportation',
    desc: 'Premium fleet management for weddings, receptions, corporate functions, and all types of events and celebrations.',
  },
  {
    icon: '🛕',
    title: 'Pilgrimage Tours',
    desc: 'Comfortable and devotional journeys to Kashi Vishwanath, Ayodhya, Mathura, Vrindavan, and other sacred destinations.',
  },
]

export const testimonials = [
  {
    name: 'Rahul Sharma',
    location: 'Varanasi, UP',
    rating: 5,
    review:
      'Booked the Mercedes E-Class for my sister\'s wedding. The car was immaculate, driver was professional and on time. Made the baraat absolutely royal. Highly recommend Lotus Tours!',
    initial: 'R',
  },
  {
    name: 'Priya Agarwal',
    location: 'Lucknow, UP',
    rating: 5,
    review:
      'We hired a 26-seater tempo traveller for our family pilgrimage to Ayodhya. The vehicle was clean, comfortable, and the driver was very courteous. Will book again for sure.',
    initial: 'P',
  },
  {
    name: 'Vikram Singh',
    location: 'Delhi, NCR',
    rating: 5,
    review:
      'Used their BMW 5 Series for a corporate client pickup from the airport. Extremely professional service, vehicle was spotless. Our client was very impressed. Lotus Tours is our go-to now.',
    initial: 'V',
  },
  {
    name: 'Anjali Mishra',
    location: 'Varanasi, UP',
    rating: 5,
    review:
      'The Vintage Royal Car for our son\'s wedding was absolutely stunning! Everyone was asking where we got it from. The decoration was beautiful and the experience was memorable.',
    initial: 'A',
  },
  {
    name: 'Deepak Gupta',
    location: 'Kanpur, UP',
    rating: 5,
    review:
      'Booked the 49-seater glass coach for our office tour to Allahabad. Comfortable seats, great AC, and the driver was very experienced. Value for money and great service.',
    initial: 'D',
  },
  {
    name: 'Sunita Yadav',
    location: 'Varanasi, UP',
    rating: 5,
    review:
      'WhatsApp booking was very easy and response was instant. The Innova Crysta was clean and comfortable for our airport transfer. Will definitely use Lotus Tours again.',
    initial: 'S',
  },
]

export const faqs = [
  {
    q: 'Do you provide wedding cars in Varanasi?',
    a: 'Yes! We have an exclusive wedding fleet including Vintage Royal Cars, Mercedes, BMW, Audi, and Jaguar sedans, all available with floral decoration options. Contact us via WhatsApp to customise your wedding car package.',
  },
  {
    q: 'Are luxury cars available with professional drivers?',
    a: 'Absolutely. All our luxury vehicles come with trained, uniformed, and experienced chauffeurs who are well-versed with Varanasi routes and outstation destinations.',
  },
  {
    q: 'Do you provide airport transfer services?',
    a: 'Yes. We provide reliable airport pickup and drop services to Varanasi Lal Bahadur Shastri International Airport. Available 24×7 with advance booking.',
  },
  {
    q: 'Are tempo travellers available for group tours?',
    a: 'Yes. We have 13, 17, 20, and 26-seater tempo travellers including Maharaja and Urbania options for group travel, pilgrimages, family trips, and corporate outings.',
  },
  {
    q: 'Do you offer outstation trips from Varanasi?',
    a: 'Yes. We cover outstation destinations across Uttar Pradesh and neighbouring states including Ayodhya, Mathura, Prayagraj, Lucknow, Agra, and more.',
  },
  {
    q: 'Can coaches be booked for large groups?',
    a: 'Yes. We have 35-seater mini bus coaches and 49-seater AC pushback glass coaches available for large group travel, corporate events, and pilgrimage tours.',
  },
  {
    q: 'Is advance booking available and recommended?',
    a: 'Yes. Advance booking is highly recommended, especially for wedding vehicles and during festive and wedding seasons. Book via WhatsApp on +91 7233830327 for confirmation.',
  },
  {
    q: 'How can I get a quote or enquire about pricing?',
    a: 'Simply WhatsApp us on +91 7233830327 with your travel details — date, destination, vehicle preference, and number of passengers — and we will respond with availability and quote promptly.',
  },
]

export const gallery = {
  categories: [
    'Wedding Cars',
    'Luxury Sedans',
    'BMW Collection',
    'Mercedes Collection',
    'Audi Collection',
    'Jaguar Collection',
    'Fleet Cars',
    'Tempo Travellers',
    'Urbania',
    'Coaches',
  ],
  images: [
    { src: '/fleet/indian-wedding-car.jpg', category: 'Wedding Cars', alt: 'Indian wedding sedan decorated with flowers and hanging garlands' },
    { src: '/fleet/mercedes-c-class.jpg', category: 'Mercedes Collection', alt: 'Mercedes C-Class luxury sedan' },
    { src: '/fleet/mercedes-cla.jpg', category: 'Mercedes Collection', alt: 'Mercedes CLA luxury coupe sedan' },
    { src: '/fleet/bmw-5-series.jpg', category: 'BMW Collection', alt: 'BMW 5 Series executive sedan' },
    { src: '/fleet/bmw-convertible.jpg', category: 'BMW Collection', alt: 'BMW open-roof convertible' },
    { src: '/fleet/audi-a6.jpg', category: 'Audi Collection', alt: 'Audi A6 luxury executive sedan' },
    { src: '/fleet/audi-a4.jpg', category: 'Audi Collection', alt: '2022 Audi A4 premium sedan' },
    { src: '/fleet/jaguar-xf.jpg', category: 'Jaguar Collection', alt: 'Jaguar XF performance sedan' },
    { src: '/fleet/jaguar-xjl.jpg', category: 'Jaguar Collection', alt: 'Jaguar XJL long-wheelbase sedan' },
    { src: '/fleet/mercedes-e-class.jpg', category: 'Luxury Sedans', alt: 'Mercedes E-Class luxury sedan' },
    { src: '/fleet/innova-crysta.webp', category: 'Fleet Cars', alt: 'Toyota Innova Crysta' },
    { src: '/fleet/dzire.jpg', category: 'Fleet Cars', alt: '2022–23 generation Maruti Suzuki Dzire' },
    { src: '/fleet/ertiga.jpg', category: 'Fleet Cars', alt: '2022 Maruti Suzuki Ertiga' },
    { src: '/fleet/tempo-20.jpg', category: 'Tempo Travellers', alt: '20-seater Force Tempo Traveller' },
    { src: '/fleet/tempo-26.jpg', category: 'Tempo Travellers', alt: '26-seater Force Tempo Traveller' },
    { src: '/fleet/maharaja-tempo.webp', category: 'Tempo Travellers', alt: 'Maharaja luxury Tempo Traveller' },
    { src: '/fleet/force-urbania.png', category: 'Urbania', alt: 'Force Urbania passenger van' },
    { src: '/fleet/coach-49.webp', category: 'Coaches', alt: '49-seater Ashok Leyland AC coach' },
    { src: '/fleet/coach-35.jpg', category: 'Coaches', alt: '35-seater SML mini bus coach' },
  ],
}

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Luxury Vehicles', href: '#luxury-cars' },
  { label: 'Fleet', href: '#group-travel' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]
