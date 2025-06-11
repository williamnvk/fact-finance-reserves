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
  Spinner,
  Center,
  Card,
  Stat,
  Group,
  Separator,
} from '@chakra-ui/react';
import { Link } from 'react-router';
import {
  ArrowRight,
  Shield,
  Clock,
  CheckCircle,
  TrendingUp,
  BarChart3,
  FileCheck,
  Globe,
  Layers,
  Database,
  Sparkles,
} from 'lucide-react';
import { formatLargeNumber } from '@/lib/utils';
import { AdvancedFeaturesSection } from './_components/advanced-features-section';
import { CTA } from './_components/cta';
import { HomeHero } from './_components/home_hero';

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
    const list = ['tokeniza', 'scenium', 'avenia'];

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
    document.title = 'Fact Finance - Transparency and Trust for the Web3 Ecosystem';
  }, []);

  if (!loaded) {
    return (
      <Center>
        <VStack gap={6}>
          <Box position="relative">
            <Spinner size="xl" color="blue.500" />
            <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
              <Shield size={24} color="#3182CE" />
            </Box>
          </Box>
          <VStack gap={2}>
            <Text fontSize="lg" fontWeight="semibold" color="gray.700">
              Loading Audit Data
            </Text>
            <Text color="gray.500" fontSize="sm">
              Verifying proof of reserves...
            </Text>
          </VStack>
        </VStack>
      </Center>
    );
  }

  const totalReserves = clients.reduce(
    (acc, client) => acc + (client.historicalData[client.historicalData.length - 1]?.reserves || 0),
    0,
  );

  return (
    <>
      <Box
        id="hero"
        position="relative"
        w="100vw"
        h="100vh"
        bgImage="linear-gradient(35deg, {colors.brand.800}, transparent)"
        color="white"
        pos="fixed"
        top={0}
        left={0}
        right={0}
        bottom={0}
        zIndex={0}
      ></Box>
      {/* Floating Elements */}
      <Box position="absolute" top="20%" left="10%" opacity={0.1}>
        <Shield size={60} />
      </Box>
      <Box position="absolute" top="60%" right="15%" opacity={0.1}>
        <Database size={40} />
      </Box>
      <Box position="absolute" bottom="20%" left="20%" opacity={0.1}>
        <BarChart3 size={50} />
      </Box>

      <HomeHero totalReserves={totalReserves} clients={clients} />

      <Container maxW="7xl" py={32}>
        <VStack gap={12} w="full">
          <VStack gap={6} textAlign="center">
            <Badge size="lg" colorPalette="brand" px={4} py={2} rounded="full">
              <Sparkles size={16} style={{ marginRight: '8px' }} />
              Our Clients: Real-Time Proof of Reserve
            </Badge>
            <Heading fontSize="4xl" textAlign="center" maxW="xl">
              Continuous verification for{' '}
              <Text as="span" bgImage="linear-gradient(35deg, {colors.brand.500}, {colors.brand.400})" bgClip="text">
                leading tokenized assets
              </Text>
            </Heading>
            <Text fontSize="lg" textAlign="center" maxW="2xl">
              Independent and continuous verification of reserves for the biggest players in the tokenized asset market
            </Text>
          </VStack>

          <Grid templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }} gap={8} w="full">
            {clients.map((client, index) => {
              const latestData = client.historicalData[client.historicalData.length - 1];
              const reserveRatio = ((latestData.reserves / latestData.reserves) * 100).toFixed(1);

              return (
                <Card.Root
                  key={index}
                  overflow="hidden"
                  shadow="xl"
                  border="1px solid"
                  borderColor="gray.100"
                  _hover={{
                    shadow: '2xl',
                    transform: 'translateY(-4px)',
                    borderColor: 'blue.200',
                  }}
                  transition="all 0.3s"
                  bg="white"
                >
                  <Card.Header>
                    <Flex justify="space-between" align="flex-start">
                      <HStack gap={4}>
                        <Image
                          src={client.logo}
                          alt={client.companyName}
                          boxSize="60px"
                          objectFit="contain"
                          bg="gray.50"
                          rounded="xl"
                          p={2}
                        />
                        <VStack align="flex-start" gap={1}>
                          <Heading size="lg" color="gray.800">
                            {client.companyName}
                          </Heading>
                          <Badge colorPalette="blue" variant="subtle" size="sm">
                            {client.type}
                          </Badge>
                        </VStack>
                      </HStack>
                      <Group attached>
                        <Badge colorPalette="green" variant="solid" rounded="lg">
                          <CheckCircle size={12} style={{ marginRight: '4px' }} />
                          Verified
                        </Badge>
                      </Group>
                    </Flex>
                  </Card.Header>

                  <Card.Body>
                    <VStack gap={6} align="stretch">
                      {/* Key Metrics */}
                      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                        <Box>
                          <Stat.Root>
                            <Stat.Label color="gray.500" fontSize="sm">
                              Total Reserves
                            </Stat.Label>
                            <Stat.ValueText fontSize="2xl" fontWeight="bold" color="green.600">
                              ${formatLargeNumber(latestData.reserves)}
                            </Stat.ValueText>
                            <Stat.HelpText color="gray.400" fontSize="xs">
                              <TrendingUp size={12} style={{ display: 'inline', marginRight: '4px' }} />
                              Verified in real-time
                            </Stat.HelpText>
                          </Stat.Root>
                        </Box>

                        <Box>
                          <Stat.Root>
                            <Stat.Label color="gray.500" fontSize="sm">
                              Reserve Ratio
                            </Stat.Label>
                            <Stat.ValueText fontSize="2xl" fontWeight="bold" color="blue.600">
                              {reserveRatio}%
                            </Stat.ValueText>
                            <Stat.HelpText color="gray.400" fontSize="xs">
                              <Shield size={12} style={{ display: 'inline', marginRight: '4px' }} />
                              Fully backed
                            </Stat.HelpText>
                          </Stat.Root>
                        </Box>
                      </Grid>

                      <Separator />

                      {/* Audit Details */}
                      <VStack gap={3} align="stretch">
                        <HStack justify="space-between" fontSize="sm">
                          <Text color="gray.500">Last Audit:</Text>
                          <Text fontWeight="medium" color="gray.700">
                            {latestData.date}
                          </Text>
                        </HStack>
                        <HStack justify="space-between" fontSize="sm">
                          <Text color="gray.500">Check Frequency:</Text>
                          <Text fontWeight="medium" color="gray.700">
                            {client.heartbeat}
                          </Text>
                        </HStack>
                        <HStack justify="space-between" fontSize="sm">
                          <Text color="gray.500">Compliance Status:</Text>
                          <Badge colorPalette="green" size="sm" variant="subtle">
                            <CheckCircle size={10} style={{ marginRight: '4px' }} />
                            Compliant
                          </Badge>
                        </HStack>
                      </VStack>
                    </VStack>
                  </Card.Body>

                  <Card.Footer>
                    <Link to={client.companyName.toLowerCase()}>
                      <Button variant="outline" size="lg" w="full" colorPalette="blue" _hover={{ bg: 'blue.50' }}>
                        View Complete Report
                        <ArrowRight size={16} style={{ marginLeft: '8px' }} />
                      </Button>
                    </Link>
                  </Card.Footer>
                </Card.Root>
              );
            })}
          </Grid>
        </VStack>
      </Container>
      <Container maxW="7xl">
        <VStack gap={16}>
          <VStack gap={6} textAlign="center">
            <Badge size="lg" colorPalette="purple" px={4} py={2} rounded="full">
              <Layers size={16} style={{ marginRight: '8px' }} />
              Continuous and Auditable Validation
            </Badge>
            <Heading fontSize="2xl" textAlign="center" maxW="xl">
              How we{' '}
              <Text as="span" bgImage="linear-gradient(35deg, {colors.brand.500}, {colors.brand.400})" bgClip="text">
                audit
              </Text>{' '}
              your reserves
            </Heading>
            <Text fontSize="lg" maxW="xl" textAlign="center">
              Rigorous and automated process that ensures maximum reliability and transparency of data.
            </Text>
          </VStack>

          <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap={8}>
            <Card.Root shadow="lg" bg="white">
              <Card.Body textAlign="center" p={8}>
                <VStack gap={4}>
                  <Box p={4} bg="blue.100" rounded="full">
                    <Globe size={32} color="#3B82F6" />
                  </Box>
                  <Heading size="md" color="blue.600">
                    Direct Connection
                  </Heading>
                  <Text fontSize="sm" color="gray.600" lineHeight="1.6">
                    Direct integration with custodians, financial institutions and independent audit systems
                  </Text>
                </VStack>
              </Card.Body>
            </Card.Root>

            <Card.Root shadow="lg" bg="white">
              <Card.Body textAlign="center" p={8}>
                <VStack gap={4}>
                  <Box p={4} bg="green.100" rounded="full">
                    <Clock size={32} color="#10B981" />
                  </Box>
                  <Heading size="md" color="green.600">
                    24/7 Monitoring
                  </Heading>
                  <Text fontSize="sm" color="gray.600" lineHeight="1.6">
                    Continuous and automatic verification, with updated data synchronized with on-chain operations
                  </Text>
                </VStack>
              </Card.Body>
            </Card.Root>

            <Card.Root shadow="lg" bg="white">
              <Card.Body textAlign="center" p={8}>
                <VStack gap={4}>
                  <Box p={4} bg="purple.100" rounded="full">
                    <BarChart3 size={32} color="#8B5CF6" />
                  </Box>
                  <Heading size="md" color="purple.600">
                    Advanced Analysis
                  </Heading>
                  <Text fontSize="sm" color="gray.600" lineHeight="1.6">
                    Proprietary algorithms detect discrepancies and generate automatic alerts for maximum security
                  </Text>
                </VStack>
              </Card.Body>
            </Card.Root>

            <Card.Root shadow="lg" bg="white">
              <Card.Body textAlign="center" p={8}>
                <VStack gap={4}>
                  <Box p={4} bg="orange.100" rounded="full">
                    <FileCheck size={32} color="#F59E0B" />
                  </Box>
                  <Heading size="md" color="orange.600">
                    Public Reports
                  </Heading>
                  <Text fontSize="sm" color="gray.600" lineHeight="1.6">
                    Transparent dashboards and auditable reports, publicly available for maximum transparency
                  </Text>
                </VStack>
              </Card.Body>
            </Card.Root>
          </Grid>
        </VStack>
      </Container>

      <AdvancedFeaturesSection />

      <CTA />
    </>
  );
};

export default Home;
