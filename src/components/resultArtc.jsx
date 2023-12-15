import "./resultArtc.scss";
import { FaSearch } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useLocation } from "react-router-dom";
import img1 from "./images/Wiley1.jpg";

export const ResultArtc = () => {
  const { state } = useLocation();
  return (
    <div>
      <div className="search-bar-container-result-page">
        <div className="search-bar-title-result-page">
          WhoLook<span className="find-Span">Find</span>
        </div>
        <div className="input-wrapper-result-page">
          <FaSearch id="search-icon" />
          <input placeholder="Type to search" autoFocus />
        </div>
      </div>

      <div className="container-parent">
        {state &&
          state.items.map((list, i) => {
            return (
              <div key={i} className="">
                {state &&
                  state.items.map((list, i) => {
                    return (
                      <div key={i} className="">
                        <div className="title-section">
                          <h1 className="title">{list.title}</h1>
                        </div>
                        <Container className="container-child">
                          <Row>
                            <Col sm={3}>
                              {" "}
                              <div className="author-section">
                                <h3 className=""> {list.publisher}</h3>
                                <img className="author-img" src={img1} />
                              </div>
                            </Col>
                            <Col sm={9}>
                              <div className="content-section">
                                <h3 className="subject">
                                  {" "}
                                  Articles's Subjects
                                </h3>

                                <div class="subjects-component">
                                  {list.subjects.map((lists, i) => {
                                    return (
                                      <div className="subjects-list">
                                        {
                                          <ul>
                                            <li className="subject">
                                              {lists.name}
                                            </li>
                                          </ul>
                                        }
                                      </div>
                                    );
                                  })}
                                </div>

                                <div className="ISSN-component">
                                  <h3 className="">
                                    International Standard serial Number
                                  </h3>

                                  <ul>
                                    <li>
                                      <div>{list.ISSN}</div>
                                    </li>
                                  </ul>
                                </div>

                                <div className="ISSNT-component">
                                  <h3 className="">
                                    International standard serial Number Type
                                  </h3>
                                  <div className="">
                                    <ul>
                                      <li>
                                        {list["issn-type"].map((item, i) => {
                                          return (
                                            <div>
                                              {item.type}: {item.value}
                                            </div>
                                          );
                                        })}
                                      </li>
                                    </ul>
                                  </div>
                                </div>

                                <div class="article-component-section">
                                  <div className="">
                                    <h3 className="">Arct 1</h3>
                                    <p>
                                      Lorem, ipsum dolor sit amet consectetur
                                      adipisicing elit. Assumenda quibusdam nam,
                                      laborum veritatis est tempore? Obcaecati
                                      corporis fugiat deserunt. Aut asperiores
                                      unde consequatur, cumque ratione delectus
                                      itaque, consectetur perspiciatis
                                      blanditiis a, culpa assumenda quod fugiat
                                      obcaecati aliquam reiciendis aspernatur
                                      eveniet omnis amet? Praesentium quaerat,
                                      soluta nisi maiores quasi eveniet quod
                                      repellendus hic sint ut cum deserunt
                                      laborum dignissimos quibusdam pariatur.
                                      Lorem, ipsum dolor sit amet consectetur
                                      adipisicing elit. Assumenda quibusdam nam,
                                      laborum veritatis est tempore? Obcaecati
                                      corporis fugiat deserunt. Aut asperiores
                                      unde consequatur, cumque ratione delectus
                                      itaque, consectetur perspiciatis
                                      blanditiis a, culpa assumenda quod fugiat
                                      obcaecati aliquam reiciendis aspernatur
                                      eveniet omnis amet? Praesentium quaerat,
                                      soluta nisi maiores quasi eveniet quod
                                      repellendus hic sint ut cum deserunt
                                      laborum dignissimos quibusdam pariatur.
                                    </p>
                                  </div>

                                  <div className="">
                                    <h3 className="">Art 2</h3>
                                    <p>
                                      Lorem, ipsum dolor sit amet consectetur
                                      adipisicing elit. Assumenda quibusdam nam,
                                      laborum veritatis est tempore? Obcaecati
                                      corporis fugiat deserunt. Aut asperiores
                                      unde consequatur, cumque ratione delectus
                                      itaque, consectetur perspiciatis
                                      blanditiis a, culpa assumenda quod fugiat
                                      obcaecati aliquam reiciendis aspernatur
                                      eveniet omnis amet? Praesentium quaerat,
                                      soluta nisi maiores quasi eveniet quod
                                      repellendus hic sint ut cum deserunt
                                      laborum dignissimos quibusdam pariatur.
                                      Lorem, ipsum dolor sit amet consectetur
                                      adipisicing elit. Assumenda quibusdam nam,
                                      laborum veritatis est tempore? Obcaecati
                                      corporis fugiat deserunt. Aut asperiores
                                      unde consequatur, cumque ratione delectus
                                      itaque, consectetur perspiciatis
                                      blanditiis a, culpa assumenda quod fugiat
                                      obcaecati aliquam reiciendis aspernatur
                                      eveniet omnis amet? Praesentium quaerat,
                                      soluta nisi maiores quasi eveniet quod
                                      repellendus hic sint ut cum deserunt
                                      laborum dignissimos quibusdam pariatur.
                                      Lorem, ipsum dolor sit amet consectetur
                                      adipisicing elit. Assumenda quibusdam nam,
                                      laborum veritatis est tempore? Obcaecati
                                      corporis fugiat deserunt. Aut asperiores
                                      unde consequatur, cumque ratione delectus
                                      itaque, consectetur perspiciatis
                                      blanditiis a, culpa assumenda quod fugiat
                                      obcaecati aliquam reiciendis aspernatur
                                      eveniet omnis amet? Praesentium quaerat,
                                      soluta nisi maiores quasi eveniet quod
                                      repellendus hic sint ut cum deserunt
                                      laborum dignissimos quibusdam pariatur.
                                      Lorem, ipsum dolor sit amet consectetur
                                      adipisicing elit. Assumenda quibusdam nam,
                                      laborum veritatis est tempore? Obcaecati
                                      corporis fugiat deserunt. Aut asperiores
                                      unde consequatur, cumque ratione delectus
                                      itaque, consectetur perspiciatis
                                      blanditiis a, culpa assumenda quod fugiat
                                      obcaecati aliquam reiciendis aspernatur
                                      eveniet omnis amet? Praesentium quaerat,
                                      soluta nisi maiores quasi eveniet quod
                                      repellendus hic sint ut cum deserunt
                                      laborum dignissimos quibusdam pariatur.
                                      Lorem, ipsum dolor sit amet consectetur
                                      adipisicing elit. Assumenda quibusdam nam,
                                      laborum veritatis est tempore? Obcaecati
                                      corporis fugiat deserunt. Aut asperiores
                                      unde consequatur, cumque ratione delectus
                                      itaque, consectetur perspiciatis
                                      blanditiis a, culpa assumenda quod fugiat
                                      obcaecati aliquam reiciendis aspernatur
                                      eveniet omnis amet? Praesentium quaerat,
                                      soluta nisi maiores quasi eveniet quod
                                      repellendus hic sint ut cum deserunt
                                      laborum dignissimos quibusdam pariatur.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </Container>
                      </div>
                    );
                  })}
              </div>
            );
          })}
      </div>
    </div>
  );
};
