import React, {useState} from 'react';
import {Button, Form, Row, Col, InputGroup} from 'react-bootstrap';
import Handler from "../database/handler.js";

const ManageEdit = ({manage, setManage}) => {

  const [state, setState] = useState([]);

  const del = id => {
    Handler.removeGig(id);
    setManage();
  }
  const setStateOf = (i, value) => {
    let temp = [...state];
    temp[i] = value;
    setState(temp);
    console.log(state);
  }
  const add = () => {
    var gig = {
      "artist": state[0],
      "eventname": state[1],
      "img": state[2],
      "description": state[3],
      "date": state[4],
      "time": state[5],
      "adress": state[6],
      "location": state[7],
      "tickets": state[8],
      "category": state[9],
      "WebPage": state[10]
    };
    Handler.addGig(gig);
  }

  if(manage === undefined)
    return (
      <div>
        <h2>Select gig...</h2>
        <br/>
        <p>Or</p>
        <p>Create new one</p>

        <Form>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Artist
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="Artist" onChange={e => setStateOf(0 , e.target.value)}/>
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Event
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="Event" onChange={e => setStateOf(1 , e.target.value)}/>
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Description
            </Form.Label>
            <Col sm="10">
              <Form.Control as="textarea" placeholder="Description" onChange={e => setStateOf(3 , e.target.value)}/>
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Image Link
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="Link" onChange={e => setStateOf(2 , e.target.value)}/>
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm="2">
            Artist WebPage
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="Artist WebPage" onChange={e => setStateOf(10 , e.target.value)}/>
            </Col>
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Date</Form.Label>
              <Form.Control type="Date" onChange={e => setStateOf("Date" , e.target.value)}/>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Time</Form.Label>
              <Form.Control type="text" placeholder="Event time" onChange={e => setStateOf(5 , e.target.value)}/>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Adress</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">!</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control type="text" placeholder="Adress" onChange={e => setStateOf(6 , e.target.value)}/>
              </InputGroup>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Location</Form.Label>
              <Form.Control type="Text" placeholder="Location" onChange={e => setStateOf(7 , e.target.value)}/>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Tickets</Form.Label>
              <Form.Control type="text" placeholder="Tickets from..." onChange={e => setStateOf(8 , e.target.value)}/>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Category</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">!</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control type="text" placeholder="Category" onChange={e => setStateOf(9 , e.target.value)} />
              </InputGroup>
            </Form.Group>
          </Form.Row>
        </Form>
        <Button onClick={e => add()}>Add new</Button>
      </div>
    );
  else return (
    <div>
      <h2>Selected gig: {manage.eventname}: {manage.artist}</h2>
      <p>{manage.location} at {manage.time}</p>
      <Form.Group>
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows="3"></Form.Control>
      </Form.Group>
      <Button variant="danger" onClick={e => del(manage.id)}>Delete</Button>
      <Button variant="primary" onClick={e => del(manage.id)}>Save changes</Button>
    </div>
  );
}
export default ManageEdit;
