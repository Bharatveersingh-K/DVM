
import React from 'react';
import EventItem from './EventItem';


const EventListingPage = ({ events, handleEventClick }) => {
  return (
    <div>
      <h1>Event Listing Page</h1>
      <div>
        {events.map(event => (
          <EventItem key={event.id} event={event} onClick={() => handleEventClick(event.id)} />
        ))}
      </div>
    </div>
  );
};

export default EventListingPage;
