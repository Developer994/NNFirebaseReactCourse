import React from 'react';
import styles from './EventList.module.css';

export default function ({ events, handleDeleteClick }) {
  return (
    <div>
      {events.map((event, index) => (
        <div className={styles.card} key={event.id}>
          <h2>
            {index} - {event.title}
          </h2>
          <p>
            {event.location} - {event.date}
          </p>
          <button
            onClick={() => {
              handleDeleteClick(event.id);
            }}
          >
            delete event
          </button>
        </div>
      ))}
    </div>
  );
}
