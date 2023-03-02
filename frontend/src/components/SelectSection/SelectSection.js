import React from "react";

import { Container } from "./styles";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const SelectSection = ({ data, value, onChange }) => {
  return (
    <Row style={Container} className="justify-content-end">
      <Col xs="12" sm="7" md="5" lg="4" xl="3" xxl="2">
        <Form.Label htmlFor="file">Filter by file name</Form.Label>
        <Form.Select
          id="file"
          name="file"
          defaultValue={value}
          onChange={(e) => {
            onChange(e.target.value);
          }}
        >
          {data && data.length ? (
            <>
              <option value="">All files</option>
              {data.map((item, i) => (
                <option value={item} key={i}>
                  {item}
                </option>
              ))}
            </>
          ) : (
            <option>No options</option>
          )}
        </Form.Select>
      </Col>
    </Row>
  );
};

export default SelectSection;
