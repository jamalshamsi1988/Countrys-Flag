import React from "react";
 import { BrowserRouter as Router, Route ,link } from "react-router-dom";
import Header from "./Components/Header";
import Filter from "./Components/Filter";
import Countries from "./Components/Countries";


function App() {
  return (
    <Router>
      <>
        <Header />
        <Filter/>
        <Countries />
      </>
    </Router>
  );
}

export default App;
