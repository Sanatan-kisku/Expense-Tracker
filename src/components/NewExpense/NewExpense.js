import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
    setIsEditing(false)
  }

  const stopEditingHandler = () => {
    setIsEditing(false)
  }

  const startEditingHandler = () => {
    setIsEditing(true)
  }
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler} />
      )}
    </div>
  )
}

export default NewExpense;