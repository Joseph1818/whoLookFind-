import "./App.scss";
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import { SearchBar } from "./components/searchBar";
import { SearchResults } from "./components/searchResults";
import resultArtc from "./components/resultArtc";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SearchBar />}>
          <Route path=":searId" element={<SearchResults />} />
        </Route>
        <Route path="/resultArt" element={<resultArtc />} />
        <Route path="*" element={<h1>Page not found!</h1>} />
      </Routes>
    </div>
  );
}

export default App;
