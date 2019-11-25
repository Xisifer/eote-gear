import React from 'react';
import DatatablePage from "./components/DatatablePage.js"
import DatatablePage2 from "./components/DatatablePage2.js"
import './App.css';

function App() {
  return (

    <div className="App">
      <div className="header">
        <h2>Online XML to JSON Converter: </h2>
        <a href="https://onlinexmltools.com/convert-xml-to-json">https://onlinexmltools.com/convert-xml-to-json</a>
      </div>
      <DatatablePage2 />
    </div>
  );
}

export default App;
