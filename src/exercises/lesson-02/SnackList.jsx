function SnackList() {
  const snackList = [
    { name: 'Ice cream', rank: 4 },
    { name: 'Chips', rank: 3 },
    { name: 'Cookies', rank: 2 },
    { name: 'Cake', rank: 1 },
  ];

  return (
    <>
      <ol>
        {snackList
          .toSorted((a, b) => a.rank - b.rank)
          .map((snack) => (
            <li key={snack.rank}>{snack.name}</li>
          ))}
      </ol>
    </>
  );
}

export default SnackList;
