import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

let reqIncome = 0
let reqExpense = 0
let reqBalance = 0

class MoneyManager extends Component {
  state = {
    transactionsList: [],
    title: '',
    amount: '',
    type: 'Income',
    income: 0,
    balance: 0,
    expense: 0,
  }

  onChangeTitle = event => {
    const inputTitle = event.target.value
    this.setState({title: inputTitle})
  }

  onChangeAmount = event => {
    const inputAmount = event.target.value
    this.setState({amount: inputAmount})
  }

  onChangeType = event => {
    const inputType = event.target.value
    this.setState({type: inputType})
  }

  onAddItem = event => {
    event.preventDefault()
    const {title, amount, type} = this.state

    const newItem = {
      id: uuidv4(),
      title,
      amount,
      type,
    }

    if (type === 'Income') {
      reqIncome = +amount
      reqBalance = +amount
      reqExpense = 0
    } else {
      reqExpense = +amount
      reqBalance = -amount
      reqIncome = 0
    }

    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newItem],
      title: '',
      amount: '',
      type: 'Income',
      income: +prevState.income + reqIncome,
      expense: +prevState.expense + reqExpense,
      balance: +prevState.balance + reqBalance,
    }))
  }

  onDeleteHistoryItem = id => {
    const {transactionsList} = this.state
    console.log('delete triggered on Id', id)
    const reqList = transactionsList.filter(eachItem => eachItem.id === id)
    const {type, amount} = reqList[0]
    console.log(type, amount)

    // console.log(reqList)
    if (type === 'Income') {
      reqIncome = -amount
      reqBalance = -amount
      reqExpense = 0
    } else {
      reqExpense = -amount
      reqBalance = +amount
      reqIncome = 0
    }

    this.setState(prevState => ({
      transactionsList: [
        ...prevState.transactionsList.filter(eachItem => eachItem.id !== id),
      ],
      income: +prevState.income + reqIncome,
      expense: +prevState.expense + reqExpense,
      balance: +prevState.balance + reqBalance,
    }))
  }

  render() {
    const {
      transactionsList,
      title,
      amount,
      type,
      income,
      expense,
      balance,
    } = this.state

    // console.log(title)
    // console.log(amount)
    // console.log(type)
    // console.log(transactionsList)

    return (
      <div className="app-container">
        <div className="intro-card">
          <h1 className="name-head"> Hi, Richard </h1>
          <p className="welcome-para">
            Welcome back to your
            <span className="span-el"> Money Manager </span>
          </p>
        </div>
        <MoneyDetails income1={income} expense1={expense} balance1={balance} />

        <div className="form-history-container">
          <form className="form" onSubmit={this.onAddItem}>
            <h1> Add Transaction </h1>

            <div className="title-sec">
              <label htmlFor="title"> TITLE </label>
              <input
                value={title}
                placeholder="TITLE"
                id="title"
                className="input-title"
                type="input"
                onChange={this.onChangeTitle}
              />
            </div>

            <div className="title-sec">
              <label htmlFor="amount"> AMOUNT </label>
              <input
                value={amount}
                placeholder="AMOUNT"
                id="amount"
                className="input-title"
                type="input"
                onChange={this.onChangeAmount}
              />
            </div>
            <div className="title-sec">
              <label htmlFor="type"> TYPE </label>
              <select
                value={type}
                className="input-type"
                id="type"
                onChange={this.onChangeType}
              >
                <option id="INCOME"> Income </option>
                <option id="EXPENSE"> Expense </option>
              </select>
            </div>

            <button className="add-button" type="submit">
              Add
            </button>
          </form>

          <div className="history-container">
            <h1> History </h1>
            <div className="history-head">
              <p className="each-para"> Title </p>
              <p className="each-para"> Amount </p>
              <p className="each-para"> Type </p>
            </div>
            <ul>
              {transactionsList.map(eachItem => (
                <TransactionItem
                  eachTransaction={eachItem}
                  key={eachItem.id}
                  onDeleteHistoryItem={this.onDeleteHistoryItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
