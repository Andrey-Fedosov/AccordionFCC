import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Accordion } from "./components/accordion/Accordion";

function App() {
  return (
    <div className="App">
      <Accordion title={"this is accordion component"} />
    </div>
  );
}

export default App;
