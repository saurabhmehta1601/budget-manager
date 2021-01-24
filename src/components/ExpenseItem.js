import React from "react";
import {MdEdit,MdDelete} from "react-icons/md"

export const ExpenseItem = ({expense,handleEdit,handleDelete}) => {

  const {id,amount,charge}=expense

  return (
    <>
      <li className="item">
        <div className="info">
          <span className="expense">{charge}</span>
          <span className="amount">${amount}</span>
        </div>
        <button className="edit-btn"  onClick={()=> handleEdit(id)} aria-label="edit button">
          <MdEdit></MdEdit>
        </button>
        <button className="clear-btn" onClick={()=> handleDelete(id)}  aria-label="delete button">
          <MdDelete></MdDelete>
        </button>
      </li>
    </>
  );
};
