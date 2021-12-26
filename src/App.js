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
  const [rowDataArray, setRowDataArray] = useState([]);

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
        const sheet = data.sheetsByIndex;
        let rows = [];
        for (let index = 0; index < sheet.length; index++) {
          let rowsLoop = await sheet[index].getRows();
          rows.push(rowsLoop);
          console.log(rowsLoop);
        }
        setRowDataArray(rows);
      }
      readingData();
    }
  }, [data]);

  return (
    <div id='app'>
      {rowDataArray.length ? (
        <>
          {rowDataArray.map((rowData, index) => (
            // <Header productPicture={productPicture}></Header>
            <>
              <Header
                title={rowData[0].title}
                imageUrl={`img/IMG_${index}.jpg`}
              ></Header>
              <Expense rowData={rowData}></Expense>
              <Total
                docTitle={data.title}
                totalCost={rowData[0]["total cost"]}
                costPerOne={rowData[0]["cost/one piece"]}
              ></Total>
            </>
          ))}
        </>
      ) : (
        <Loading></Loading>
      )}
    </div>
  );
};

export default App;
