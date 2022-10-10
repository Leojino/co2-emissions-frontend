export default function Summary({ current }) {
  return (
    <div className="absolute z-10 inset-x-0 bottom-2 flex justify-center align-center">
      <div className="bg-slate-100 min-w-96 shadow-md rounded p-2">
        {/* Perhaps 1 and 2 are visible when CO2 emissions are toggled on the map 
        and 3 and 4 are visible when electricity usage is toggled on the map. */}
        {current == "carbon" ? (
          <>
            <p>Total daily CO2 emissions</p>
            <p>Total CO2 emissions year to date (over the past year)</p>
          </>
        ) : (
          <>
            <p>Total daily electricity usage</p>
            <p>Total electricity usage year to date</p>
          </>
        )}
      </div>
    </div>
  );
}