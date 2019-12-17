import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ListGroup} from 'react-bootstrap';
import Form from 'react-bootstrap/Form'

const SideNav = ({locations, setPage, future}) => {

  return (
    <Form>
      <ListGroup as="ul">
        <ListGroup.Item as="li" active>
          Filter gigs
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <Form.Check type="switch" label="Show only upcoming" id="show-all" onChange={e => future(e.target.checked)}/>
      </ListGroup.Item>
    </ListGroup>
      <ListGroup as="ul">
        {locations.map(e => <ListGroup.Item key={e} onClick={j => setPage(e)}>{e}</ListGroup.Item>)}
      </ListGroup>
    </Form>
  );
}

export default SideNav;
