export default function Badge({ children, variant = 'gold' }) {
  const styles = {
    gold: 'bg-gold-100 text-gold-800 border border-gold-300',
    navy: 'bg-navy-50 text-navy-700 border border-navy-200',
    white: 'bg-white/20 text-white border border-white/30',
  }
  return (
    <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full ${styles[variant]}`}>
      {children}
    </span>
  )
}
