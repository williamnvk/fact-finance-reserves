import { Key } from "react";
import { formatLargeNumber } from "@/lib/utils";
import { Box, Text, Heading, Grid, Flex, Progress, Stack } from "@chakra-ui/react";

export function ReservesBreakdown({ 
  reserves, 
  issued, 
  balance, 
  assetDistribution, 
  currency, 
  companyName 
}: {
  reserves: number;
  issued: number;
  balance: number;
  assetDistribution: Array<{ type: string; name: string; value: number }>;
  currency: string;
  companyName: string;
}) {
  const getAssetColor = (type: string) => {
    switch (type) {
      case 'cash': return '#10b981';
      case 'bank': return '#3b82f6';
      case 'securities': return '#8b5cf6';
      default: return '#6b7280';
    }
  };

  return (
    <Box mt={6} p={6} shadow="sm" borderRadius="md" bg="white" border="1px solid" borderColor="gray.100">
      <Heading size="lg" mb={4}>Monthly Reserves Report</Heading>

      <Text color="gray.600" mb={6}>
        This report<Text as="sup">1</Text> is prepared by Fact Finance to promote transparency in {companyName}'s 
        asset reserves. It includes selected financial information based on data available at the time of publication. 
        For more details, consult the complete reserve report available for download.
      </Text>

      <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={4} mb={8} my={16}>
        <Box>
          <Text fontSize="sm" color="gray.500" mb={2}>
            Collateral Reserves<Text as="sup">4</Text>
          </Text>
          <Text fontSize="2xl" fontWeight="bold">
            <Text as="span" fontSize="xs">{currency}&nbsp;</Text>
            {formatLargeNumber(reserves)}
          </Text>
        </Box>
        <Box>
          <Text fontSize="sm" color="gray.500" mb={2}>
            Tokens Issued<Text as="sup">5</Text>
          </Text>
          <Text fontSize="2xl" fontWeight="bold">
            <Text as="span" fontSize="xs">{currency}&nbsp;</Text>
            {formatLargeNumber(issued)}
          </Text>
        </Box>
        <Box>
          <Text fontSize="sm" color="gray.500" mb={2}>
            Available Balance<Text as="sup">6</Text>
          </Text>
          <Text fontSize="2xl" fontWeight="bold">
            <Text as="span" fontSize="xs">{currency}&nbsp;</Text>
            {formatLargeNumber(balance)}
          </Text>
        </Box>
      </Grid>

      <Box h={2} w="full" borderRadius="full" overflow="hidden" mb={6} bg="gray.100">
        <Flex h="full">
          {assetDistribution.map((asset) => (
            <Box
              key={asset.name}
              bg={getAssetColor(asset.type)}
              w={`${(asset.value / reserves) * 100}%`}
            />
          ))}
        </Flex>
      </Box>

      <Flex 
        direction={{ base: "column", md: "row" }} 
        gap={4} 
        fontSize="xs" 
        w="full"
        flexWrap="wrap"
      >
        {assetDistribution.map((asset) => (
          <Flex 
            key={asset.name}
            align="center"
            gap={2}
          >
            <Box 
              h={3} 
              w={3} 
              bg={getAssetColor(asset.type)}
              borderRadius="sm"
            />
                         <Stack gap={0}>
               <Text fontWeight="medium">{asset.value.toLocaleString()}</Text>
               <Text color="gray.500">{asset.name}</Text>
             </Stack>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
}
