import React from 'react';

function UpcomingEvents() {
  return (
    <section className="upcoming-events">
      <h2>Upcoming Events</h2>
      <div className="events-container">
        <div className="event">
          <h3>Event Name 1</h3>
          <p>Date: June 15, 2024</p>
          <p>Location: City Park</p>
          <button>RSVP</button>
        </div>
        {/* Repeat for more events */}
      </div>
    </section>
  );
}

export default UpcomingEvents;
