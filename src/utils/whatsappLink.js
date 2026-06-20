export function waLink(message = '') {
  const base = 'https://wa.me/917233830327'
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}
export function waFleetEnquiry(vehicleName) {
  return waLink(`Hi! I'm interested in booking the ${vehicleName}. Please share availability and details.`)
}
export function waServiceEnquiry(serviceName) {
  return waLink(`Hi! I'd like to enquire about your ${serviceName} service. Please share more details.`)
}
export function waGeneralEnquiry() {
  return waLink("Hi! I'd like to book a vehicle with Lotus Tours & Travels. Please share details.")
}
