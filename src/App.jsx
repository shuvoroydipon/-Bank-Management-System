import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Deposit from './pages/Deposit.jsx'
import Withdraw from './pages/Withdraw.jsx'
import Transactions from './pages/Transactions.jsx'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <footer className="footer">
        Trust Bank — Frontend-only practice project. No real money is moved.
      </footer>
    </div>
  )
}
