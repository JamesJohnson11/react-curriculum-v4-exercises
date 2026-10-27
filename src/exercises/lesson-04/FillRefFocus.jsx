// TOPIC: Correct useRef usage to control DOM elements
// TASK: Implement focusing an input field when the button is clicked.
import { useRef } from 'react';

export default function FillRefFocus() {
  const inputElement = useRef(null);

  function focusInput() {
    inputElement.current.focus();
  }

  return (
    <div>
      <h2>useRef: Focusing an Input</h2>

      <input type="text" placeholder="Type here..." ref={inputElement} />

      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

// Explanation:
// I implemented useRef to access a DOM node referencing the input element.
// When the button is clicked, the focusInput function is called, which calls the focus method on the input element, bringing it into focus.
