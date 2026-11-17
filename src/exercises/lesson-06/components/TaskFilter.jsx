const FILTERS = [
  { value: 'all', label: 'All' },
  { value: 'completed', label: 'Completed' },
  { value: 'pending', label: 'Pending' },
];

export default function TaskFilters({ currentFilter, onFilterChange }) {
  return (
    <>
      {FILTERS.map((filterOption) => (
        <button
          key={filterOption.value}
          onClick={() => onFilterChange(filterOption.value)}
        >
          {filterOption.label}
        </button>
      ))}
      <p>Current filter: {currentFilter}</p>
    </>
  );
}
