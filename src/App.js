import React, { useState } from "react";
import "./styles/global.scss";
import Expense from "./components/Expense";
import Header from "./components/Header";
import Total from "./components/Total";
import { GoogleSpreadsheet } from "google-spreadsheet";

const creds = require("./googleconfig.json");

const App = () => {
  // const [rowData, setRowData] = useState([]);
  // const [totalPriceData, setTotalPriceData] = useState("");
  // const [clientNameData, setClientNameData] = useState("");

  const doc = new GoogleSpreadsheet(
    "1LxPjchDbLKcdvF4Om6_iJIQ0014QKwZzFMPqCTY-1lU"
  );

  async function authGoogleSheet() {
    try {
      await doc.useServiceAccountAuth(creds);

      console.log(doc.title);
    } catch (err) {
      console.log("Auth Error", err);
    }
  }

  authGoogleSheet();

  async function readingData() {
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];

    const rows = await sheet.getRows();
    await sheet.loadCells();

    const totalPrice = sheet.getCellByA1("D2");
    const clientName = sheet.getCellByA1("E2");

    console.log(totalPrice.value);
    console.log(clientName.value);

    // setRowData(rows);
    // setTotalPriceData(totalPrice.value);
    // setClientNameData(clientName.value);

    console.log(rows.length);
    console.log(rows[0].description);
    console.log(rows[0].subtotal);
  }

  readingData();

  return (
    <div className='app'>
      <Header></Header>
      <Expense ></Expense>
      <Total></Total>
    </div>
  );
};

export default App;
