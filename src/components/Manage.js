import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import {ListGroup, Container, Row, Col, Button} from 'react-bootstrap';
import ManageEdit from './ManageEdit.js'

const Manage = ({setPage, data}) => {

  const [manage, setManage] = useState();

  return(
    <div>
      <Breadcrumb>
        <Breadcrumb.Item onClick={e => setPage('Home')}>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
         Manaagge
        </Breadcrumb.Item>
      </Breadcrumb>
      <Container fluid={true}>
        <Row>
          <Col xs="3">
            <ListGroup as="ul">
              <ListGroup.Item as="li" active>
                Gigs
              </ListGroup.Item>
              {data.map(e => <ListGroup.Item key={e.id}><Button variant="link" onClick={l => setManage(e)}>{e.eventname}: {e.artist} {e.date}</Button></ListGroup.Item>)}
            </ListGroup>
          </Col>
          <Col xs="9">
            <ManageEdit data={manage} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Manage;
