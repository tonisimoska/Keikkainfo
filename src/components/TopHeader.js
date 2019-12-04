import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

const TopHeader = ({title, subtitle}) => {
  return (
    <Jumbotron variant="dark">
      <br/>
      <center>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <p><Button variant="primary">Learn more</Button></p>
      </center>
      <br/>
    </Jumbotron>
  );
}

export default TopHeader;
