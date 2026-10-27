import { useEffect, useRef, useState } from 'react'
import { useBank } from '../context/BankContext.jsx'

export default function DepositForm() {
  const { deposit } = useBank()
  const [amount, setAmount] = useState('')
  const [message, setMessage] = useState(null) // { type: 'success' | 'error', text }
  const inputRef = useRef(null)

  // Bonus: focus the amount input as soon as the form appears.
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const result = deposit(amount)
    setMessage({ type: result.ok ? 'success' : 'error', text: result.message })
    if (result.ok) {
      setAmount('')
      inputRef.current?.focus()
    }
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <h2>Deposit Money</h2>
      <p className="muted">Add money to your account. The balance updates immediately.</p>

      <label htmlFor="deposit-amount">Amount (৳)</label>
      <input
        id="deposit-amount"
        ref={inputRef}
        type="number"
        min="1"
        step="0.01"
        placeholder="e.g. 5000"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <div className="quick-amounts">
        {[500, 1000, 5000, 10000].map((v) => (
          <button type="button" key={v} onClick={() => setAmount(String(v))}>
            ৳{v.toLocaleString()}
          </button>
        ))}
      </div>

      <button className="btn btn-primary" type="submit">Deposit</button>

      {message && <p className={`message ${message.type}`}>{message.text}</p>}
    </form>
  )
}
