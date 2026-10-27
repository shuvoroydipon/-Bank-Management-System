import TransactionList from '../components/TransactionList.jsx'
import { useBank } from '../context/BankContext.jsx'

export default function Transactions() {
  const { transactions } = useBank()
  return (
    <section>
      <div className="page-head">
        <div>
          <p className="eyebrow">History</p>
          <h1>Transaction History</h1>
          <p className="muted">{transactions.length} transaction{transactions.length === 1 ? '' : 's'} — newest first.</p>
        </div>
      </div>
      <div className="panel">
        <TransactionList transactions={transactions} />
      </div>
    </section>
  )
}
