import React, { useState, useEffect } from "react";
import { FaAlignCenter, FaSearch } from "react-icons/fa";
import "./searchBar.scss";

export const SearchBar = () => {
  //Storing data passed into the input field.

  //Making a request to the API using axios
  useEffect(() => {
    const fetchData = (value) => {
      fetch("https://api.crossref.org/journals")
        .then((response) => response.json())
        .then((json) => {
          const data = json.message.items;
          // setData(data);
          setFilterData(data);
          // console.log(results);
        });
    };

    fetchData();
  }, []);
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState();
  const handleFilter = (value) => {
    const res = filterData.filter((f) => f.title.toLowerCase().includes(value));
    setData(res);
  };

  return (
    <div>
      <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input
          placeholder="Type to search"
          autoFocus
          onChange={(e) => handleFilter(e.target.value)}
        />
      </div>
      <div className="results-list">
        {data.map((d, i) => {
          return (
            <div
              className="search-result"
              onClick={(e) => alert(`You clicked on ${d.title}`)}
              key={i}
            >
              {d.title}{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
};
