import React from 'react';
import '../styles/total.scss'

const Total = () => {
    return (
        <div className="total">
            <div className="total-title">
                Total Due
            </div>
            <div className="total-price">
                $12,345
            </div>
            <div className="total-due">
                Total payment due in 30 days
            <hr style={{height: "2px",
        background: "#000000"}}/>
            </div>
        </div>
    );
};

export default Total;