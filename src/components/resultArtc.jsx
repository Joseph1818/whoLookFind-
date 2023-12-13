import "./resultArtc.scss";
import { FaAlignCenter, FaSearch } from "react-icons/fa";
import _ from "lodash";
import React, { Component, createRef } from "react";
import { Grid, Header, Image, Rail, Segment, Sticky } from "semantic-ui-react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const ResultArtc = () => {
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
      <Container>
        <Row>
          <div class="content">
            <section>
              <h2 class="section-title">Section title number one</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda quibusdam nam, laborum veritatis est tempore?
                Obcaecati corporis fugiat deserunt. Aut asperiores unde
                consequatur, cumque ratione delectus itaque, consectetur
                perspiciatis blanditiis a, culpa assumenda quod fugiat obcaecati
                aliquam reiciendis aspernatur eveniet omnis amet? Praesentium
                quaerat, soluta nisi maiores quasi eveniet quod repellendus hic
                sint ut cum deserunt laborum dignissimos quibusdam pariatur.
              </p>
              <p>
                Mollitia quos ab rem incidunt dolore molestiae tempore quo,
                dolores ratione doloremque voluptas sed error quae quas? Nam
                repellat rem libero. Qui at perspiciatis rem aliquid quia nisi
                facere deleniti maiores id. Porro sequi dolores quidem quibusdam
                veniam vero iusto libero accusantium commodi nemo a sit iure,
                suscipit asperiores fugiat sed facilis hic nisi quos, ipsum
                sint? Facilis, eos reprehenderit.
              </p>
              <p>
                A provident inventore quas delectus placeat consequatur, atque
                asperiores facere animi ipsum eaque tempore nemo ab officia
                minus nihil omnis, magnam dolorum consectetur error maxime?
                Sapiente, eius. Voluptates officia consectetur nihil, placeat ea
                porro maiores beatae officiis ab quibusdam in earum cupiditate
                culpa iure ut tenetur illo recusandae atque nulla rem
                perferendis omnis eveniet tempore error! Ducimus fuga pariatur
                hic.
              </p>
              <p>
                Possimus culpa debitis corporis, sint excepturi inventore cum
                adipisci voluptates voluptas est unde repellendus, rem id
                voluptatem tempora error animi expedita. Tempora pariatur eaque
                vitae similique eius possimus provident aliquam sunt facilis
                iusto earum error in, optio quos nobis ut sint enim! Placeat
                laudantium omnis perspiciatis. Porro suscipit architecto, sunt
                fuga maxime temporibus cumque atque consequuntur, soluta aliquid
                in officia?
              </p>
            </section>
            <section>
              <h2 class="section-title">Section title number two</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda quibusdam nam, laborum veritatis est tempore?
                Obcaecati corporis fugiat deserunt. Aut asperiores unde
                consequatur, cumque ratione delectus itaque, consectetur
                perspiciatis blanditiis a, culpa assumenda quod fugiat obcaecati
                aliquam reiciendis aspernatur eveniet omnis amet? Praesentium
                quaerat, soluta nisi maiores quasi eveniet quod repellendus hic
                sint ut cum deserunt laborum dignissimos quibusdam pariatur.
              </p>
              <p>
                Mollitia quos ab rem incidunt dolore molestiae tempore quo,
                dolores ratione doloremque voluptas sed error quae quas? Nam
                repellat rem libero. Qui at perspiciatis rem aliquid quia nisi
                facere deleniti maiores id. Porro sequi dolores quidem quibusdam
                veniam vero iusto libero accusantium commodi nemo a sit iure,
                suscipit asperiores fugiat sed facilis hic nisi quos, ipsum
                sint? Facilis, eos reprehenderit.
              </p>
              <p>
                A provident inventore quas delectus placeat consequatur, atque
                asperiores facere animi ipsum eaque tempore nemo ab officia
                minus nihil omnis, magnam dolorum consectetur error maxime?
                Sapiente, eius. Voluptates officia consectetur nihil, placeat ea
                porro maiores beatae officiis ab quibusdam in earum cupiditate
                culpa iure ut tenetur illo recusandae atque nulla rem
                perferendis omnis eveniet tempore error! Ducimus fuga pariatur
                hic.
              </p>
              <p>
                Possimus culpa debitis corporis, sint excepturi inventore cum
                adipisci voluptates voluptas est unde repellendus, rem id
                voluptatem tempora error animi expedita. Tempora pariatur eaque
                vitae similique eius possimus provident aliquam sunt facilis
                iusto earum error in, optio quos nobis ut sint enim! Placeat
                laudantium omnis perspiciatis. Porro suscipit architecto, sunt
                fuga maxime temporibus cumque atque consequuntur, soluta aliquid
                in officia?
              </p>
            </section>
            <section>
              <h2 class="section-title">Section title number three</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda quibusdam nam, laborum veritatis est tempore?
                Obcaecati corporis fugiat deserunt. Aut asperiores unde
                consequatur, cumque ratione delectus itaque, consectetur
                perspiciatis blanditiis a, culpa assumenda quod fugiat obcaecati
                aliquam reiciendis aspernatur eveniet omnis amet? Praesentium
                quaerat, soluta nisi maiores quasi eveniet quod repellendus hic
                sint ut cum deserunt laborum dignissimos quibusdam pariatur.
              </p>
              <p>
                Mollitia quos ab rem incidunt dolore molestiae tempore quo,
                dolores ratione doloremque voluptas sed error quae quas? Nam
                repellat rem libero. Qui at perspiciatis rem aliquid quia nisi
                facere deleniti maiores id. Porro sequi dolores quidem quibusdam
                veniam vero iusto libero accusantium commodi nemo a sit iure,
                suscipit asperiores fugiat sed facilis hic nisi quos, ipsum
                sint? Facilis, eos reprehenderit.
              </p>
              <p>
                A provident inventore quas delectus placeat consequatur, atque
                asperiores facere animi ipsum eaque tempore nemo ab officia
                minus nihil omnis, magnam dolorum consectetur error maxime?
                Sapiente, eius. Voluptates officia consectetur nihil, placeat ea
                porro maiores beatae officiis ab quibusdam in earum cupiditate
                culpa iure ut tenetur illo recusandae atque nulla rem
                perferendis omnis eveniet tempore error! Ducimus fuga pariatur
                hic.
              </p>
              <p>
                Possimus culpa debitis corporis, sint excepturi inventore cum
                adipisci voluptates voluptas est unde repellendus, rem id
                voluptatem tempora error animi expedita. Tempora pariatur eaque
                vitae similique eius possimus provident aliquam sunt facilis
                iusto earum error in, optio quos nobis ut sint enim! Placeat
                laudantium omnis perspiciatis. Porro suscipit architecto, sunt
                fuga maxime temporibus cumque atque consequuntur, soluta aliquid
                in officia?
              </p>
            </section>
            <section>
              <h2 class="section-title">Section title number one</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda quibusdam nam, laborum veritatis est tempore?
                Obcaecati corporis fugiat deserunt. Aut asperiores unde
                consequatur, cumque ratione delectus itaque, consectetur
                perspiciatis blanditiis a, culpa assumenda quod fugiat obcaecati
                aliquam reiciendis aspernatur eveniet omnis amet? Praesentium
                quaerat, soluta nisi maiores quasi eveniet quod repellendus hic
                sint ut cum deserunt laborum dignissimos quibusdam pariatur.
              </p>
              <p>
                Mollitia quos ab rem incidunt dolore molestiae tempore quo,
                dolores ratione doloremque voluptas sed error quae quas? Nam
                repellat rem libero. Qui at perspiciatis rem aliquid quia nisi
                facere deleniti maiores id. Porro sequi dolores quidem quibusdam
                veniam vero iusto libero accusantium commodi nemo a sit iure,
                suscipit asperiores fugiat sed facilis hic nisi quos, ipsum
                sint? Facilis, eos reprehenderit.
              </p>
              <p>
                A provident inventore quas delectus placeat consequatur, atque
                asperiores facere animi ipsum eaque tempore nemo ab officia
                minus nihil omnis, magnam dolorum consectetur error maxime?
                Sapiente, eius. Voluptates officia consectetur nihil, placeat ea
                porro maiores beatae officiis ab quibusdam in earum cupiditate
                culpa iure ut tenetur illo recusandae atque nulla rem
                perferendis omnis eveniet tempore error! Ducimus fuga pariatur
                hic.
              </p>
              <p>
                Possimus culpa debitis corporis, sint excepturi inventore cum
                adipisci voluptates voluptas est unde repellendus, rem id
                voluptatem tempora error animi expedita. Tempora pariatur eaque
                vitae similique eius possimus provident aliquam sunt facilis
                iusto earum error in, optio quos nobis ut sint enim! Placeat
                laudantium omnis perspiciatis. Porro suscipit architecto, sunt
                fuga maxime temporibus cumque atque consequuntur, soluta aliquid
                in officia?
              </p>
            </section>
            <section>
              <h2 class="section-title">Section title number one</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda quibusdam nam, laborum veritatis est tempore?
                Obcaecati corporis fugiat deserunt. Aut asperiores unde
                consequatur, cumque ratione delectus itaque, consectetur
                perspiciatis blanditiis a, culpa assumenda quod fugiat obcaecati
                aliquam reiciendis aspernatur eveniet omnis amet? Praesentium
                quaerat, soluta nisi maiores quasi eveniet quod repellendus hic
                sint ut cum deserunt laborum dignissimos quibusdam pariatur.
              </p>
              <p>
                Mollitia quos ab rem incidunt dolore molestiae tempore quo,
                dolores ratione doloremque voluptas sed error quae quas? Nam
                repellat rem libero. Qui at perspiciatis rem aliquid quia nisi
                facere deleniti maiores id. Porro sequi dolores quidem quibusdam
                veniam vero iusto libero accusantium commodi nemo a sit iure,
                suscipit asperiores fugiat sed facilis hic nisi quos, ipsum
                sint? Facilis, eos reprehenderit.
              </p>
              <p>
                A provident inventore quas delectus placeat consequatur, atque
                asperiores facere animi ipsum eaque tempore nemo ab officia
                minus nihil omnis, magnam dolorum consectetur error maxime?
                Sapiente, eius. Voluptates officia consectetur nihil, placeat ea
                porro maiores beatae officiis ab quibusdam in earum cupiditate
                culpa iure ut tenetur illo recusandae atque nulla rem
                perferendis omnis eveniet tempore error! Ducimus fuga pariatur
                hic.
              </p>
              <p>
                Possimus culpa debitis corporis, sint excepturi inventore cum
                adipisci voluptates voluptas est unde repellendus, rem id
                voluptatem tempora error animi expedita. Tempora pariatur eaque
                vitae similique eius possimus provident aliquam sunt facilis
                iusto earum error in, optio quos nobis ut sint enim! Placeat
                laudantium omnis perspiciatis. Porro suscipit architecto, sunt
                fuga maxime temporibus cumque atque consequuntur, soluta aliquid
                in officia?
              </p>
            </section>
          </div>
        </Row>
      </Container>
    </div>
  );
};
