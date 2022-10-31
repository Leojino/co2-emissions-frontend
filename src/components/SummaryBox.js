import Card from '@mui/material/Card';

export default function Summary({ current, total }) {

  // console.log(total);

  return (
    <div className="absolute z-10 bottom-2 left-4">
      <Card className="min-w-96 p-2 m-auto" elevation={8}>
        {/* Perhaps 1 and 2 are visible when CO2 emissions are toggled on the map 
        and 3 and 4 are visible when electricity usage is toggled on the map. */}
        {current == "carbon" ? (
          <>
            <p>Total co2 emissions (tCO2e): {total.CO2_emissions || "---"}</p>
            {/* <p>Total CO2 emissions year to date (over the past year)</p> */}
          </>
        ) : (
          <>
            <p>Total electricity usage (GWh): {total.electricity_consumption_per_region || "---"}</p>
            {/* <p>Total electricity usage year to date</p> */}
          </>
        )}
      </Card>
    </div>
  );
}
