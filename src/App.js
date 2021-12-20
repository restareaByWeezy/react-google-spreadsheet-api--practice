import React, { useEffect, useState } from "react";
import "./styles/global.scss";
import Expense from "./components/Expense";
import Header from "./components/Header";
import Total from "./components/Total";
import Loading from "./components/Loading";
import { GoogleSpreadsheet } from "google-spreadsheet";

const creds = require("./googleconfig.json");

const App = () => {
  //state 설정
  const [data, setData] = useState(null);
  const [rowData, setRowData] = useState([]);
  const [cost, setTotalCost] = useState(0);
  const [costPerOne, setCostPerOne] = useState(0);

  //function

  const calcSum = arr => {
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
        const sheet = data.sheetsByIndex[1];

        const rows = await sheet.getRows();

        await sheet.loadCells();

        const cellTotalCost = await sheet.getCellByA1("D2");
        const cellCostPerOne = await sheet.getCellByA1("E2");

        setRowData(rows);
        setTotalCost(cellTotalCost.value);
        setCostPerOne(cellCostPerOne.valuec);
      }
      readingData();
    }
  }, [data]);

  return (
    <div id='app'>
      {rowData.length ? (
        <>
          <Header></Header>
          <Expense rowData={rowData}></Expense>
          <Total cost={cost} costPerOne={costPerOne}></Total>
        </>
      ) : (
        <Loading></Loading>
      )}
    </div>
  );
};

export default App;
