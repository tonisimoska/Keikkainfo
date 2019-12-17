import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Button, DropdownButton, Form, FormControl, Dropdown} from 'react-bootstrap';

const Navigation = ({items, setPage}) => {
  return (
    <div className="Navbar">
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Keikkainfo</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link onClick={l => setPage("Home")}>Home</Nav.Link>
        <Nav.Link onClick={l => setPage("Keikat")}>Keikat</Nav.Link>
        <DropdownButton variant="secondary" id="dropdown-basic-button" title="Selaa">
          {items.map(e => <Dropdown.Item key={e} onClick={l => setPage(e)}>{e}</Dropdown.Item>)}

        </DropdownButton>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button><span style={{width: "5px"}}></span>
        <Button variant="outline-danger" onClick={e => setPage('Manage')}>Manage</Button>
      </Form>
    </Navbar>
  </div>
  );
}

export default Navigation;
