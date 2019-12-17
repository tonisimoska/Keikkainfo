import React, {useEffect, useState} from 'react';
import './App.scss';
import Handler from './database/handler.js';
import TopHeader from './components/TopHeader.js';
import Navigation from './components/Navigation.js';
import Browse from './components/Browse.js';
import Manage from './components/Manage.js';

function App() {
  const title = "Still in development";
  const subtitle = "Something about something";
  const [data, setData] = useState([]);
  const [page, setPage] = useState("Manage");

  useEffect(() => {
    Handler.getAll().then(response => {
    setData(response);
  });
  }, []);

  return (
    <div>
      <Navigation items={Handler.getUniques(data, "location")} setPage={setPage}/>
      {page === "Home" && <TopHeader title={title} subtitle={subtitle}/>}
      {page !== "Home" && page !== 'Manage' && <Browse data={data} filter={page} setPage={setPage}/>}
      {page === "Manage" && <Manage setPage={setPage}/>}
    </div>
  );
}

export default App;
