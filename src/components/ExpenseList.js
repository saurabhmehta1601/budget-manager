import React from "react";
import { ExpenseItem as Item } from "./ExpenseItem";
import {MdDelete} from 'react-icons/md'
export const ExpenseList = ({ expenses }) => {
  return (
    <>
      <ul className="list">
        {expenses.map((expense) => {
          return (<Item key={expense.id} expense={expense} />)
})}
      </ul> 
      {expenses.length && <button className="btn">clear expenses
      <MdDelete className="btn-icon" />
      </button>}
    </>
  );
};
