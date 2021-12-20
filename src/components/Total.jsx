import React from "react";
import "../styles/total.scss";
import html2pdf from "html2pdf.js";

const Total = props => {
  const printPDF = () => {
    const app = document.getElementById("app");
    document.querySelector(".print-button").remove();
    html2pdf(app);
  };

  return (
    <div className='total'>
      <div className='total-title'>Total Price</div>
      <div className='total-price'>{"$" + props.cost}</div>
      <div className='total-costPerOne-title'>Cost per</div>
      <div className='total-costPerOne'>{"$" + props.costPerOne}</div>
      <div className='total-due'>
        Total payment due in 30 days
        <hr style={{ height: "2px", background: "#000000" }} />
      </div>

      <button className='print-button' onClick={printPDF}>
        Print PDF
      </button>
    </div>
  );
};

export default Total;
