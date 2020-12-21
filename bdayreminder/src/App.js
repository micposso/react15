import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

import List from './components/ListComponent'

function App() {
  return (
    <Container className="p-3">
      <Row>
      <Col>
      </Col>
      <Col>
        <Jumbotron>
        <h1 className="header">BirthDays this Month</h1>
        <List />
        <Button>Clear All</Button>
        </Jumbotron>
      </Col>
      <Col>
      </Col>
      </Row>
    </Container>
  );
}

export default App;
