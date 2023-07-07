import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./ExpenseItems.css";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

function ExpenseItems(props) {
  const [year, setYear] = useState("2019");

  //setYear(props.selectedYear);
  //console.log("In ExpenseItem: " + year);
  const onSelectYearHandler = (selectedYear) => {
    console.log("In ExpenseItems.js");
    //console.log(selectedYear);
    setYear(selectedYear);
    console.log(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return String(expense.date.getFullYear()) === year;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter selected={year} onSelectYear={onSelectYearHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </li>
  );
}

export default ExpenseItems;
