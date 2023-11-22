
import "./App.css";
import { SearchBar } from "./components/searchBar";

function App() {
  return (
    <div className="App">
      <div className="search-bar-container">
        <div className="search-bar-title">WhoLook<span className="find-Span">Find</span></div>
        <div className="search-bar">
          <SearchBar />
        </div>
        <div>SearchBarResults</div>
      </div>
    </div>
  );
}

export default App;
