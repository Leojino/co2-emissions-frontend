import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

export default function Summary({ current, total }) {
  // console.log(total);

  const formatDecimal = (value) => {
    if (!value) return "---";

    return value.toFixed(3);
  };

  return (
    <Grid item xs={12}>
      <div className="p-2 pb-5 bg-neutral-200">
        <h3 className="text-lg text-xl mx-4 mt-2 text-gray-700">Summary</h3>
        <div className="flex justify-between">
          <div>

          <Card className="mx-2 p-2 m-auto" elevation={1}>
            {/* Perhaps 1 and 2 are visible when CO2 emissions are toggled on the map 
            and 3 and 4 are visible when electricity usage is toggled on the map. */}
            {current == "carbon" ? (
              <>
                <span className="font-semibold text-stone-600">Total CO<sub>2</sub> Emissions (tCO<span className="align-sub text-xs">2</span>e)</span>
                :<span className="mx-3 text-orange-700">{formatDecimal(total.CO2_emissions)}</span>
                {/* <p>Total CO2 emissions year to date (over the past year)</p> */}
              </>
            ) : (
              <>
                <span className="font-semibold text-stone-600">Total Electricity Usage (GWh)</span>:
                <span className="mx-3 text-orange-700">{formatDecimal(total.electricity_consumption_per_region)}</span>
                {/* <p>Total electricity usage year to date</p> */}
              </>
            )}
          </Card>
            </div>
            <div className="flex">
          <Card className="mx-2 p-2 m-auto" elevation={1}>
          {current == "carbon" ? (
              <>
                <span className="font-semibold text-stone-600">Total Cloudflare Emissions (tCO<span className="align-sub text-xs">2</span>e)</span>
                :<span className="mx-3 text-orange-700">{formatDecimal(total.CO2_emissions)}</span>
                {/* <p>Total CO2 emissions year to date (over the past year)</p> */}
              </>
            ) : (
              <>
                <span className="font-semibold text-stone-600">Total Cloudflare Electricity Usage (GWh)</span>:
                <span className="mx-3 text-orange-700">{formatDecimal(total.electricity_consumption_per_region)}</span>
                {/* <p>Total electricity usage year to date</p> */}
              </>
            )}
          </Card>
          <Card className="mx-2 p-2 m-auto" elevation={1}>
          {current == "carbon" ? (
              <>
                <span className="font-semibold text-stone-600">Total Unknown Pool Emissions (tCO<span className="align-sub text-xs">2</span>e)</span>
                :<span className="mx-3 text-orange-700">{formatDecimal(total.CO2_emissions)}</span>
                {/* <p>Total CO2 emissions year to date (over the past year)</p> */}
              </>
            ) : (
              <>
                <span className="font-semibold text-stone-600">Total Unknown Pool Electricity Usage (GWh)</span>:
                <span className="mx-3 text-orange-700">{formatDecimal(total.electricity_consumption_per_region)}</span>
                {/* <p>Total electricity usage year to date</p> */}
              </>
            )}
          </Card>
            </div>
        </div>
      </div>
    </Grid>
  );
}
