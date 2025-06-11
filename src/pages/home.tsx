import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  Grid,
  VStack,
  HStack,
  Badge,
  Image,
  Link as ChakraLink,
  Spinner,
  Center,
} from '@chakra-ui/react';
import { Link } from 'react-router';
import { ArrowRight, Shield, Clock, CheckCircle, TrendingUp } from 'lucide-react';
import { formatLargeNumber } from '@/lib/utils';

// Define types for better TypeScript support
interface HistoricalData {
  date: string;
  reserves: number;
}

interface Client {
  companyName: string;
  type: string;
  logo: string;
  heartbeat: string;
  historicalData: HistoricalData[];
}

const Home = () => {
  const [loaded, setLoaded] = useState(false);
  const [clients, setClients] = useState<Client[]>([]);

  const loadData = async () => {
    const list = ['tokeniza', 'scenium'];

    const fetchedClients: Client[] = [];
    for (const item of list) {
      const response = await fetch(`/data/${item}.json`);
      const data = await response.json();
      const responseChart = await fetch(`/data/${item}-chart.json`);
      const dataChart = await responseChart.json();
      data.historicalData = dataChart.historical;
      fetchedClients.push(data);
    }
    setClients(fetchedClients);
    setLoaded(true);
  };

  useEffect(() => {
    loadData();
    document.title = 'Proof of reserves';
  }, []);

  if (!loaded) {
    return (
      <Center h="100vh">
        <Spinner size="xl" />
      </Center>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <Box bgGradient="linear(to-br, blue.50, indigo.100)" py={20}>
        <Container maxW="7xl" textAlign="center">
          <Heading size="3xl" mb={6} bgGradient="linear(to-r, blue.400, indigo.500)" bgClip="text" fontWeight="bold">
            Transparency and Trust for the Web3 Ecosystem
          </Heading>
          <Text fontSize="xl" color="fg.muted" mb={8} maxW="3xl" mx="auto">
            Verify the proof of reserve for major tokenized assets in real-time.
          </Text>
          <Box maxW="4xl" mx="auto" textAlign="left" rounded="lg" p={8} backdropFilter="blur(10px)">
            <Text fontSize="lg" lineHeight="relaxed">
              Fact Finance acts as a data infrastructure that ensures the traceability of backing, connecting smart
              contracts to verifiable information from custodians, financial institutions, and independent audits. Our
              platform offers a single point of transparency and independent verification for issuers, regulators, and
              investors.
            </Text>
          </Box>
        </Container>
      </Box>

      {/* Client Proof of Reserve Section */}
      <Box as="section" py={16}>
        <Container maxW="7xl">
          <VStack gap={12} textAlign="center" mb={12}>
            <Heading size="xl">Our Clients: Real-Time Proof of Reserve</Heading>
            <Text fontSize="lg" co>
              "fg.mud" Continuous verification for leading tokenized assets
            </Text>
          </VStack>

          <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={6}>
            {clients.map((client, index) => (
              <Box
                key={index}
                bg="bg.panel"
                borderWidth="1px"
                rounded="lg"
                overflow="hidden"
                shadow="md"
                _hover={{ shadow: 'lg' }}
                transition="all 0.2s"
              >
                <Box p={6}>
                  <Flex justify="space-between" align="flex-start" mb={4}>
                    <HStack gap={3}>
                      <Image src={client.logo} alt={client.companyName} boxSize="40px" objectFit="contain" />
                      <VStack align="flex-start" gap={1}>
                        <Heading size="md">{client.companyName}</Heading>
                        <Badge colorScheme="blue" size="sm">
                          {client.type}
                        </Badge>
                      </VStack>
                    </HStack>
                    <CheckCircle size={20} color="green" />
                  </Flex>

                  <VStack gap={4} align="stretch">
                    <Box>
                      <Text fontSize="sm">Total in Reserve</Text>
                      <Text fontSize="2xl" fontWeight="bold" color="green.500">
                        {formatLargeNumber(client.historicalData[client.historicalData.length - 1].reserves)}
                      </Text>
                    </Box>

                    <VStack gap={2} align="stretch">
                      <Flex justify="space-between">
                        <Text fontSize="sm">Last Update:</Text>
                        <Text fontSize="sm">{client.historicalData[client.historicalData.length - 1].date}</Text>
                      </Flex>
                      <Flex justify="space-between" pb={6}>
                        <Text fontSize="sm">Frequency:</Text>
                        <Text fontSize="sm">{client.heartbeat}</Text>
                      </Flex>
                    </VStack>

                    <ChakraLink as={Link} href={client.companyName.toLowerCase()}>
                      <Button variant="outline" size="md" w="full">
                        View Reserve Details <ArrowRight size={16} />
                      </Button>
                    </ChakraLink>
                  </VStack>
                </Box>
              </Box>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* How Verification Works */}
      <Box as="section" py={16}>
        <Container maxW="7xl">
          <VStack gap={12} textAlign="center" mb={12}>
            <Heading size="xl">Continuous and Auditable Validation</Heading>
          </VStack>

          <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap={6}>
            <Box rounded="lg" p={6} textAlign="center" shadow="sm">
              <Shield size={48} color="#3182CE" style={{ margin: '0 auto 16px' }} />
              <Heading size="md" mb={2}>
                Direct Connection
              </Heading>
              <Text fontSize="sm">
                Through connections with custodians, financial institutions, and independent audits, we validate that
                issued tokens remain backed by real assets.
              </Text>
            </Box>

            <Box rounded="lg" p={6} textAlign="center" shadow="sm">
              <Clock size={48} color="#38A169" style={{ margin: '0 auto 16px' }} />
              <Heading size="md" mb={2}>
                Updated Data
              </Heading>
              <Text fontSize="sm">Our data is updated, auditable, and synchronized with onchain operations.</Text>
            </Box>

            <Box rounded="lg" p={6} textAlign="center" shadow="sm">
              <CheckCircle size={48} color="#805AD5" style={{ margin: '0 auto 16px' }} />
              <Heading size="md" mb={2}>
                Institutional Trust
              </Heading>
              <Text fontSize="sm">
                This continuous verification layer strengthens institutional trust and reduces the risk of discrepancies
                between the asset and the token.
              </Text>
            </Box>

            <Box rounded="lg" p={6} textAlign="center" shadow="sm">
              <TrendingUp size={48} color="#DD6B20" style={{ margin: '0 auto 16px' }} />
              <Heading size="md" mb={2}>
                Advanced Features
              </Heading>
              <Text fontSize="sm">
                Configure issuance locks, inconsistency alerts, and automatic pauses, making backing transparency
                programmable.
              </Text>
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* Stablecoins Focus Section */}
      <Box as="section" py={16}>
        <Container maxW="7xl">
          <Box bgGradient="linear(to-r, blue.500, indigo.600)" rounded="lg" p={{ base: 8, md: 12 }}>
            <Box maxW="4xl">
              <Heading size="xl" mb={6}>
                Verified Backing for Stablecoins
              </Heading>
              <VStack gap={4} align="flex-start" color="blue.100">
                <Text>
                  In the case of stablecoins, Fact Finance offers a dynamic dashboard that brings together both ends of
                  the backing: on one side, a real-time connection with the custodian, providing updated reserve data;
                  on the other, continuous monitoring of the quantity of tokens issued.
                </Text>
                <Text>
                  This combination allows for clear, public, and independent verification of whether the stablecoin is
                  properly backed, with sufficient reserves to cover 100% of the issuance.
                </Text>
                <Text>
                  Furthermore, the dashboard displays the frequency of updates and flags any inconsistencies, offering
                  an additional layer of trust for issuers, regulators, and investors.
                </Text>
              </VStack>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box as="section" py={16}>
        <Container maxW="7xl" textAlign="center">
          <Heading size="xl" mb={4}>
            Strengthen Trust in Your Digital Asset
          </Heading>
          <Text fontSize="lg" mb={8}>
            Discover how Fact Finance can bring more transparency and security to your tokens.
          </Text>
          <HStack gap={4} justify="center" flexDir={{ base: 'column', sm: 'row' }}>
            <ChakraLink href="mailto:por@fact.finance">
              <Button size="lg" px={8} colorScheme="blue">
                Contact Us
              </Button>
            </ChakraLink>
            <ChakraLink href="https://docs.fact.finance/features/por/">
              <Button size="lg" variant="outline" px={8}>
                Learn More
              </Button>
            </ChakraLink>
          </HStack>
        </Container>
      </Box>
    </>
  );
};

export default Home;
