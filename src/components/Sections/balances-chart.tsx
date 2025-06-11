import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { formatLargeNumber } from '@/lib/utils';
import { Box, Text, Flex, Heading, Stack } from '@chakra-ui/react';

export function BalancesChart({ 
  circulation, 
  reserves, 
  over, 
  currency 
}: {
  circulation: number;
  reserves: number;
  over: number;
  currency: string;
}) {
  const data = [
    {
      name: 'Circulation',
      value: circulation,
    },
    {
      name: 'Reserves',
      cashFunds: reserves - over,
      cashBanks: over,
    }
  ];

  // Format for the tooltip
  const formatValue = (value: number) => `${currency}${value}`;

  // Custom tooltip with safety checks to avoid accessing undefined properties
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      if (payload[0].name === "value") {
        return (
          <Box bg="white" border="1px solid" borderColor="gray.200" p={3} shadow="sm" borderRadius="md">
            <Text fontSize="sm" fontWeight="medium">Circulation</Text>
            <Text fontSize="sm" color="blue.600">{formatLargeNumber(payload[0].value, currency)}</Text>
          </Box>
        );
      } else {
        // Safety check for the reserves data
        const cashFundsValue = payload[0]?.value || 0;
        const cashBanksValue = payload[1]?.value || 0;
        const totalReserves = cashFundsValue + cashBanksValue;

        return (
          <Box bg="white" border="1px solid" borderColor="gray.200" p={3} shadow="sm" borderRadius="md">
            <Text fontSize="sm" fontWeight="medium">Reserves</Text>
            <Text fontSize="sm" color="blue.600">{formatLargeNumber(totalReserves, currency)}</Text>
            <Text fontSize="xs" color="gray.500" mt={1}>Funds: {formatLargeNumber(cashFundsValue, currency)}</Text>
            <Text fontSize="xs" color="gray.500">Over collateral: {formatLargeNumber(cashBanksValue, currency)}</Text>
          </Box>
        );
      }
    }
    return null;
  };

  return (
    <Box bg="white" p={6} shadow="sm" borderRadius="md" border="1px solid" borderColor="gray.100">
      <Stack gap={5} mb={5}>
        <Heading size="xl" fontWeight="bold">Current Balances</Heading>
        <Text fontSize="sm" color="gray.400">
          Displays the current circulation of issued tokens and their corresponding reserves. 
          The bar also visualizes any excess reserve available for minting new tokens.
        </Text>
      </Stack>
      
      <Box height="280px">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 0, left: 0, bottom: 10 }}
            barCategoryGap="0%"
            barGap={0}
          >
            <XAxis dataKey="name" tickLine={false} axisLine={false} />
            <YAxis
              tickFormatter={(value) => `${formatLargeNumber(value)}`}
              domain={[0, reserves + over]}
              ticks={[0, circulation, reserves]}
              width={90}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />

            <Bar
              dataKey="value"
              stackId="aligned"
              fill='#2563eb'
              radius={[8, 8, 0, 0]}
              barSize={150}
            />
            <Bar
              dataKey="cashFunds"
              stackId="aligned"
              fill='#3b82f6'
              radius={[0, 0, 0, 0]}
              barSize={150}
            />
            <Bar
              dataKey="cashBanks"
              stackId="aligned"
              fill='#60a5fa'
              radius={[8, 8, 0, 0]}
              barSize={150}
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>

      <Flex justify="space-around" mt={4}>
        <Flex align="center">
          <Box w={3} h={3} borderRadius="full" bg="#2563eb" mr={1}></Box>
          <Text fontSize="xs">Issued Tokens</Text>
        </Flex>
        <Flex align="center">
          <Box w={3} h={3} borderRadius="full" bg="#3b82f6" mr={1}></Box>
          <Text fontSize="xs">Collateral Reserve</Text>
        </Flex>
        <Flex align="center">
          <Box w={3} h={3} borderRadius="full" bg="#60a5fa" mr={1}></Box>
          <Text fontSize="xs">Over Collateral</Text>
        </Flex>
      </Flex>
    </Box>
  );
}
