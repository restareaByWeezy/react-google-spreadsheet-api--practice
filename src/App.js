import React from "react";
import "./styles/global.scss";
import Expense from "./components/Expense";
import Header from "./components/Header";
import Total from "./components/Total";
import { GoogleSpreadsheet } from "google-spreadsheet";
const creds = require("./googleconfig.json");

const App = () => {
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
    console.log(rows.length);
    console.log(rows[0].description);
    console.log(rows[0].subtotal);
  }

  readingData();


  return (
    <div className='app'>
      <Header></Header>
      <Expense></Expense>
      <Total></Total>
    </div>
  );
};

export default App;
