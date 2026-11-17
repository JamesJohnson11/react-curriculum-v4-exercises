export default function TaskItem({ task, completed }) {
  return (
    <>
      <li>
        {task.title} {completed ? '✅' : '⏳'}
      </li>
    </>
  );
}
