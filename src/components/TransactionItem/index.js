// Write your code here

import './index.css'

const TransactionItem = props => {
  const {eachTransaction, onDeleteHistoryItem} = props
  const {id, title, amount, type} = eachTransaction

  const onClickeDelete = () => {
    onDeleteHistoryItem(id)
  }

  return (
    <li className="history-head">
      <p className="each-para"> {title} </p>
      <p className="each-para"> {amount} </p>
      <p className="each-para"> {type} </p>
      <img
        onClick={onClickeDelete}
        className="del-icon"
        alt="delete"
        src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png "
      />
    </li>
  )
}

TransactionItem.defaultProps = {
  title: 'Salary',
  amount: 60000,
  type: 'Income',
}

export default TransactionItem
