import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCard from './ItemCard.js';

const Content = ({data}) => {
  const layout = [6, 20];

  return (
    <center>
      <div className="row">
        {data.map(e => <ItemCard layout={12 / layout[0]} data={e} key={e.id}/> )}
      </div>
    </center>
  );
}

export default Content;
