export default function DataTable({data}) {

    return (
        <div>
            <table className="table-auto w-full">
            <thead className="sticky top-0 bg-white">
              <tr className="border-b text-left">
                <th className="p-1">Pool Name</th>
                <th className="p-1">IP address</th>
                <th className="p-1">CO2 Emission</th>
                {/* <th className="p-1">Sources</th> */}
              </tr>
            </thead>
            <tbody>
                {
                    data.map( (d,index) => (
                        <tr className="border-b last:border-0 bg-slate-100" key={index}>
                            <td className="p-2">{d.pool_name}</td>
                            <td className="p-2 whitespace-nowrap">{d.ip_address}</td>
                            <td className="p-2">{d.carbon_emissions_factors.kWh}</td>
                            {/* <td className="p-2">{d.sources}</td> */}
                        </tr>
                    ))
                }
            </tbody>
          </table>
        </div>
    )
}