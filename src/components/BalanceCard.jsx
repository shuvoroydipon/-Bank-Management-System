import { formatMoney } from '../context/BankContext.jsx'

// Reusable card for one stat — label, value and an optional tone.
// Set isMoney={false} for plain counts (e.g. total transactions).
export default function BalanceCard({ label, value, tone = '', isMoney = true }) {
  return (
    <div className={`stat-card ${tone}`}>
      <p className="stat-label">{label}</p>
      <p className="stat-value">{isMoney ? formatMoney(value) : value}</p>
    </div>
  )
}
