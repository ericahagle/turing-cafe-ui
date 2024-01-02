import './Card.css';

function Card({ id, name, date, time, number }) {
  return (
    <div className='Card'>
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of guests: {number}</p>
      <button className='cancel-resy-button'>Cancel</button>
    </div>
  );
};

export default Card;