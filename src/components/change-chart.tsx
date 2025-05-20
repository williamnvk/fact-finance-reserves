
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface ChangeChartProps {
  emitido: number;
  resgatado: number;
  change: number;
  historicalData: Array<{ hour: number; reserves: number; circulation: number }>;
}

export function ChangeChart({ emitido, resgatado, change, historicalData }: ChangeChartProps) {
  // Format for the tooltip
  const formatValue = (value: number) => `$${value.toFixed(1)}B`;
  
  // Custom tooltip
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card border p-3 shadow-sm rounded-md">
          <p className="text-sm font-medium">Hour {payload[0].payload.hour}</p>
          <p className="text-sm text-blue-500">Reserva: {payload[0].value}</p>
          <p className="text-sm text-cyan-400">Circulação: {payload[1].value}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="card-dashboard h-80">
      <div>
        <h3 className="subtitle">Mudança de 30 dias</h3>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <div>
            <p className="subtitle">Emitido</p>
            <p className="value-medium">${emitido.toFixed(1)}B</p>
          </div>
          <div>
            <p className="subtitle">Resgatado</p>
            <p className="value-medium">${resgatado.toFixed(1)}B</p>
          </div>
        </div>
        <div className="mt-2">
          <span className="badge badge-primary">+{change.toFixed(2)} Mudança na circulação</span>
        </div>
      </div>
      
      <div className="mt-6">
        <h3 className="subtitle">Histórico de Reservas</h3>
        <div className="flex justify-center gap-4 mt-1 text-xs">
          <button className="underline">Day</button>
          <button>Month</button>
          <button>Year</button>
        </div>
      </div>
      
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={historicalData} margin={{ top: 20, right: 10, left: 10, bottom: 10 }}>
          <XAxis dataKey="hour" />
          <YAxis domain={['dataMin - 100', 'dataMax + 100']} hide />
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
            stroke="hsl(var(--chart-blue)/50)" 
            dot={false} 
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
      
      <div className="flex justify-center gap-4 mt-2">
        <div className="flex items-center">
          <div className="h-0.5 w-4 bg-primary mr-1"></div>
          <span className="text-xs">Reserva</span>
        </div>
        <div className="flex items-center">
          <div className="h-0.5 w-4 bg-[hsl(var(--chart-blue)/50)] mr-1"></div>
          <span className="text-xs">Circulação</span>
        </div>
      </div>
    </div>
  );
}
