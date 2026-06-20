import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../components/ui/SectionTitle'
import Toast from '../components/ui/Toast'
import { contact } from '../data/siteContent'
import { waLink } from '../utils/whatsappLink'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', vehicle: '', message: '' })
  const [errors, setErrors] = useState({})
  const [toast, setToast] = useState(null)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Your name is required'
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.replace(/\s/g, ''))) e.phone = 'Enter a valid 10-digit mobile number'
    if (!form.message.trim()) e.message = 'Please tell us about your requirement'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    const msg = `Hi! I'd like to make an enquiry.\n\n*Name:* ${form.name}\n*Phone:* ${form.phone}\n*Vehicle Interest:* ${form.vehicle || 'Not specified'}\n*Message:* ${form.message}`
    const url = waLink(msg)
    window.open(url, '_blank', 'noopener,noreferrer')
    setToast({ message: 'Opening WhatsApp with your enquiry!', type: 'success' })
    setForm({ name: '', phone: '', vehicle: '', message: '' })
  }

  const fieldClass = (field) =>
    `w-full px-4 py-3 rounded-xl border text-sm bg-white transition-all duration-200 focus:outline-none focus:ring-2 placeholder:text-gray-400 ${
      errors[field]
        ? 'border-red-400 focus:ring-red-200 focus:border-red-400'
        : 'border-navy-200 focus:ring-navy-200 focus:border-navy-400'
    }`

  return (
    <section id="contact" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Get In Touch" title="Book Your" titleAccent="Vehicle" subtitle="Send us an enquiry via WhatsApp or call us directly. We respond instantly." />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mt-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 bg-ivory rounded-2xl p-6 md:p-8 border border-navy-100"
          >
            <h3 className="font-playfair font-bold text-navy-800 text-xl mb-6">Send Your Enquiry</h3>
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-navy-700 mb-1.5 block" htmlFor="name">Full Name *</label>
                <input id="name" name="name" type="text" placeholder="Your full name" value={form.name} onChange={handleChange} className={fieldClass('name')} />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="text-xs font-semibold text-navy-700 mb-1.5 block" htmlFor="phone">Mobile Number *</label>
                <input id="phone" name="phone" type="tel" placeholder="10-digit mobile number" value={form.phone} onChange={handleChange} className={fieldClass('phone')} />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
              <div>
                <label className="text-xs font-semibold text-navy-700 mb-1.5 block" htmlFor="vehicle">Vehicle Preference</label>
                <select id="vehicle" name="vehicle" value={form.vehicle} onChange={handleChange} className={fieldClass('vehicle') + ' cursor-pointer'}>
                  <option value="">Select a vehicle (optional)</option>
                  <optgroup label="Luxury Cars">
                    <option>Audi A6</option><option>Audi A4</option>
                    <option>Mercedes CLA</option><option>Mercedes C-Class</option><option>Mercedes E-Class</option>
                    <option>BMW 5 Series</option><option>BMW Open Roof</option>
                    <option>Jaguar XF</option><option>Jaguar XJL</option>
                    <option>Toyota Fortuner Legender</option><option>Vintage Royal Car</option>
                    <option>Toyota Innova Crysta</option>
                  </optgroup>
                  <optgroup label="Group Travel">
                    <option>17 Seater Tempo Traveller</option>
                    <option>20 Seater Tempo Traveller</option>
                    <option>26 Seater Tempo Traveller</option>
                    <option>13 Seater Maharaja Tempo</option>
                    <option>17 Seater Force Urbania</option>
                    <option>35 Seater Mini Bus Coach</option>
                    <option>49 Seater AC Pushback Coach</option>
                  </optgroup>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-navy-700 mb-1.5 block" htmlFor="message">Your Requirement *</label>
                <textarea id="message" name="message" rows={4} placeholder="Tell us about your travel requirement — occasion, date, destination, number of passengers..." value={form.message} onChange={handleChange} className={fieldClass('message') + ' resize-none'} />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>
              <button type="submit" className="btn-primary w-full justify-center py-3.5 text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Send WhatsApp Enquiry
              </button>
            </form>
          </motion.div>

          {/* Contact cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* WhatsApp card */}
            <div className="bg-navy-gradient rounded-2xl p-6 text-white">
              <div className="w-10 h-10 bg-[#25D366] rounded-xl flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <h3 className="font-playfair font-bold text-lg mb-1">Book Your Vehicle</h3>
              <p className="text-gray-300 text-sm mb-4">Send us a WhatsApp message for instant quotes and availability.</p>
              <p className="text-gold-400 font-semibold text-base mb-3">{contact.primary.phone}</p>
              <a href={contact.primary.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center text-sm">
                Send WhatsApp Enquiry
              </a>
            </div>

            {/* Call card */}
            <div className="bg-white rounded-2xl p-6 border border-navy-100 shadow-card">
              <div className="w-10 h-10 bg-navy-50 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-navy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z"/>
                </svg>
              </div>
              <h3 className="font-playfair font-bold text-navy-800 text-lg mb-1">Talk To Our Team</h3>
              <p className="text-gray-500 text-sm mb-4">Prefer to speak directly? Call our alternate contact number.</p>
              <p className="text-navy-700 font-semibold text-base mb-3">{contact.secondary.phone}</p>
              <a href={contact.secondary.call} className="btn-secondary w-full justify-center text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z"/>
                </svg>
                Call Alternate Contact
              </a>
            </div>

            {/* Info */}
            <div className="bg-ivory rounded-2xl p-5 border border-navy-100">
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3 text-gray-600">
                  <span className="text-base mt-0.5">📍</span>
                  <span>{contact.address}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <span className="text-base">📧</span>
                  <a href={`mailto:${contact.email}`} className="hover:text-navy-700 transition-colors">{contact.email}</a>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <span className="text-base">🕐</span>
                  <span>Available 24×7 for bookings</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </section>
  )
}
