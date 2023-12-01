import _ from "lodash";
import "./resultArtc.scss";
import React, { Component, createRef } from "react";
import { Grid, Header, Image, Rail, Segment, Sticky } from "semantic-ui-react";
import { FaAlignCenter, FaSearch } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Placeholder = () => <Image src="/images/wireframe/paragraph.png" />;

export default class StickyExamplePushing extends Component {
  contextRef = createRef();

  render() {
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
        <div className="grid-main">
          <Grid centered columns={3} className="">
            <Grid.Column>
              <Segment ref={this.contextRef}>
                {_.times(10, (i) => (
                  <Placeholder key={i} />
                ))}

                <Rail position="left">
                  <Sticky context={this.contextRef} pushing>
                    <Header as="h3">Author: </Header>
                    <Image src="/images/wireframe/image.png" />
                  </Sticky>
                </Rail>

                <Rail position="right">
                  {_.times(3, (i) => (
                    <Placeholder key={i} />
                  ))}

                  <Sticky context={this.contextRef} pushing>
                    <Header as="h3">Stuck Content</Header>
                    <Image src="/images/wireframe/image.png" />
                  </Sticky>
                </Rail>
              </Segment>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    );
  }
}
