import { createContext, useContext, useEffect, useMemo, useState } from 'react'

// Change the demo account details here — everything else reads from context.
const ACCOUNT = {
  bankName: 'Trust Bank',
  holderName: 'Dipon Ahmed',
  accountNumber: 'TB-2026-1027-4821',
  openingBalance: 25000,
}

const STORAGE_KEY = 'trust-bank-state-v1'

function loadInitialState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY))
    if (saved && typeof saved.balance === 'number') return saved
  } catch {
    // Corrupt / missing storage — fall back to the opening state.
  }
  return {
    balance: ACCOUNT.openingBalance,
    totalDeposited: 0,
    totalWithdrawn: 0,
    transactions: [],
  }
}

const BankContext = createContext(null)

export function BankProvider({ children }) {
  const [state, setState] = useState(loadInitialState)

  // Bonus: persist balance + history in localStorage so a refresh keeps them.
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }, [state])

  const deposit = (amount) => {
    const value = Number(amount)
    if (!Number.isFinite(value) || value <= 0) {
      return { ok: false, message: 'Please enter an amount greater than 0.' }
    }
    const tx = {
      id: Date.now(),
      type: 'Deposit',
      amount: value,
      date: new Date().toLocaleString(),
    }
    setState((s) => ({
      balance: s.balance + value,
      totalDeposited: s.totalDeposited + value,
      totalWithdrawn: s.totalWithdrawn,
      transactions: [tx, ...s.transactions],
    }))
    return { ok: true, message: `Successfully deposited ৳${value.toLocaleString()}.` }
  }

  const withdraw = (amount) => {
    const value = Number(amount)
    if (!Number.isFinite(value) || value <= 0) {
      return { ok: false, message: 'Please enter an amount greater than 0.' }
    }
    if (value > state.balance) {
      return { ok: false, message: 'Insufficient balance — you cannot withdraw more than your current balance.' }
    }
    const tx = {
      id: Date.now(),
      type: 'Withdrawal',
      amount: value,
      date: new Date().toLocaleString(),
    }
    setState((s) => ({
      balance: s.balance - value,
      totalDeposited: s.totalDeposited,
      totalWithdrawn: s.totalWithdrawn + value,
      transactions: [tx, ...s.transactions],
    }))
    return { ok: true, message: `Successfully withdrew ৳${value.toLocaleString()}.` }
  }

  const resetDemo = () => {
    setState({
      balance: ACCOUNT.openingBalance,
      totalDeposited: 0,
      totalWithdrawn: 0,
      transactions: [],
    })
  }

  const value = useMemo(
    () => ({
      ...ACCOUNT,
      balance: state.balance,
      totalDeposited: state.totalDeposited,
      totalWithdrawn: state.totalWithdrawn,
      transactions: state.transactions,
      deposit,
      withdraw,
      resetDemo,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state],
  )

  return <BankContext.Provider value={value}>{children}</BankContext.Provider>
}

export function useBank() {
  const ctx = useContext(BankContext)
  if (!ctx) throw new Error('useBank must be used inside <BankProvider>')
  return ctx
}

export function formatMoney(amount) {
  return `৳${Number(amount).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`
}
