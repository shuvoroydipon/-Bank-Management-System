import { NavLink } from 'react-router-dom'
import { useBank } from '../context/BankContext.jsx'

export default function Navbar() {
  const { bankName } = useBank()
  return (
    <header className="navbar">
      <NavLink to="/" className="brand">
        <span className="brand-mark">🏦</span>
        <span>
          <strong>{bankName}</strong>
          <small>Bank Management System</small>
        </span>
      </NavLink>
      <nav className="nav-links">
        <NavLink to="/" end>Dashboard</NavLink>
        <NavLink to="/deposit">Deposit</NavLink>
        <NavLink to="/withdraw">Withdraw</NavLink>
        <NavLink to="/transactions">Transaction History</NavLink>
      </nav>
    </header>
  )
}
