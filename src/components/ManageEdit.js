import React from 'react';
import {Button} from 'react-bootstrap';

const ManageEdit = ({data}) => {

  const del = id => {

  }

  if(data === undefined)
    return (
      <h2>Select gig...</h2>
    );
  else return (
    <div>
      <h2>Selected gig: {data.eventname}: {data.artist}</h2>
      <p>{data.location} at {data.time}</p>
      <Button variant="danger" onClick={e => del(data.id)}>Delete</Button>
    </div>
  );
}
export default ManageEdit;
