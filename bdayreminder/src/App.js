import React, { useState } from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import data from "./data/data";
import List from "./components/ListComponent";

function App() {
  const [months, getMonths] = useState(data);
  const [bdayMonth, setMonth] = useState('none');
  
  return (
    <Container className="p-3">
      <Row>
        <Col></Col>
        <Col xs={6}>
          <Jumbotron>
            <h1 className="header">BirthDays Calendar</h1>
            <Dropdown >
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Pick Month
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {months.map((month) => {
                  return (
                    <Dropdown.Item 
                    key={Object.keys(month)[0]} 
                    value={Object.keys(month)[0]}
                    onSelect={e => setMonth(Object.keys(month)[0])}
                    >
                      {Object.keys(month)[0]}
                    </Dropdown.Item>
                  )
                })}
              </Dropdown.Menu>
            </Dropdown>
            <List />
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
