import FilterButton from "./FilterButton";

export default function MapFilter({current, onFilterChange}) {

  return (
    <div className="absolute top-0 left-0 w-full z-10 p-2 flex">
      <FilterButton current={current} type="carbon" onClick={onFilterChange}>
        By Carbon
      </FilterButton>
      <FilterButton current={current} type="electricity" onClick={onFilterChange}>
        By Electricity
      </FilterButton>
      <select className="rounded-md shadow-md p-1 mx-1">
        <option value="last 3 months">last 3 months</option>
        <option value="last 3 months">last 6 months</option>
        <option value="last 3 months">last 1 year</option>
      </select>
    </div>
  );
}
