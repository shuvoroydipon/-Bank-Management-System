import { formatMoney } from '../context/BankContext.jsx'

// One row in the transaction history. Deposits are green, withdrawals red.
export default function TransactionItem({ transaction }) {
  const isDeposit = transaction.type === 'Deposit'
  return (
    <li className={`tx-item ${isDeposit ? 'deposit' : 'withdrawal'}`}>
      <span className="tx-icon">{isDeposit ? '↓' : '↑'}</span>
      <div className="tx-main">
        <strong>{transaction.type}</strong>
        <small>{transaction.date}</small>
      </div>
      <span className="tx-amount">
        {isDeposit ? '+' : '-'} {formatMoney(transaction.amount)}
      </span>
    </li>
  )
}
