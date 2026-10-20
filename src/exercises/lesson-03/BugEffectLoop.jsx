//src/exercises/lesson-03/BugEffectLoop.jsx

/* 
  BUG #1 — Effect Issue 

  This component uses useState and useEffect to update a value.
  The effect is running on every render, which causes the
  component to behave incorrectly.
  */

import { useEffect, useState } from 'react';

export default function BugEffectLoop() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, []);

  return <p>Bug 1 Count: {count}</p>;
}

// Explanation:
// Added an empty array to useEffect as a dependency.
// Without this dependency array, the effect runs on every render causing an infinite loop.
// Adding the dependency arraay allows React to compare the current list of dependencies with the previous list.
// Since they match, the check passes and the effewct runs once on initial mount.
