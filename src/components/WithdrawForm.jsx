import { useEffect, useRef, useState } from 'react'
import { useBank, formatMoney } from '../context/BankContext.jsx'

export default function WithdrawForm() {
  const { withdraw, balance } = useBank()
  const [amount, setAmount] = useState('')
  const [message, setMessage] = useState(null)
  const [confirming, setConfirming] = useState(false)
  const inputRef = useRef(null)

  // Bonus: focus the amount input as soon as the form appears.
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const value = Number(amount)

    // First click asks for confirmation (bonus task) — second click does it.
    if (!confirming) {
      if (!Number.isFinite(value) || value <= 0) {
        setMessage({ type: 'error', text: 'Please enter an amount greater than 0.' })
        return
      }
      if (value > balance) {
        setMessage({ type: 'error', text: 'Insufficient balance — you cannot withdraw more than your current balance.' })
        return
      }
      setConfirming(true)
      setMessage(null)
      return
    }

    const result = withdraw(amount)
    setMessage({ type: result.ok ? 'success' : 'error', text: result.message })
    setConfirming(false)
    if (result.ok) {
      setAmount('')
      inputRef.current?.focus()
    }
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <h2>Withdraw Money</h2>
      <p className="muted">
        Available balance: <strong>{formatMoney(balance)}</strong>
      </p>

      <label htmlFor="withdraw-amount">Amount (৳)</label>
      <input
        id="withdraw-amount"
        ref={inputRef}
        type="number"
        min="1"
        step="0.01"
        placeholder="e.g. 2000"
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value)
          setConfirming(false)
        }}
      />

      {confirming ? (
        <div className="confirm-box">
          <p>
            Withdraw <strong>{formatMoney(Number(amount) || 0)}</strong> from your account?
          </p>
          <div className="confirm-actions">
            <button className="btn btn-danger" type="submit">Yes, withdraw</button>
            <button className="btn btn-ghost" type="button" onClick={() => setConfirming(false)}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <button className="btn btn-danger" type="submit">Withdraw</button>
      )}

      {message && <p className={`message ${message.type}`}>{message.text}</p>}
    </form>
  )
}
