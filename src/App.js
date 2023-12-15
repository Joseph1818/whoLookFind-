import "./App.scss";
import { Routes, Route } from "react-router-dom";
import React from "react";
import { SearchBar } from "./components/searchBar";
import { SearchResults } from "./components/searchResults";
import { ResultArtc } from "./components/resultArtc";
import Result2Artc from "./components/result2Artc";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SearchBar />}>
          <Route path=":searId" element={<SearchResults />}>
            {" "}
          </Route>
          <Route index element={<h3></h3>} />
        </Route>
        <Route path="/result" element={<ResultArtc />} />
        <Route path="/2result" element={<Result2Artc />} />
        <Route path="*" element={<h1>Page not found!</h1>} />
      </Routes>
    </div>
  );
}

export default App;
