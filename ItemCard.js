import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button} from 'react-bootstrap';
import Logo from "../logo.svg";

const ItemCard = ({layout, data}) => {

  return (
    <div className={"col-xs-" + layout + " gigCard"}>
      <Card border="primary" style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>{data.artist}</Card.Title>
        <Card.Img variant="top" style={{width: "175px"}} src={data.img} />
          <Card.Text>{data.description}</Card.Text>
          <Button variant="primary" href={data.WebPage} target="_blank">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ItemCard;
