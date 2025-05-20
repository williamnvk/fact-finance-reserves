
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface BalancesChartProps {
  circulation: number;
  reserves: number;
}

export function BalancesChart({ circulation, reserves }: BalancesChartProps) {
  // Calculate the split for reserves (96% as cash funds, 4% as cash in banks)
  const cashFunds = reserves * 0.96;
  const cashBanks = reserves * 0.04;
  
  const data = [
    {
      name: 'Circulation',
      value: circulation,
      fill: 'hsl(var(--chart-blue))'
    },
    {
      name: 'Reserves',
      cashFunds: cashFunds,
      cashBanks: cashBanks,
      fill: 'hsl(var(--chart-navy))'
    }
  ];
  
  // Format for the tooltip
  const formatValue = (value: number) => `$${value.toFixed(1)}B`;
  
  // Custom tooltip with safety checks to avoid accessing undefined properties
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      if (payload[0].name === "Circulation") {
        return (
          <div className="bg-card border p-3 shadow-sm rounded-md">
            <p className="text-sm font-medium">Circulation</p>
            <p className="text-sm text-primary">{formatValue(payload[0].value)}</p>
          </div>
        );
      } else {
        // Safety check for the reserves data
        const cashFundsValue = payload[0]?.value || 0;
        const cashBanksValue = payload[1]?.value || 0;
        const totalReserves = cashFundsValue + cashBanksValue;
        
        return (
          <div className="bg-card border p-3 shadow-sm rounded-md">
            <p className="text-sm font-medium">Reserves</p>
            <p className="text-sm text-primary">{formatValue(totalReserves)}</p>
            <p className="text-xs text-muted-foreground mt-1">Cash Funds: {formatValue(cashFundsValue)}</p>
            <p className="text-xs text-muted-foreground">Cash in Banks: {formatValue(cashBanksValue)}</p>
          </div>
        );
      }
    }
    return null;
  };

  return (
    <div className="chart-card">
      <div className="flex flex-col space-y-1">
        <div className="flex justify-between">
          <p className="subtitle">Em circulação</p>
          <p className="subtitle">Reserves</p>
        </div>
        <div className="flex justify-between">
          <h3 className="value-large text-[hsl(var(--chart-blue))]">${circulation.toFixed(1)}B</h3>
          <h3 className="value-large text-[hsl(var(--chart-navy))]">${reserves.toFixed(1)}B</h3>
        </div>
      </div>
      
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={data} margin={{ top: 30, right: 10, left: 0, bottom: 30 }} barGap={50}>
            <XAxis dataKey="name" />
            <YAxis domain={[0, 'dataMax + 10']} hide />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="value" radius={[8, 8, 0, 0]} />
            <Bar dataKey="cashFunds" stackId="reserves" radius={[8, 8, 0, 0]} fill="hsl(var(--chart-navy))" />
            <Bar dataKey="cashBanks" stackId="reserves" radius={[8, 8, 0, 0]} fill="hsl(var(--chart-light-blue))" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="chart-legend">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full legend-circulation mr-1"></div>
          <span className="text-xs">USDC em circulação</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full legend-reserves mr-1"></div>
          <span className="text-xs">Cash em bancos de reserva</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full legend-cash mr-1"></div>
          <span className="text-xs">Cash Reserve Fund</span>
        </div>
      </div>
    </div>
  );
}
