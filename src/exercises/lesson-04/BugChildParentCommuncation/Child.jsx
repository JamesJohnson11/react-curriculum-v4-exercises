export default function Child({ updateCount }) {
  return <button onClick={updateCount}>Increment Counter</button>;
}

// Explanation:
// The child component has been updated to receive a prop called updateCount.
// This prop is a function that is passed down from the parent component and that function is called onClick of the button in the child component.
