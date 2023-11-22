import "./App.css";
import React, { useState } from "react";
import { SearchBar } from "./components/searchBar";

function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <div className="search-bar-container">
        <div className="search-bar-title">
          WhoLook<span className="find-Span">Find</span>
        </div>
        <div className="search-bar">
          <SearchBar setResults={setResults} />
        </div>
      </div>
    </div>
  );
}

export default App;
