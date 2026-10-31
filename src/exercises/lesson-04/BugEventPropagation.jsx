// TOPIC: Event Bubbling & Stopping Propagation
// TASK: Ensure only the inner button's action triggers an alert when the button is pushed

export default function BugEventPropagation() {
  function handleOuterClick() {
    alert("RED BOX CLICKED ❌ Don't show me!");
  }

  function handleInnerClick(event) {
    event.stopPropagation();
    alert('Button Clicked ✅');
  }

  return (
    <>
      <h2>Stopping Event Propagation</h2>
      <div
        style={{ padding: 20, border: '2px solid red' }}
        onClick={handleOuterClick}
      >
        <button onClick={handleInnerClick}>Click inner button</button>
      </div>
    </>
  );
}

// Explanation:
// In React, the default behavior of events is that they bubble up through the DOM tree.
// This means that when an event is triggered on a child element, it will also trigger any event handlers on its parent elements.
// The original implementation doesn't account for this, so when the inner click event is triggered, it also triggers the outer click event, resulting in both alerts being shown.
// As a fix, I added the stopPropagation() method in the inner click handler. which stops the event from bubbling up to parent elements.
