import DataTable from "./Datatable";

export default function SidePanel({poolData}) {
    return (
        <div className="basis-96 border-l p-1 bg-slate-100 shadow-xl">
          <div className="p-1 relative h-full">
          <h3>Pools</h3>
          <div className="border h-1/2 overflow-x-auto">
            <DataTable data={poolData}/>
          </div>
          </div>
        </div>
    )
}