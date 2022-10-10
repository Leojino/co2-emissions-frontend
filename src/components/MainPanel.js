import { useState } from "react";

import MapFilter from "./MapFilter";
import Map from "./Map";
import Summary from "./SummaryBox";

export default function MainPanel() {
  const [activeType, setActiveType] = useState("carbon");

  const handleFilterChange = (e, type) => {
    setActiveType(type);
  };

  return (
    <div className="grow relative">
        <MapFilter current={activeType} onFilterChange={handleFilterChange}/>
        <Map/>
        <Summary current={activeType}/>
    </div>
  );
}
