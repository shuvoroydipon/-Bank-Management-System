import DepositForm from '../components/DepositForm.jsx'
import BalanceCard from '../components/BalanceCard.jsx'
import { useBank } from '../context/BankContext.jsx'

export default function Deposit() {
  const { balance } = useBank()
  return (
    <section>
      <div className="page-head">
        <div>
          <p className="eyebrow">Deposit</p>
          <h1>Deposit Money</h1>
        </div>
      </div>
      <div className="two-col">
        <DepositForm />
        <div>
          <BalanceCard label="Current Balance" value={balance} tone="green" />
          <p className="hint">Tip: empty, zero or negative amounts are rejected, and the balance updates as soon as you deposit.</p>
        </div>
      </div>
    </section>
  )
}
