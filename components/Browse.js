import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Handler from '../database/handler.js';
import {Breadcrumb, Container, Col, Row} from 'react-bootstrap';
import SideNav from './SideNav.js';
import Content from './Content.js';

const Browse = ({data, filter, setPage}) => {

  const [showFuture, setShowFuture] = useState(false);
  if(data.length === 0)
    return(
      <div>
        <p>There is no gigs!</p>
      </div>
    );

  let newData = showFuture ? Handler.getFuture(data) : data;

  if(filter !== "Keikat") {
    newData = Handler.filterAsLocation(newData, filter, "location");
  }
  const locations = Handler.getUniques(data, "location");
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item onClick={e => setPage("Home")}>Home</Breadcrumb.Item>
        <Breadcrumb.Item onClick={e => setPage("Keikat")}>
         Keikat
        </Breadcrumb.Item>
        {filter !== "Keikat" && <Breadcrumb.Item active>{filter}</Breadcrumb.Item>}
      </Breadcrumb>
      <Container fluid={true}>
        <Row>
          <Col xs={3}>
            <SideNav locations={locations} setPage={setPage} future={setShowFuture}/>
          </Col>
          <Col xs={9}>
            <Content data={newData}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Browse;
