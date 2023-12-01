import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./searchResult.scss";
import { useParams } from "react-router-dom";

export const SearchResults = () => {
  const { searId } = useParams();

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
  const [itemData, setItemData] = useState([]);

  const items = apiData.filter(({ title }) => title === searId);

  console.log(items);

  return (
    <div className="main-search">
      {items && items.map((list, i) => {
        return (
          <div className="item-div" key={i}>
            <h4 className="res-publisher">Author: {list.publisher}</h4>
            <Link>
              <h3 className="res-link-1">{list.title}</h3>
            </Link>
            <ul className="Subjects">
              {
                list.subjects.map((sub,i) => {
                  return <div className="subject-result">{sub.name}</div>;
                })
              }
            </ul>
          </div>
        );
      })}

      <div className="more-result-search-div"> More simular results... </div>
      {apiData.map((item, id) => {
        return (
          <div className="item-div">
            <h4 className="res-publisher">Author: {item.publisher}</h4>

            <Link>
              <h3 className="res-link"> {item.title}</h3>
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
  );
};
