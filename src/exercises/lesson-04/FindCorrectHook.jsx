// TOPIC: Choose the correct tool: useRef vs useState
// TASK: Make sure it updates the text *without* triggering a re-render
import { useState } from 'react';

export default function FindCorrectHook() {
  const [clickCount, setClickCount] = useState(0);

  function handleClick() {
    setClickCount((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button onClick={handleClick}>{clickCount} Clicks</button>
    </div>
  );
}

// Explanation:
// With the update to the child component, the Parent component is now able to pass it's increment function to the child via a prop called updateCount.
// This allows the child component to call the increment function in the parent component when the button is clicked,
// allowing the child to communicate with the parent to update its state.
