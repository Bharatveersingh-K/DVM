import React from 'react';
import './App.css';  

const EventItem = ({ event, onClick }) => {
  return (
    <div>
      <h3>{event.name}</h3>
      <p>Date: {event.date}</p>
      <p>Time: {event.time}</p>
      <p>Venue: {event.venue}</p>
      <button onClick={onClick}>View Details & Book Tickets</button>
    </div>
  );
};

export default EventItem;
