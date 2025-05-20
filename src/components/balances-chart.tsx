
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface BalancesChartProps {
  circulation: number;
  reserves: number;
}

export function BalancesChart({ circulation, reserves }: BalancesChartProps) {
  const data = [
    {
      name: 'Circulation',
      value: circulation,
      fill: 'hsl(var(--chart-blue))'
    },
    {
      name: 'Reserves',
      value: reserves,
      fill: 'hsl(var(--chart-navy))',
      stack: 'a'
    },
    {
      name: 'Reserves',
      value: reserves * 0.8,
      fill: 'hsl(var(--chart-light-blue))',
      stack: 'a'
    },
  ];
  
  // Format for the tooltip
  const formatValue = (value: number) => `$${value.toFixed(1)}B`;
  
  // Custom tooltip
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card border p-3 shadow-sm rounded-md">
          <p className="text-sm font-medium">{payload[0].name}</p>
          <p className="text-sm text-primary">{formatValue(payload[0].value)}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="card-dashboard h-80">
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
      
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={data} margin={{ top: 30, right: 10, left: 0, bottom: 30 }} barGap={50}>
          <XAxis dataKey="name" />
          <YAxis domain={[0, 'dataMax + 10']} hide />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="value" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      
      <div className="flex justify-center gap-4 mt-2">
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
