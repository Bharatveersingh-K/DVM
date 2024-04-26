
import React, { useState } from 'react';
import './App.css';  

const BookingForm = ({ handleBooking }) => {
  const [tickets, setTickets] = useState(1);

  const handleTicketChange = (e) => {
    setTickets(parseInt(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleBooking(tickets);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Number of Tickets:
        <input type="number" min="1" value={tickets} onChange={handleTicketChange} />
      </label>
      <button type="submit">Book Tickets</button>
    </form>
  );
};

export default BookingForm;
