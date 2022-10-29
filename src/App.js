import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

import React, { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 10.5,
    date: new Date(2021, 9, 26),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 1250,
    date: new Date(2020, 9, 20),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.56,
    date: new Date(2020, 8, 10),
  },
  {
    id: "e4",
    title: "Yoga",
    amount: 100,
    date: new Date(2022, 8, 9),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
