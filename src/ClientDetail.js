import React from 'react';
import { Grid, Row, Col, Tab, Tabs } from 'react-bootstrap';
import Card from './ClientCard';
import SearchNav from './SearchNav';
import {
  MdPerson,
  MdHotel,
  MdBusiness,
  MdLanguage,
  MdSecurity
} from 'react-icons/md';
import './ClientDetail.css';

const ClientDetail = () => {
  return (
    <div>
      <SearchNav title="CLIENT DETAILS" search backNav />
      <div className="search-content">
        <Grid style={{ marginBottom: '30px' }}>
          <Row>
            <Col md={6}>
              <div
                style={{
                  fontSize: '36px',
                  borderBottom: '1px solid #D5DCE0',
                  paddingBottom: '5px'
                }}
              >
                Smith, Jonathan T
              </div>
              <Row style={{ paddingTop: '20px' }}>
                <Col md={4}>
                  <div>
                    <div>Birthdate</div>
                    <div
                      style={{
                        fontSize: '18px',
                        fontWeight: '600',
                        paddingTop: '5px'
                      }}
                    >
                      05/08/1997
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div>
                    <div>KC ID</div>
                    <div
                      style={{
                        fontSize: '18px',
                        fontWeight: '600',
                        paddingTop: '5px'
                      }}
                    >
                      2345167
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div>
                    <div>ProviderOne ID</div>
                    <div
                      style={{
                        fontSize: '18px',
                        fontWeight: '600',
                        paddingTop: '5px'
                      }}
                    >
                      2345167
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md={6} style={{ textAlign: 'right' }}>
              <div className="row">
                <div className="col-md-6" style={{ padding: '10px 15px' }}>
                  Inpatient{' '}
                  <MdHotel
                    style={{ fontSize: '30px', verticalAlign: 'middle' }}
                  />
                </div>

                <div className="col-md-6" style={{ padding: '10px 15px' }}>
                  No ROI{' '}
                  <MdSecurity
                    style={{ fontSize: '30px', verticalAlign: 'middle' }}
                  />
                </div>
                <div className="col-md-6" style={{ padding: '10px 15px' }}>
                  Booked{' '}
                  <MdBusiness
                    style={{ fontSize: '30px', verticalAlign: 'middle' }}
                  />
                </div>
                <div className="col-md-6" style={{ padding: '10px 15px' }}>
                  Deceased{' '}
                  <MdPerson
                    style={{ fontSize: '30px', verticalAlign: 'middle' }}
                  />
                </div>
                <div className="col-md-6" style={{ padding: '10px 15px' }}>
                  Interpreter needed{' '}
                  <MdLanguage
                    style={{ fontSize: '30px', verticalAlign: 'middle' }}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
        <div
          style={{
            position: 'relative',
            marginLeft: '-20px',
            marginRight: '-20px'
          }}
        >
          <div
            style={{
              backgroundColor: '#E8EBEF',
              borderBottom: '6px solid #13598E',
              position: 'absolute',
              width: '100%',
              height: '50px',
              top: '0',
              left: '0'
            }}
          />
          <Grid>
            <Tabs defaultActiveKey={1} id="search-details-tabs">
              <Tab
                eventKey={1}
                title="GENERAL"
                style={{ backgrondColor: 'blue' }}
              >
                <Row>
                  <Col md={6}>
                    <Card theme="green" title="DEMOGRAPHICS">
                      Demographics Content
                    </Card>
                  </Col>
                  <Col md={6}>
                    <Card theme="red" title="MEDICAL">
                      Medical Content
                    </Card>
                  </Col>
                  <Col md={6}>
                    <Card theme="blue" title="AUTHORIZATIONS">
                      Authorizations Content
                    </Card>
                  </Col>
                  <Col md={6}>
                    <Card theme="yellow" title="DETENTION">
                      Detention Content
                    </Card>
                  </Col>
                  <Col md={6}>
                    <Card theme="grey" title="HOUSING & SERVCIES">
                      Housing and Services Content
                    </Card>
                  </Col>
                  <Col md={6}>
                    <Card theme="purple" title="OTHER">
                      Other Content
                    </Card>
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey={2} title="DEMOGRAPHICS">
                DEMOGRAPHICS
              </Tab>
              <Tab eventKey={3} title="AUTHORIZATIONS">
                AUTHORIZATIONS
              </Tab>
              <Tab eventKey={4} title="HOUSING &amp; SERVICES">
                HOUSING &amp; SERVICES
              </Tab>
              <Tab eventKey={5} title="MEDICAL">
                MEDICAL
              </Tab>
              <Tab eventKey={6} title="DETENTION">
                DETENTION
              </Tab>
            </Tabs>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default ClientDetail;
