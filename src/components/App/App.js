import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import Reservations from '../Reservations/Reservations';
import Form from '../Form/Form';
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

  const addReservation = (newReservation) => {
    setReservations([...reservations, newReservation])
  }

  return (
    <main className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
        <Form addReservation={addReservation} />
      </div>
      <Reservations reservations={reservations} />
    </main>
  );
}

export default App; 