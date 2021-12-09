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
      <div className="expense-wrapper">
        <div className='expense-items'>
          <div>one</div>
          <div>100</div>
        </div>
      </div>
    </div>
  );
};

export default Expense;

// const rows = rows
// const result = rows.map((row, index)=>
// <div key={index} className='expense-items'>
// <div>{rows[index].description}</div>
// <div>{rows[index].subtotal}</div>
// </div>
// )
