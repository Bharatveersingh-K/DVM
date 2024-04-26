import React, { useState } from 'react';
import EventListingPage from './components/EventListingPage';
import EventDetailsPage from './components/EventDetailsPage';
import './App.css'; // Import the app.css file

const App = () => {
  const [events, setEvents] = useState([
    { id: 1, name: 'Event 1', date: '2024-04-28', time: '10:00 AM', venue: 'Venue 1', availableTickets: 100 },
    { id: 2, name: 'Event 2', date: '2024-05-05', time: '2:00 PM', venue: 'Venue 2', availableTickets: 50 },
  ]);

  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (eventId) => {
    const selected = events.find(event => event.id === eventId);
    setSelectedEvent(selected);
  };

  const handleBooking = (tickets) => {
    if (selectedEvent.availableTickets >= tickets) {
      setEvents(events.map(event => event.id === selectedEvent.id ? { ...event, availableTickets: event.availableTickets - tickets } : event));
      // Implement booking functionality here (e.g., API call)
      alert(`Successfully booked ${tickets} tickets for ${selectedEvent.name}`);
    } else {
      alert('Not enough tickets available');
    }
  };

  return (
    <div className="container"> {/* Wrap your JSX elements with a container div */}
      {selectedEvent ? (
        <EventDetailsPage event={selectedEvent} handleBooking={handleBooking} />
      ) : (
        <EventListingPage events={events} handleEventClick={handleEventClick} />
      )}
    </div>
  );
};

export default App;
