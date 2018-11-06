import React, { Component } from 'react';
import '../node_modules/reset-css/reset.css';
import './App.css';
import { FaFlag, FaCog } from 'react-icons/fa';
import {
  Grid,
  Row,
  Col,
  Tabs,
  Tab,
  FormGroup,
  FormControl,
  ControlLabel,
  Button
} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>King County Client Lookup Tool</h1>
          <nav>
            {/* Example content */}
            <ul>
              <li>
                <FaFlag />
              </li>
              <li>
                {' '}
                <FaCog />
              </li>
            </ul>
          </nav>
        </header>
        {/* Example content */}
        <main>

          <div className="search-header">
            <Grid>SEARCH</Grid>
          </div>
          <div className="search-content">
            <Grid>
              <Tabs defaultActiveKey={1} animation={false}>
                <Tab eventKey={1} title="CLIENTS">
                  <Row style={{ marginTop: '20px' }}>
                    <Col md={4}>
                      <FormGroup controlId="formBasicText">
                        <ControlLabel>First name</ControlLabel>
                        <FormControl type="text" onChange={() => {}} />
                        <FormControl.Feedback />
                      </FormGroup>
                    </Col>
                    <Col md={3}>
                      <FormGroup controlId="formBasicText">
                        <ControlLabel>Social Security Number</ControlLabel>
                        <FormControl
                          label="Password"
                          type="password"
                          placeholder="***-**-****"
                          onChange={() => {}}
                        />
                        <FormControl.Feedback />
                      </FormGroup>
                    </Col>
                    <Col md={3}>
                      <FormGroup controlId="formBasicText">
                        <ControlLabel>King County ID</ControlLabel>
                        <FormControl type="text" onChange={() => {}} />
                        <FormControl.Feedback />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4}>
                      <FormGroup controlId="formBasicText">
                        <ControlLabel>Last name</ControlLabel>
                        <FormControl type="text" onChange={() => {}} />
                        <FormControl.Feedback />
                      </FormGroup>
                    </Col>
                    <Col md={3}>
                      <FormGroup controlId="formBasicText">
                        <ControlLabel>Date of birth</ControlLabel>
                        <FormControl
                          label="Date of birth"
                          type="text"
                          placeholder="mm/dd/yyyy"
                          onChange={() => {}}
                        />
                        <FormControl.Feedback />
                      </FormGroup>
                    </Col>
                    <Col md={3}>
                      <FormGroup controlId="formBasicText">
                        <ControlLabel>Provider 1 ID</ControlLabel>
                        <FormControl type="text" onChange={() => {}} />
                        <FormControl.Feedback />
                      </FormGroup>
                    </Col>
                    <Col md={2}>
                    <div className="search-btn">
                      <Button  block type="submit">
                        Search
                      </Button>
                      </div>
                    </Col>
                  </Row>
                </Tab>
              </Tabs>
            </Grid>
          </div>
        </main>
        <footer>
          {/* Example content */}
          Footer
        </footer>
      </div>
    );
  }
}

export default App;
