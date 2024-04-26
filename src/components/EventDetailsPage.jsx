 
import React from 'react';
import BookingForm from './BookingForm';
import './App.css'; // Import the app.css file

const EventDetailsPage = ({ event, handleBooking }) => {
  return (
    <div>
      <h1>Event Details</h1>
      <div>
        <h2>{event.name}</h2>
        <p>Date: {event.date}</p>
        <p>Time: {event.time}</p>
        <p>Venue: {event.venue}</p>
        <p>Available Tickets: {event.availableTickets}</p>
        <BookingForm handleBooking={handleBooking} />
      </div>
    </div>
  );
};

export default EventDetailsPage;
