import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import {ListGroup, Container, Row, Col, Button} from 'react-bootstrap';
import ManageEdit from './ManageEdit.js'
import Handler from "../database/handler.js";

const Manage = ({setPage}) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    Handler.getAll().then(
      response => setData(response)
    );
  }, [data]);

  const [manage, setManage] = useState();

  const handleManaged = (mgn) => {
    if(mgn === undefined) {
      return;
    }
    if(manage === undefined) {
      setManage(mgn);
      return;
    }
    if(manage.id === mgn.id)
      setManage(undefined);
    else setManage(mgn);
  }

  return(
    <div>
      <Breadcrumb>
        <Breadcrumb.Item onClick={e => setPage('Home')}>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
         Manage gigs
        </Breadcrumb.Item>
      </Breadcrumb>
      <Container fluid={true}>
        <Row>
          <Col xs="3">
            <ListGroup as="ul">
              <ListGroup.Item as="li" active>
                Gigs
              </ListGroup.Item>
              {data.map(e => <ListGroup.Item key={e.id}><Button variant="link" onClick={l => handleManaged(e)}>{e.eventname}: {e.artist} {e.date}</Button></ListGroup.Item>)}
            </ListGroup>
          </Col>
          <Col xs="9">
            <ManageEdit manage={manage} setManage={handleManaged}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Manage;
