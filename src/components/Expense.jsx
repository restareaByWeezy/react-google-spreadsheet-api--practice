import React from "react";
import "../styles/expense.scss";

const Expense = props => {
  const result = props.rowData.map((row, index) => (
    <div key={index} className='expense-items'>
      <div className='ingridients'>{row.ingridients}</div>
      <div className='amount'>{row.amount}</div>
      <div className='cost'>{row.cost}</div>
    </div>
  ));

  return (
    <div className='expense'>
      <div className='expense-category'>
        <div>Ingridients</div>
        <div>Amount</div>
        <div>Cost</div>
      </div>
      <hr style={{ height: "1px", background: "#000000" }} />
      <div className='expense-wrapper'>{result}</div>
    </div>
  );
};

export default Expense;
