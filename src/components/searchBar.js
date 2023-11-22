import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import "./searchBar.scss";

export const SearchBar = () => {
  //Storing data passed into the input field.
  const [input, setInput] = useState("");

  //Making a request to the API using fetch
  const fetchData = (value) => {
    fetch("https://api.crossref.org/journals")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      });
  };
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
