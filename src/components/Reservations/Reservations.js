import './Reservations.css';
import Card from '../Card/Card';

function Reservations({ reservations }) {
  const reservationCards = reservations.map(reservation => {
    return (
      <Card 
        key={reservation.id}
        id={reservation.id}
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        number={reservation.number}
      />
    );
  });
  return (
    <div className='resy-container'>
      {reservationCards}
    </div>
  );
};

export default Reservations;