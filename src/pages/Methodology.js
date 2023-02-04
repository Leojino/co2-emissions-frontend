import { useState } from "react";
import { Container, Typography } from "@mui/material";

function Methodology() {
  return (
    <>
      <Container maxWidth="md" className="pt-24 pb-16">
        <Typography variant="h3" sx={{ marginBottom: 2 }} className="text-red-600">
          Research Methodology
        </Typography>
        <Typography variant="subtitle1" sx={{ marginBottom: 2 }}>
          The York University Bitcoin CO<span className="align-sub text-xs">2</span> Emissions Project tracks the daily energy consumption and
          associated CO<span className="align-sub text-xs">2</span> emissions from bitcoin mining. Our computational method provides real-time data,
          updated daily, and estimates the geographical distribution of the Bitcoin network's hashrate with 99% coverage. Since 99% of mining
          currently takes place in known pools that are fully accounted for by our methodology, we do not undertake excessive extrapolation to infer
          the CO<span className="align-sub text-xs">2</span> emissions from bitcoin mining. Our objective data is inferred from mining activity and
          does not rely on self-reported information. We generate reliable disaggregated data on where the mining activity is taking place and the
          amount of electricity that is used in each location. The prevailing CO<span className="align-sub text-xs">2</span> emissions factors for
          electricity generation are applied at each location to infer the associated CO<span className="align-sub text-xs">2</span> emissions.
        </Typography>
        <Typography variant="subtitle1" sx={{ marginBottom: 2 }}>
          We first estimate each pool's hashrate based on the number of blocks it has found during the 720-block period preceding the last block found
          on each day by using APIs provided by BTC.com. The chosen length of 720 blocks (approximately 5 days) helps to smooth out fluctuations in
          the estimate that can be inaccurate over short time periods due to luck. An advantage of this approach is that it doesn't rely on the
          hashrates reported by pool operators.
        </Typography>
        <Typography variant="subtitle1" sx={{ marginBottom: 2 }}>
          We conservatively estimate the electricity usage for each pool at a given point in time by applying the average efficiency of the three most
          recent Bitmain Antminer mining machines. While there are numerous brands of bitcoin mining rigs available on the market, the Antminer
          machines are on the technological frontier in terms of their power and energy efficiency. Miners with equipment that is not near the
          technological frontier will find it difficult to generate profits, which will necessitate their eventual exit from the industry.
        </Typography>
        <Typography variant="subtitle1" sx={{ marginBottom: 2 }}>
          The second component of our strategy identifies the geographic regions from where the mining pools' electricity is drawn. Pools operate
          multiple point-of-connection servers in different regions to improve fault tolerance and to reduce the latency for connecting miners. The
          location of a pool's servers reveals its proprietary understanding of where the greatest demand for its service is located. Also, miners,
          who have fixed locations, will maximize the profitability of their mining by connecting to pool servers with the shortest latency. Server
          latency decreases a miner's overall effective hashrate since delayed submissions may be too late for the pool to utilize if others are
          already mining the next block. Because latency is typically increasing in a miner's distance from the server,{" "}
          <span className="underline">
            we approximate the geographic boundary from where the electricity is drawn by the smallest administrative region around a server for which
            there are reliable reports of the fuel mix used in electricity generation
          </span>
          .
        </Typography>
        <Typography variant="subtitle1" sx={{ marginBottom: 2 }}>
          <span className="underline">
            For each pool, the locations of its stratum servers are approximated by using DNS lookup from different locations around the globe
          </span>
          . The pools' stratum server IP addresses are publicly available since they are provided by the pools to enable the miners to connect to
          them. Historical information about pool servers(predating the commencement of this project) was obtained from
          https://chainbulletin.com/bitcoin-mining-map. 
          <span className="underline">We assume that each of a pool's servers contributes equally to its workload</span>, permitting us to
          infer the electricity usage associated with each server. We then estimate the CO<span className="align-sub text-xs">2</span> emissions
          associated with each server by applying the corresponding CO<span className="align-sub text-xs">2</span> emissions factor for electricity
          generation to its electricity usage.
        </Typography>
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          Special Cases
        </Typography>
        <Typography variant="subtitle1" sx={{ marginBottom: 2 }}>
          There are two special cases that do not permit us to locate the mining activity on our map. When (i) the miner(s) of a block is reported as
          `unknown` (currently about 1% of all blocks) and (ii) the pool uses the Cloudflare network, which masks its servers' locations.
        </Typography>
        <Typography variant="subtitle1" sx={{ marginBottom: 2 }}>
          In the case of (i), we infer the electricity usage of all unknown miners as above but since their location is unknown, we approximate their
          CO<span className="align-sub text-xs">2</span> emissions by applying the world CO<span className="align-sub text-xs">2</span> emissions
          factor for electricity generation. For (ii), we infer the electricity usage of all miners using the Cloudflare network as above but since
          their location is unknown, we approximate their CO<span className="align-sub text-xs">2</span> emissions by applying an average CO
          <span className="align-sub text-xs">2</span> emissions factor for all Cloudflare data center locations.
        </Typography>
        {/* Calculations section */}
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          Calculations
        </Typography>
        <Typography variant="subtitle1" sx={{ marginBottom: 2 }}>
          Hashrate of pool p measured in exahashes per second:
        </Typography>
        <ul className="list-disc">
          <Typography component="li" variant="subtitle1" sx={{ marginBottom: 2, marginLeft: 5 }}>
            <span className="font-bold">
              Pool_hashrate<span className="align-sub">p</span>
            </span>{" "}
            = (<span className="font-bold">Blocks<span className="align-sub">p</span></span>/720) * (<span className="font-bold">difficulty</span> * 2^32)/(600 * 10^18) EH/s
          </Typography>
        </ul>
        <Typography variant="subtitle1" sx={{ marginBottom: 2, marginLeft: 5 }}>
          <span className="font-bold">Blocks<span className="align-sub">p</span></span> is the number of blocks found by pool p over past 720 block period; <span className="font-bold">difficulty</span> is the weighted average network difficulty over the
          720 block period, where each level of difficulty is weighted by the number of blocks during which it prevailed
        </Typography>
        <Typography variant="subtitle1" sx={{ marginBottom: 2 }}>
          Daily electricity usage of pool p measured in gigawatt-hours:
        </Typography>
        <ul className="list-disc">
          <Typography component="li" variant="subtitle1" sx={{ marginBottom: 2, marginLeft: 5 }}>
            <span className="font-bold">Pool_Electricity <span className="align-sub">p</span></span> = 24 * <span className="font-bold">Pool_hashrate<span className="align-sub">p</span></span> * efficiency GWh
          </Typography>
        </ul>
        <Typography variant="subtitle1" sx={{ marginBottom: 2, marginLeft: 5 }}>
          <span className="font-bold">efficiency</span> is the average efficiency of mining equipment (J/GH)
        </Typography>
        <Typography variant="subtitle1" sx={{ marginBottom: 2 }}>
          Daily CO<span className="align-sub text-xs">2</span> emissions of pool p in region r measured in tonnes of CO
          <span className="align-sub text-xs">2</span> equivalent per day:
        </Typography>
        <ul className="list-disc">
          <Typography component="li" variant="subtitle1" sx={{ marginBottom: 2, marginLeft: 5 }}>
          <span className="font-bold">CO<span className="align-sub text-xs">2</span>_Emissions<span className="align-sub text-xs">p,r</span></span> = 10^3 * <span className="font-bold">Pool_Electricity<span className="align-sub text-xs">p</span> /n<span className="align-sub text-xs">p</span> * <span className="font-bold">emissions_factor<span className="align-sub">r</span></span></span> tCO
            <span className="align-sub text-xs">2</span>e
          </Typography>
        </ul>
        <Typography variant="subtitle1" sx={{ marginBottom: 2, marginLeft: 5 }}>
          <span className="font-bold">n<span className="align-sub">p</span></span> is the number of servers for pool p; <span className="font-bold">emissions_factor<span className="align-sub">r</span></span> is the CO<span className="align-sub text-xs">2</span> emissions factor for region
          r (kgCO<span className="align-sub text-xs">2</span>e/kWh).
        </Typography>
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          Emissions factors
        </Typography>
        <Typography variant="subtitle1" sx={{ marginBottom: 2 }}>
          The CO<span className="align-sub text-xs">2</span> emissions factors for electricity generation are compiled from www.carbonfootprint.com,
          www.iges.or.jp and the International Energy Agency.
        </Typography>
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          Map features
        </Typography>
        <Typography variant="subtitle1" sx={{ marginBottom: 2 }}>
          Our map displays the locations and intensity of the daily electricity consumption (GWh) and daily CO
          <span className="align-sub text-xs">2</span> emissions (tCO<span className="align-sub text-xs">2</span>e) from bitcoin mining by using the
          appropriate toggle at the top right. The markers reveal the locations of the servers and their corresponding pool. Aggregates for the
          previous week, month and year are available from the dropdown menu at the top left. Total electricity usage and CO
          <span className="align-sub text-xs">2</span> emissions are displayed at the bottom left, which include the estimates for the Unknown Pool
          and Cloudflare cases. Totals for the Unknown Pool and Cloudflare cases are displayed at the bottom right. Each total aggregates the actual
          historical data (with January 1, 2021 as the earliest date) and do not impute a measure by assuming continuous power usage at the current
          rate.
        </Typography>
      </Container>
    </>
  );
}

export default Methodology;
