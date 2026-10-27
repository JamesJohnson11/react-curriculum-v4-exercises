import { useState } from 'react';
import Child from './Child';

export default function Parent() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>Parent-Child Communication</h2>
      <p>Counter: {count}</p>
      <Child updateCount={increment} />
    </div>
  );
}

// Explanation:
// With the update to the child component, the Parent component is now able to pass it's increment function to the child via a prop called updateCount.
// This allows the child component to call the increment function in the parent component when the button is clicked,
// allowing the child to communicate with the parent to update its state.
