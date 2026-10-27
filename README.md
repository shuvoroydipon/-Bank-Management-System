# Trust Bank — Bank Management System

A simple Bank Management System built with **React + Vite**. View your account,
check the balance, deposit money, withdraw money, and see the full transaction
history. Frontend-only practice project — no backend, no database, no real money.

## Features

- **Dashboard** — bank name, account holder, account number, current balance,
  total deposited, total withdrawn, and recent transactions
- **Deposit** — form with validation (empty / zero / negative amounts rejected),
  success message, balance updates immediately
- **Withdraw** — validation, insufficient-balance error, and a confirmation
  step before money is withdrawn
- **Transaction History** — type, amount and date for every transaction,
  deposits and withdrawals styled differently, empty-state message
- **Navigation** — React Router DOM with Dashboard / Deposit / Withdraw /
  Transaction History pages and a consistent Navbar
- **Reusable components** — `Navbar`, `BalanceCard`, `DepositForm`,
  `WithdrawForm`, `TransactionList`, `TransactionItem`

### Bonus features included

- **Context API** (`src/context/BankContext.jsx`) shares account data across pages
- **localStorage** — balance and transaction history survive a page refresh
  (use the "Reset demo data" button on the Dashboard to start over)
- **useRef** — the amount input is focused automatically on Deposit / Withdraw
- **Withdraw confirmation** — you confirm the amount before it is withdrawn

## Demo account

| Field | Value |
| --- | --- |
| Bank | Trust Bank |
| Account holder | Dipon Ahmed |
| Account number | TB-2026-1027-4821 |
| Opening balance | ৳25,000.00 |

Change the demo details in `src/context/BankContext.jsx` (`ACCOUNT`).

## Project structure

```
bank-management/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── BalanceCard.jsx
│   │   ├── DepositForm.jsx
│   │   ├── WithdrawForm.jsx
│   │   ├── TransactionList.jsx
│   │   └── TransactionItem.jsx
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Deposit.jsx
│   │   ├── Withdraw.jsx
│   │   └── Transactions.jsx
│   ├── context/
│   │   └── BankContext.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── README.md
```

## Installation & running

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

To make a production build:

```bash
npm run build
npm run preview
```

## Tech used

- React 18 (functional components, `useState`, `useEffect`, `useRef`, Context API)
- Vite 5
- React Router DOM 6
- Plain responsive CSS (no UI framework)
