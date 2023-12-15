import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./searchResult.scss";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export const SearchResults = () => {
  const { searId } = useParams();

  const myRef = useRef();

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/result", { state: { items } });
  }

  useEffect(() => {
    const fetchData = (value) => {
      fetch("https://api.crossref.org/journals")
        .then((response) => response.json())
        .then((json) => {
          const data = json.message.items;
          setApiData(data);
        });
    };
    fetchData();
  }, []);

  const [apiData, setApiData] = useState([]);

  const items = apiData.filter(({ title }) => title === searId);

  function handleSubmit2(event) {
    let titleObj = event.target.innerHTML;
    const result = apiData.filter(({ title }) => title === titleObj);
    event.preventDefault();
    navigate("/2result", { state: { result } });
  }

  return (
    <div className="main-search">
      <div className="child__search">
        {items &&
          items.map((list, i) => {
            return (
              <div className="item-div" key={i}>
                <h7 className="res-publisher-1">Author: {list.publisher}</h7>
                <Link className="result-1-link" onClick={handleSubmit}>
                  <h5 className="res-link-1">{list.title}</h5>
                </Link>
                <ul className="Subjects">
                  {list.subjects.map((sub, i) => {
                    return <div className="subject-result">{sub.name}</div>;
                  })}
                </ul>
              </div>
            );
          })}
        <div className="more-result-search-div"> More simular results... </div>
        {apiData.map((item, id) => {
          return (
            <div className="item-div">
              <h7 className="res-publisher">Author: {item.publisher}</h7>

              <Link onClick={handleSubmit2}>
                <h5 ref={myRef} className="res-link">
                  {item.title}
                </h5>
              </Link>

              <ul className="Subjects">
                {item.subjects.map((sub, i) => {
                  return <div className="subject-result">{sub.name}</div>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};
