import WithdrawForm from '../components/WithdrawForm.jsx'
import BalanceCard from '../components/BalanceCard.jsx'
import { useBank } from '../context/BankContext.jsx'

export default function Withdraw() {
  const { balance } = useBank()
  return (
    <section>
      <div className="page-head">
        <div>
          <p className="eyebrow">Withdraw</p>
          <h1>Withdraw Money</h1>
        </div>
      </div>
      <div className="two-col">
        <WithdrawForm />
        <div>
          <BalanceCard label="Current Balance" value={balance} tone="red" />
          <p className="hint">You will be asked to confirm before money is withdrawn, and you cannot withdraw more than your balance.</p>
        </div>
      </div>
    </section>
  )
}
