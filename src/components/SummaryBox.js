import Card from '@mui/material/Card';

export default function Summary({ current, total }) {

  // console.log(total);

  const formatDecimal = value => {
    if(!value) return "---";

    return value.toFixed(3)
  }

  return (
    <div className="p-2 mb-5">
      <div className='font-semibold'>Summary</div>
      <div className="flex justify-start">
      <Card className="mx-2 p-2 m-auto" elevation={8}>
        {/* Perhaps 1 and 2 are visible when CO2 emissions are toggled on the map 
        and 3 and 4 are visible when electricity usage is toggled on the map. */}
        {current == "carbon" ? (
          <div>
            <span className="font-semibold text-stone-600">Total CO<sub>2</sub> Emissions (tCO2e)</span>: 
            <span className='mx-3 text-base text-orange-700'>{formatDecimal(total.CO2_emissions)}</span>
            {/* <p>Total CO2 emissions year to date (over the past year)</p> */}
          </div>
        ) : (
          <>
          <span className='font-semibold text-stone-600'>Total Electricity Usage (GWh)</span>: 
          <span className='mx-3 text-base text-orange-700'>{formatDecimal(total.electricity_consumption_per_region)}</span>
            {/* <p>Total electricity usage year to date</p> */}
          </>
        )}
      </Card>
      <Card className="mx-2 p-2 m-auto" elevation={8}>
        <span className="font-semibold text-stone-600">Unknown Pool:</span>
        <span className='mx-3 text-base text-orange-700'></span>
      </Card>
      <Card className="mx-2 p-2 m-auto" elevation={8}>
        <span className="font-semibold text-stone-600">Estimated Cloudflare Server Emissions:</span>
        <span className='mx-3 text-base text-orange-700'></span>
      </Card>
      </div>
    </div>
  );
}
