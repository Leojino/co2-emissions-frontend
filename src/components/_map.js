import { scaleQuantize } from "@visx/scale";
import { Mercator, Graticule } from "@visx/geo";
import { Text } from "@visx/text";
import * as topojson from "topojson-client";
import topology from "../world-topo.json";

const world = topojson.feature(topology, topology.objects.units);
const color = scaleQuantize({
  domain: [
    Math.min(...world.features.map((f) => f.geometry.coordinates.length)),
    Math.max(...world.features.map((f) => f.geometry.coordinates.length)),
  ],
  range: ["#ffb01d", "#ffa020", "#ff9221", "#ff8424", "#ff7425", "#fc5e2f", "#f94b3a", "#f63a48"],
});
export default function Map() {
  const width = 696;
  const height = 674;
  const centerX = width / 2;
  const centerY = height / 2;
  const scale = 200;

  return (
    <svg width={width} height={height}>
      <rect x={0} y={0} width={width} height={height} fill="#f9f7e8" rx={14} />
      <Mercator data={world.features} scale={scale} translate={[centerX, centerY + 50]}>
        {(mercator) => (
          <g>
            <Graticule graticule={(g) => mercator.path(g) || ""} stroke="rgba(33,33,33,0.05)" />
            {mercator.features.map(({ feature, path }, i) => (
              <>
                <path
                  key={`map-feature-${i}`}
                  d={path || ""}
                  fill={color(feature.geometry.coordinates.length)}
                  stroke="#f9f7e8"
                  strokeWidth={0.5}
                  onClick={(e) => {
                    if (e) alert(`Clicked: ${feature.properties.name} (${feature.id})`);
                  }}
                />
                {/* <Text verticalAnchor="start">{feature.properties.name}</Text> */}
              </>
            ))}
          </g>
        )}
      </Mercator>
    </svg>
  );
}
