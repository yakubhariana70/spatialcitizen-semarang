import React from "react";
import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/Footer";
import { Container, Row, Col, Button } from "react-bootstrap";

// || STYLE
import "./home.css";

const Home = () => {
  return (
    <div id="home-page">
      <Container fluid>
        <Row>
          <Col xs={12} lg={4} id="home-image"></Col>
          <Col xs={12} lg={8} id="home-content">
            <Row>
              <nav>
                <NavigationBar />
              </nav>
            </Row>
            <Row>
              <main>
                <div id="hero-section">
                  <h1>Spatial Insight about Semarang Citizen.</h1>
                  <p>
                    Let’s bring Semarang demographic data to live!
                    <br />
                    More accessible and easy to understand with 3D mapping web
                    GIS.
                  </p>
                  <div id="button-cta">
                    <Button
                      variant="success"
                      href="spatialcitizen-semarang/#/storytelling"
                    >
                      Explore Now
                    </Button>
                    <Button
                      variant="outline-success"
                      href="spatialcitizen-semarang/#/about"
                    >
                      About
                    </Button>
                  </div>
                </div>
              </main>
            </Row>
            <Row className="footer-section">
              <Footer />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
