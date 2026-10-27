import TransactionItem from './TransactionItem.jsx'

// Renders the list with map(); shows an empty state when there is nothing yet.
export default function TransactionList({ transactions, limit }) {
  if (!transactions || transactions.length === 0) {
    return <p className="empty-state">No transactions yet. Make a deposit or withdrawal to see it here.</p>
  }
  const shown = limit ? transactions.slice(0, limit) : transactions
  return (
    <ul className="tx-list">
      {shown.map((tx) => (
        <TransactionItem key={tx.id} transaction={tx} />
      ))}
    </ul>
  )
}
