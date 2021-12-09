import React, { useEffect, useState } from "react";
import "./styles/global.scss";
import Expense from "./components/Expense";
import Header from "./components/Header";
import Total from "./components/Total";
import { GoogleSpreadsheet } from "google-spreadsheet";

const creds = require("./googleconfig.json");

const App = () => {
  const [data, setData] = useState(null);
  const [rowData, setRowData] = useState([]);
  const [price, setPrice] = useState(0);

  const calcSum = (arr) => {
    let sumPrice = 0;

    arr.forEach(row => {
      sumPrice += Number(row.price);
    });

    return sumPrice;
  };


  useEffect(() => {
    const doc = new GoogleSpreadsheet(
      "1LxPjchDbLKcdvF4Om6_iJIQ0014QKwZzFMPqCTY-1lU"
    );

    async function authGoogleSheet() {
      try {
        await doc.useServiceAccountAuth(creds);
        await doc.loadInfo();

        setData(doc);
      } catch (err) {
        console.log("Auth Error", err);
      }
    }
    authGoogleSheet();
  }, []);

  useEffect(() => {
    if (data) {
      async function readingData() {
        const sheet = data.sheetsByIndex[0];

        const rows = await sheet.getRows();

        setRowData(rows);
        setPrice(calcSum(rows));


      }
      readingData();
    }
  }, [data]);


  return (
    <div className='app'>
      <Header></Header>
      <Expense rowData={rowData}></Expense>
      <Total price={price}></Total>
    </div>
  );
};

export default App;
