import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { FaAlignCenter, FaSearch } from "react-icons/fa";
import "./searchBar.scss";

export const SearchBar = () => {
  //Making a request to the API using axios
  useEffect(() => {
    const fetchData = (value) => {
      fetch("https://api.crossref.org/journals")
        .then((response) => response.json())
        .then((json) => {
          const data = json.message.items;
          setFilterData(data);
          // console.log(results);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);

  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const handleFilter = (value) => {
    const res = filterData.filter((f) => f.title.toLowerCase().includes(value));
    setData(res);
    if (value === " ") {
      setData([]);
    }
  };

  return (
    <div>
      <div className="search-bar-container">
        <div className="search-bar-title">
          WhoLook<span className="find-Span">Find</span>
        </div>
        <div className="input-wrapper">
          <FaSearch id="search-icon" />
          <input
            placeholder="Type to search"
            autoFocus
            onChange={(e) => handleFilter(e.target.value)}
          />
        </div>
        <div className="results-list">
          { data.map((d, i) => {
            return (
              <div key={i} className="search-result">
                {" "}
                <Link to={d.title} className="search-bar-link">
                  {d.title}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <Outlet />
    </div>
  );
};
