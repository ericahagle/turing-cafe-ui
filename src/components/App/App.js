import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import Reservations from '../Reservations/Reservations';
import getAllReservations from '../../apiCalls';

function App() {
  const [ reservations, setReservations ] = useState([]);
  const [ error, setError ] = useState('');

  useEffect(() => {
    getAllReservations()
      .then(data => {
        setReservations([...reservations, ...data]);
      })
      .catch(error => setError(error.message));
  }, []);

  return (
    <main className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
      </div>
      <Reservations reservations={reservations} />
    </main>
  );
}

export default App; 