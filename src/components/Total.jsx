import React from "react";
import "../styles/total.scss";
import html2pdf from "html2pdf.js";




const Total = props => {
  const printPDF = () => {
    const app = document.getElementById("app");
    const opt = {
      margin:       1,
      filename:     `${props.docTitle}`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' },
      pagebreak: {mode: 'css'}
    };
    const printButtonArr = document.querySelectorAll(".print-button");
    printButtonArr.forEach(printButton => {
      printButton.remove();
    });
    html2pdf(app, opt);
  };

  return (
    <div className='total'>
      <div className='total-title'>Total Price</div>
      <div className='total-price'>{"¥" + props.totalCost}</div>
      <div className='total-costPerOne-title'>Cost per one piece</div>
      <div className='total-costPerOne'>{"¥" + props.costPerOne}</div>
      <div className='total-due'>
        Cost can fluctuate with market price
        <hr style={{ height: "2px", background: "#000000" }} />
      </div>

      <button className='print-button' onClick={printPDF}>
        Print PDF
      </button>
    </div>
  );
};

export default Total;
