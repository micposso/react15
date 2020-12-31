import React, { useState } from "react";
import "./App.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import List from "./components/ListComponent";

import data from "./data/data";

function App() {
  const [months, setMonths] = useState('');

  return (
    <Container className="p-3">
      <Row>
        <Col></Col>
        <Col xs={6}>
          <Jumbotron>
            <h1 className="header">Birthdays Calendar</h1>
            <Dropdown >
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Pick Month
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {data.map((month, key) => {
                  let monthvalue = Object.keys(month);
                  return (
                    <Dropdown.Item 
                      key={key}
                      eventKey={monthvalue}
                      onSelect={e => setMonths(e)}
                    >
                      {monthvalue}
                    </Dropdown.Item>
                  )
                })}
              </Dropdown.Menu>
            </Dropdown>
            <List people={data} />
            <>
              <Button variant="primary">Clear All</Button>{" "}
              <Button variant="success">Add Birthday</Button>
            </>
          </Jumbotron>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default App;
