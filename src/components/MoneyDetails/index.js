// Write your code here
import {Component} from 'react'

import './index.css'

const MoneyDetails = props => {
  const {income1, expense1, balance1} = props

  console.log(income1, expense1, balance1)

  return (
    <div className="money-details">
      <div className="balance">
        <img
          className="image"
          alt="balance"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
        />
        <div className="bal-details">
          <p> Your Balance </p>
          <p data-testid="balanceAmount"> Rs. {balance1} </p>
        </div>
      </div>

      <div className="balance">
        <img
          className="image"
          alt="income"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
        />
        <div className="bal-details">
          <p> Your Income </p>
          <p data-testid="incomeAmount"> Rs. {income1} </p>
        </div>
      </div>

      <div className="balance">
        <img
          className="image"
          alt="expenses"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
        />
        <div className="bal-details">
          <p> Your Expenses </p>
          <p data-testid="expensesAmount"> Rs. {expense1} </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
