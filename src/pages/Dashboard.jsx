import { Link } from 'react-router-dom'
import { useBank, formatMoney } from '../context/BankContext.jsx'
import BalanceCard from '../components/BalanceCard.jsx'
import TransactionList from '../components/TransactionList.jsx'

export default function Dashboard() {
  const { bankName, holderName, accountNumber, balance, totalDeposited, totalWithdrawn, transactions, resetDemo } = useBank()

  return (
    <section>
      <div className="page-head">
        <div>
          <p className="eyebrow">{bankName}</p>
          <h1>Welcome back, {holderName.split(' ')[0]} 👋</h1>
          <p className="muted">Account holder: <strong>{holderName}</strong> &nbsp;•&nbsp; Account no: <strong>{accountNumber}</strong></p>
        </div>
        <button className="btn btn-ghost" type="button" onClick={resetDemo}>Reset demo data</button>
      </div>

      <div className="hero-balance">
        <p className="stat-label">Current Balance</p>
        <p className="hero-amount">{formatMoney(balance)}</p>
        <div className="hero-actions">
          <Link className="btn btn-primary" to="/deposit">+ Deposit</Link>
          <Link className="btn btn-danger" to="/withdraw">Withdraw</Link>
        </div>
      </div>

      <div className="stats-grid">
        <BalanceCard label="Total Deposited" value={totalDeposited} tone="green" />
        <BalanceCard label="Total Withdrawn" value={totalWithdrawn} tone="red" />
        <BalanceCard label="Total Transactions" value={transactions.length} tone="" isMoney={false} />
      </div>

      <div className="panel">
        <div className="panel-head">
          <h2>Recent Transactions</h2>
          <Link to="/transactions">View all →</Link>
        </div>
        <TransactionList transactions={transactions} limit={5} />
      </div>
    </section>
  )
}
