import React from "react";

// Components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

// Importing custom styles
import { Main, Header, Section } from "./styles";

const Layout = ({ children }) => {
  return (
    <Container as="main" style={Main} fluid>
      <Row as="header" style={Header} className="justify-content-center">
        <Col as="nav" xs="11" xxl="10">
          <h2>React Frontend App</h2>
        </Col>
      </Row>
      <Row as="section" style={Section} className="justify-content-center">
        <Col as="article" xs="11" xxl="10">
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
