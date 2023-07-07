import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  const [expenseFormVisibilty, setExpenseFormVisibilty] = useState("No Show");

  const showExpenseForm = () => {
    setExpenseFormVisibilty("Show");
    console.log("ShowExpenseForm");
  };

  const hideExpenseForm = () => {
    setExpenseFormVisibilty("No Show");
    console.log("HideExpenseForm");
  };

  if (expenseFormVisibilty === "No Show") {
    return (
      <div className="new-expense">
        <button className="new-expense" onClick={showExpenseForm}>
          Add Expense
        </button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm
        hideShowForm={hideExpenseForm}
        onSaveExpenseData={onSaveExpenseDataHandler}
      />
    </div>
  );
};

export default NewExpense;
