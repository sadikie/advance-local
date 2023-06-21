import { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './Components/Table'
import './App.css';

function App() {
  const [users, setUsers] = useState([])
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => setUsers(res.data))
    .catch(err => console.log(err))
  }, [])
  return (
    <div className="container">
      <div className='row'>
        <header className="header">
          <h2>Users Table</h2>
        </header>
      </div>
      <div className='row'>
        <Table users={users}/>
      </div>
    </div>
  );
}

export default App;
