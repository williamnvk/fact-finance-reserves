import { ThemeSwitch } from './theme-switch';
import { Link } from 'react-router';
import { 
  Avatar, 
  Card, 
  Box, 
  Flex, 
  Text, 
  Heading, 
  Badge, 
  Stack
} from '@chakra-ui/react';

export function ReportHeader({
  currency,
  companyName,
  dateAs,
  heartbeat,
  dappLink,
  threshold,
  circulation,
  reserves,
  ratio,
  description,
  logo,
  contract,
  contractLink,
}: {
  currency: string;
  companyName: string;
  dateAs: string;
  heartbeat: string;
  dappLink: string;
  threshold: string;
  circulation: string;
  reserves: string;
  ratio: string;
  description: string;
  logo: string;
  contract: string;
  contractLink: string;
}) {
  return (
    <Stack gap={6}>
      <Box position="absolute" top={4} right={4}>
        <ThemeSwitch />
      </Box>
      
      <Flex align="center" justify="center" gap={2} mb={4}>
        <Box fontSize="xl" position="absolute" top={4} left={4}>
          <Link to="/">
            <Text as="span" color="fg.muted">Fact</Text>
            <Text as="span" color="gray.300" mx={1}>&#10022;</Text>
            <Text as="span" color="fg.muted">Finance</Text>
          </Link>
        </Box>

        <Heading size="2xl" textAlign="center">
          Proof of Reserves Report
        </Heading>
      </Flex>

      <Card.Root p={6} borderWidth={0}>
        <Flex 
          direction={{ base: "column", md: "row" }} 
          align={{ base: "center", md: "start" }} 
          justify="between" 
          gap={4}
        >
          <Flex 
            direction={{ base: "column", md: "row" }} 
            align={{ base: "center", md: "start" }} 
            gap={4} 
            mb={{ base: 4, md: 0 }}
          >
            <Avatar.Root size="2xl" bg="gray.200" p={4}>
              <Avatar.Image src={logo} alt={companyName} />
              <Avatar.Fallback fontSize="xl" fontWeight="bold">
                {companyName.substring(0, 2).toUpperCase()}
              </Avatar.Fallback>
            </Avatar.Root>

            <Stack align={{ base: "center", md: "start" }} textAlign={{ base: "center", md: "left" }}>
              <Box mt={4}>
                <Flex align="center" gap={2}>
                  <Text fontSize="xl" fontWeight="medium" color="gray.700">
                    {companyName}
                  </Text>
                  <Badge 
                    bg="green.50" 
                    color="green.600" 
                    fontSize="xs" 
                    fontWeight="medium"
                    px={2} 
                    py={1}
                    borderRadius="md"
                  >
                    Verified
                  </Badge>
                </Flex>
                
                <Stack gap={2} mt={2}>
                  <Text fontSize="sm" color="gray.400">
                    {description}
                  </Text>
                  {dappLink && (
                    <Text fontSize="xs" color="gray.400">
                      dApp: <a href={dappLink} target="_blank" style={{ textDecoration: "underline" }}>
                        {dappLink}
                      </a>
                    </Text>
                  )}
                  {contract && (
                    <Text fontSize="xs" color="gray.400">
                      Contract: <a href={contractLink} target="_blank" style={{ textDecoration: "underline" }}>
                        {contract} &lt;/&gt;
                      </a>
                    </Text>
                  )}
                </Stack>
              </Box>
            </Stack>
          </Flex>

          <Stack align="end" mt={8} gap={4}>
            <Flex gap={10} justify="center" w="full">
              <Stack align="center">
                <Text fontSize="sm" color="fg.muted">
                  Issued Tokens
                </Text>
                <Heading size="lg" color="blue.600">
                  <Text as="span" fontSize="xs">{currency}&nbsp;</Text>
                  {circulation}
                </Heading>
              </Stack>
              
              <Stack align="center">
                <Text fontSize="sm" color="fg.muted">
                  Reserves
                </Text>
                <Heading size="lg" color="blue.500">
                  <Text as="span" fontSize="xs">{currency}&nbsp;</Text>
                  {reserves}
                </Heading>
              </Stack>
              
              <Stack align="center">
                <Text fontSize="sm" color="fg.muted">
                  Collateral Ratio
                </Text>
                <Heading size="lg" color="green.500">
                  {ratio}
                </Heading>
              </Stack>
            </Flex>

            <Text fontSize="xs" color="gray.400" mt={4}>
              {dateAs}
            </Text>
            
            <Flex fontSize="xs" color="gray.400" pb={4} gap={4}>
              {heartbeat && (
                <Text>
                  Heartbeat<Text as="sup">2</Text>: <Text as="b">{heartbeat}</Text>
                </Text>
              )}
              {threshold && (
                <Text>
                  Deviation Threshold<Text as="sup">3</Text>: <Text as="b">{threshold}</Text>
                </Text>
              )}
            </Flex>
          </Stack>
        </Flex>
      </Card.Root>
    </Stack>
  );
}
