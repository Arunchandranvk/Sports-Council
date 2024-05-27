import React from "react";
import "./Home.css";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { Col, Container, Row } from "react-bootstrap";
import Aside from "../../Common Components/Aside/Aside";
import Post from "./Post";

const Home = () => {
  const fetchAsideItems = () => {
    const asideObj = [
      { text: "Dashboard", link: "/college-home", icon: "th-large" },
      {
        text: "Requests",
        link: "/college/request",
        icon: "sticky-note",
      }
    ];

    return <Aside asideObj={asideObj} />;
  };
  return (
    <div className="main-grid">
      <div> {fetchAsideItems()}</div>
      <Container className="mt-4 home-body">
        <div>
          <div className="text-start event-head mb-4 sticky-top">
            <h3>
              <b>Available Events</b>
            </h3>
          </div>
          <Row>
            <Col>
              <MDBCard style={{ height: "200px" }} className="mt-3">
                <MDBRow className="g-0">
                  <MDBCol md="5">
                    <MDBCardImage
                      style={{ height: "200px", width: "100%" }}
                      src="https://i.postimg.cc/wBLRKf0v/images.jpg"
                      alt="..."
                    />
                  </MDBCol>
                  <MDBCol md="7">
                    <MDBCardBody>
                      <MDBCardTitle>Card title</MDBCardTitle>
                      <MDBCardText>
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </MDBCardText>
                      <MDBCardText>
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </Col>
            <Col>
              <MDBCard style={{ height: "200px" }} className="mt-3">
                <MDBRow className="g-0">
                  <MDBCol md="5">
                    <MDBCardImage
                      style={{ height: "200px", width: "100%" }}
                      src="https://i.postimg.cc/wBLRKf0v/images.jpg"
                      alt="..."
                    />
                  </MDBCol>
                  <MDBCol md="7">
                    <MDBCardBody>
                      <MDBCardTitle>Card title</MDBCardTitle>
                      <MDBCardText>
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </MDBCardText>
                      <MDBCardText>
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </Col>
          </Row>
        </div>

        <Post />
      </Container>
    </div>
  );
};

export default Home;