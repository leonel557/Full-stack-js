import React from "react";

// Components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

// Importing custom styles
import { Main, Header } from "./styles";

const Layout = ({ children }) => {
  return (
    <Container as="main" style={Main} fluid>
      <Row as="header" style={Header} className="justify-content-center">
        <Col as="nav" sm="12" md="12" lg="11" xxl="10">
          <h2>React Frontend App</h2>
        </Col>
      </Row>
      <Row as="section" className="justify-content-center">
        <Col as="article" sm="12" md="12" lg="11" xxl="10">
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
