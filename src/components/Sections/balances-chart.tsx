
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { formatLargeNumber } from '@/lib/utils';


export function BalancesChart({  circulation, reserves, over, currency   }) {

  const data = [
    {
      name: 'Circulation',
      value: circulation,

    },
    {
      name: 'Reserves',
      cashFunds: reserves-over,
      cashBanks: over,

    }
  ];

  // Format for the tooltip
  const formatValue = (value: number) =>  `${currency}${value}`;

  // Custom tooltip with safety checks to avoid accessing undefined properties
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      if (payload[0].name === "value") {
        return (
          <div className="bg-card border p-3 shadow-sm rounded-md">
            <p className="text-sm font-medium">Circulation</p>
            <p className="text-sm text-primary">{formatLargeNumber(payload[0].value, currency)}</p>
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
            <p className="text-sm text-primary">{formatLargeNumber(totalReserves, currency)}</p>
            <p className="text-xs text-muted-foreground mt-1">Funds: {formatLargeNumber(cashFundsValue, currency)}</p>
            <p className="text-xs text-muted-foreground">Over collateral: {formatLargeNumber(cashBanksValue, currency)}</p>
          </div>
        );
      }
    }
    return null;
  };

  return (
    <div className="chart-card   p-6 shadow-sm rounded-md">
      <div className='flex flex-col mb-5'>
        <span className="text-2xl font-bold ">Current Balances</span>
        <span className='text-sm text-gray-400 dark:text-gray-500'>Displays the current circulation of issued tokens and their corresponding reserves. The bar also visualizes any excess reserve available for minting new tokens.</span>
      </div>
      <div className="flex-none ">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart
            data={data}
            margin={{ top: 10, right: 0, left: 0, bottom: 10 }}
            barCategoryGap="0%"
            barGap={0}
          >
            <XAxis dataKey="name" tickLine={false} axisLine={false} />
            <YAxis
              tickFormatter={(value) => `${formatLargeNumber(value)}`}
              domain={[0, reserves + over ]}
              ticks={[0, circulation, reserves]}
              width={90}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />

            <Bar
              dataKey="value"
              stackId="aligned"
              fill='hsl(var(--chart-navy))'
              radius={[8, 8, 0, 0]}
              barSize={150}

            />
            <Bar
              dataKey="cashFunds"
              stackId="aligned"
              fill='hsl(var(--chart-blue))'
              radius={[0, 0, 0, 0]}
              barSize={150}
            />
            <Bar
              dataKey="cashBanks"
              stackId="aligned"
              fill='hsl(var(--chart-light-blue))'
              radius={[8, 8, 0, 0]}
              barSize={150}

            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-legend">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full legend-reserves mr-1"></div>
          <span className="text-xs">Issued Tokens</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full legend-circulation mr-1"></div>
          <span className="text-xs">Collateral Reserve</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full legend-cash mr-1"></div>
          <span className="text-xs">Over Collateral</span>
        </div>
      </div>
    </div>
  );
}
