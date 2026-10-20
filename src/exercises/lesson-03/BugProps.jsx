// src/exercises/lesson-03/BugProps.jsx

/*
  BUG #3 — Props Not Updating

  This component displays a message based on a prop and includes
  a button that should change that message.

  Right now, the message is being stored in a way that React does not track,
  so the UI does not update when the value changes.

  Use the commented "Explanation" section at the bottom of this lesson's components.
*/
import { useState } from 'react';

export default function BugProps({ name = 'friend' }) {
  const [message, setMessage] = useState('Hello, ' + name);

  function handleChange() {
    setMessage('Hi, ' + name + '!');
  }

  return (
    <div>
      <p>{message}</p>
      <button onClick={handleChange}>Change Greeting</button>
    </div>
  );
}

// Explanation:
// Updated the component to use the useState hook to manage the message state.
// React does not track regular variables for UI updates because regular variables cannot persist data across renders.
// This is why the previous implementation was not updating the UI message.
// Using useState, ensures that React is aware of the state changes and can re-render the component accordingly when the message is updated.
