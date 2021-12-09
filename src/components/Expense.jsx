import React from "react";
import "../styles/expense.scss";

const Expense = props => {
  const result = props.rowData.map((row, index) => (
    <div key={index} className='expense-items'>
      <div>{row.description}</div>
      <div>{row.price}</div>
    </div>
  ));

  return (
    <div className='expense'>
      <div className='expense-category'>
        <div>Description</div>
        <div>Subtotal</div>
      </div>
      <hr style={{ height: "1px", background: "#000000" }} />
      <div className='expense-wrapper'>{result}</div>
    </div>
  );
};

export default Expense;
