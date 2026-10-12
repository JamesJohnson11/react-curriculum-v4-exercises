function SnackList() {
  const snackList = [
    { name: 'Ice cream', rank: 4 },
    { name: 'Chips', rank: 3 },
    { name: 'Cookies', rank: 2 },
    { name: 'Cake', rank: 1 },
  ];

  return (
    <ul>
      {snackList
        .toSorted((a, b) => a.rank - b.rank)
        .map((snack) => (
          <li key={snack.rank}>
            {snack.name} - Ranked number {snack.rank} out of 4.
          </li>
        ))}
    </ul>
  );
}

export default SnackList;
