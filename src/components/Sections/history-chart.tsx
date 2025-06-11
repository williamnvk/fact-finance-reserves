
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { useState } from "react";
import { formatLargeNumber } from "@/lib/utils";

export function HistoryChart({ heartbeat, historicalData, historicalData1, periodTotalTransfer,periodTotalTransfer1, periodTransactions, periodTransactions1, avgcolateral, avgcolateral1, currency = "$" }) {
  // Format for the tooltip
  //  const formatValue = (value: number) => `${value}`;

  // Custom tooltip
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card border p-3 shadow-sm rounded-md">
          <p className="text-sm font-medium">Date {payload[0].payload.date}</p>
          <p className="text-sm text-blue-500">Collateral: {formatLargeNumber(payload[0].value, currency)}</p>
          <p className="text-sm text-cyan-500">Issued: {formatLargeNumber(payload[1].value, currency)}</p>
         {payload[0].payload?.transactions>0?(<>
          <p className="text-sm text-cyan-600">Transactions: {payload[0].payload.transactions}</p>
          <p className="text-sm text-cyan-600">Transfer: {formatLargeNumber(payload[0].payload.totalTransfer, currency)}</p>
          <p className="text-sm text-cyan-600">Burned: {formatLargeNumber(payload[0].payload.totalBurned, currency)}</p>
         </>):null}
          </div>
      );
    }
    return null;
  };

  let periods = heartbeat == '1 hour' ? ["Hour", "Day"] : ["Month", "Year"]
  const [selected, setSelected] = useState(periods[0])
  const [historicalDataChart, setHistoricalDataChart] = useState(historicalData1?.length? historicalData1: historicalData)
  const [averageIndex,setAverageIndex]=useState(historicalData1?.length? avgcolateral1: avgcolateral)
  const [totalIssued, setTotalIssued]=useState(historicalData1?.length? periodTotalTransfer1: periodTotalTransfer)
  const [totalTransactions, setTotalTransactions]=useState(historicalData1?.length? periodTransactions1: periodTransactions)

  const handlePeriod = () => {
    if ( selected === periods[0] ) {
      setSelected(periods[1])
      setHistoricalDataChart(historicalData)
      setAverageIndex(avgcolateral)
      setTotalIssued(periodTotalTransfer)
      setTotalTransactions(periodTransactions)
    } else {
      setHistoricalDataChart(historicalData1)
      setAverageIndex(avgcolateral1)
      setTotalIssued(periodTotalTransfer1)
      setTotalTransactions(periodTransactions1)

      setSelected(periods[0])
    } 
  }
  
  return (
    <div className=" p-6 shadow-sm rounded-md">
      <div>
        <div>
          <div className="flex w-full justify-between items-center mb-6">
            <div className='flex flex-col'>
              <span className="text-2xl font-bold ">Historical Reserve Coverage</span>
              <span className='text-sm text-gray-400 dark:text-gray-500 mr-4'>Track cumulative balances versus tokens issued over time. Use filters to explore data by a different period.</span>
            </div>
            {historicalData1?.length ?
            <div className="mb-5 inline-flex items-center rounded-full bg-muted p-1 text-xs shadow-inner">
              {periods.map((period) => (
                <button
                  key={period}
                  onClick={handlePeriod}
                  className={`px-4 py-1 rounded-full transition-colors ${selected === period
                    ? "bg-primary text-white"
                    : "text-muted-foreground hover:bg-accent"
                    }`}
                >
                  {period}
                </button>
              ))}
            </div>
            : null }
          </div>
        </div>
        <div className="gap-4 mt-2  flex justify-between items-center m-4 whitespace-nowrap">
          <div>
            <p className="subtitle">Issued</p>

            <p className="value-medium">
              <span className="text-xs">{currency}</span>
              {formatLargeNumber(totalIssued | 0)}</p>
          </div>
          <div>
            <p className="subtitle">N. Transactions</p>
            <p className="value-medium">{formatLargeNumber(totalTransactions | 0)}</p>
          </div>
          <div>
            <p className="subtitle">Average Col.</p>
            <p className="value-medium text-primary">{averageIndex}</p>
          </div>
        </div>
      </div>


      <div className="chart-container">
        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            data={historicalDataChart}
            margin={{ top: 0, right: 10, left: 10, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--secondary))" />

            <XAxis
              dataKey="Date"
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              domain={[`dataMin - ${Math.max(historicalDataChart[0].circulation,historicalDataChart[0].reserves)*2.5}`, `dataMax + ${Math.min(historicalDataChart[0].circulation,historicalDataChart[0].reserves)*1.5}`]}
              hide
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="reserves"
              stroke="hsl(var(--primary))"
              dot={false}
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="circulation"
              stroke="hsl(var(--chart-light-blue))"
              dot={false}
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-legend">
        <div className="flex items-center">
          <div className="h-0.5 w-4 bg-[hsl(var(--chart-light-blue))] mr-1"></div>
          <span className="text-xs">Issued Tokens</span>
        </div>
        <div className="flex items-center">
          <div className="h-0.5 w-4 bg-primary mr-1"></div>
          <span className="text-xs">Collateral Reserves</span>
        </div>
      </div>
    </div>
  );
}
