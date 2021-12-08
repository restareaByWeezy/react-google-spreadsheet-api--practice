import React from "react";
import "../styles/expense.scss";

const Expense = () => {
  return (
    <div className='expense'>
      <div className='expense-category'>
        <div>Description</div>
        <div>Subtotal</div>
      </div>
      <hr style={{height: '1px', background: "#000000" }}/>
      <div className='expense-items'>
        <div>one</div>
        <div>100</div>
      </div>
    </div>
  );
};

export default Expense;
