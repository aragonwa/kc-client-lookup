import React from 'react';
import {
  Grid,
  Table,
  Badge
} from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';
import SearchNav from './SearchNav';

const Results = () => {
  return (
    <div>
      <SearchNav title="RESULTS" search/>
      
      <div className="search-content">
        <Grid>
          <Badge style={{backgroundColor:"#D8D8D8", color:"#000000", fontWeight: "100"}}>Joe <FaTimes></FaTimes></Badge>&nbsp;&nbsp;
          <Badge style={{backgroundColor:"#D8D8D8", color:"#000000", fontWeight: "100"}}>Smith <FaTimes></FaTimes></Badge>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th style={{textAlign:"center"}}>DOB</th>
                <th style={{textAlign:"center"}}>KC ID</th>
                <th style={{textAlign:"center"}}>SSN</th>
                <th style={{textAlign:"center"}}>Medicaid ID</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><a href="#">Joe L. Smith</a></td>
                <td style={{textAlign:"center"}}>12/17/2002</td>
                
                <td style={{textAlign:"center"}}>23142</td>
                <td style={{textAlign:"center"}}>*4567</td>
                <td style={{textAlign:"center"}}>59684934</td>
              </tr>
              <tr className="additional-data-row">
                <td colSpan="5">Variations: Jo Sm <span style={{color:"#8A979D"}}>- Medicaid</span>, Joey Smith <span style={{color:"#8A979D"}}>- HMIS</span>, J. Bob SMith <span style={{color:"#8A979D"}}>- BHRD</span></td>
              </tr>
              <tr>
              <td><a href="#">Jolene M. Smith</a></td>
                <td style={{textAlign:"center"}}>12/17/2002</td>
                <td style={{textAlign:"center"}}>23142</td>
                <td style={{textAlign:"center"}}>*4567</td>
                <td style={{textAlign:"center"}}>59684934</td>
              </tr>
              <tr>
              <td><a href="#">Joel Smith</a></td>
                <td style={{textAlign:"center"}}>12/17/2002</td>
                <td style={{textAlign:"center"}}>23142</td>
                <td style={{textAlign:"center"}}>*4567</td>
                <td style={{textAlign:"center"}}>59684934</td>
              </tr>
              <tr className="additional-data-row">
                <td colSpan="5">Variations: Jo Sm <span style={{color:"#8A979D"}}>- Medicaid</span>, Joey Smith <span style={{color:"#8A979D"}}>- HMIS</span>, J. Bob SMith <span style={{color:"#8A979D"}}>- BHRD</span></td>
              </tr>
            </tbody>
          </Table>
        </Grid>
      </div>
    </div>
  );
};

export default Results;
