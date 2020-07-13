import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import PriceList from "./components/PriceList";
import ViewTab from "./components/ViewTab";
import TotalPrice from "./components/TotalPrice";
import MonthPicker from "./components/MonthPicker"

const items = [
    {
        "id":1,
        "title":"去云南旅游",
        "price":200,
        "category":{"id":1,"name":"旅行","type":"outcome","iconName":"ios-plane"}
    },
    {
        "id":2,
        "title":"去云南旅游",
        "price":400,
        "category":{"id":2,"name":"旅行","type":"outcome","iconName":"ios-plane"}
    }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        <ViewTab
        />
        <TotalPrice
            income={600}
            outcome={500}
        />

        <MonthPicker
            year={2018}
            month={5}
        />
    </div>
  );
}

export default App;
