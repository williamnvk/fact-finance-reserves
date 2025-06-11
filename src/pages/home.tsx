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
  SimpleGrid,
  Card,
  Stat,
  Group,
  Separator,
  Stack,
  Progress,
  Icon,
} from '@chakra-ui/react';
import { Link } from 'react-router';
import {
  ArrowRight,
  Shield,
  Clock,
  CheckCircle,
  TrendingUp,
  Eye,
  Lock,
  BarChart3,
  AlertTriangle,
  FileCheck,
  Users,
  Globe,
  Zap,
  Layers,
  Activity,
  Server,
  Database,
  Sparkles,
  Star,
  ArrowUpRight,
} from 'lucide-react';
import { formatLargeNumber } from '@/lib/utils';
import { SystemStatus } from './_components/system-status';

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

      <Container maxW="7xl" position="relative" zIndex={1} py={24}>
        <VStack w="full" h="full" justify="center" gap={8}>
          <SystemStatus />

          <Badge
            size="lg"
            colorPalette="blue"
            rounded="full"
            px={6}
            py={3}
            bg="rgba(59, 130, 246, 0.1)"
            border="1px solid rgba(59, 130, 246, 0.3)"
            color="blue.200"
          >
            <Icon as={Shield} boxSize={4} color="brand.100" mr={2} />
            Certified Blockchain Auditing
          </Badge>

          <VStack align="center" gap={4} w="full">
            <Heading
              fontSize="6xl"
              lineHeight="1.1"
              bgImage="linear-gradient(35deg, white, {colors.brand.200}, {colors.brand.200})"
              bgClip="text"
              fontWeight="400"
              textAlign="center"
              maxW="3xl"
            >
              Transparency and Trust for the{' '}
              <Text
                as="span"
                bgImage="linear-gradient(35deg, white, {colors.brand.500}, {colors.brand.200})"
                bgClip="text"
                fontWeight="semibold"
              >
                Web3 Ecosystem
              </Text>
            </Heading>

            <Text fontSize="xl" textAlign="center" color="whiteAlpha.800" maxW="3xl">
              Verify the proof of reserve for major tokenized assets in real-time. Fact Finance acts as a data
              infrastructure that ensures the traceability of backing.
            </Text>
          </VStack>

          {/* Key Stats */}
          <Grid templateColumns="repeat(3, 1fr)" gap={6} maxW="2xl" w="full" py={4}>
            <VStack gap={0}>
              <Heading fontSize="4xl" fontWeight="light" color="success.300" textAlign="center">
                ${formatLargeNumber(totalReserves)}
              </Heading>
              <Text color="whiteAlpha.700" fontSize="sm">
                Audited Reserves
              </Text>
            </VStack>

            <VStack gap={0}>
              <Heading fontSize="4xl" fontWeight="light" color="success.300" textAlign="center">
                {clients.length}+
              </Heading>
              <Text color="whiteAlpha.700" fontSize="sm">
                Active Audits
              </Text>
            </VStack>

            <VStack gap={0}>
              <Heading fontSize="4xl" fontWeight="light" color="success.300" textAlign="center">
                99.9%
              </Heading>
              <Text color="whiteAlpha.700" fontSize="sm">
                Uptime
              </Text>
            </VStack>
          </Grid>

          <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }} gap={4} w="full">
            <HStack
              gap={2}
              p={4}
              bg="whiteAlpha.50"
              rounded="lg"
              border="1px solid"
              borderColor="whiteAlpha.200"
              backdropFilter="blur(10px)"
              align="center"
            >
              <Center
                p={2}
                bg="transparent"
                rounded="lg"
                border="1px solid"
                borderColor="whiteAlpha.200"
                backdropFilter="blur(10px)"
                pos="absolute"
                right={2}
                top={2}
              >
                <Icon as={Eye} boxSize={4} color="brand.500" />
              </Center>
              <VStack align="flex-start" gap={1}>
                <Text fontWeight="semibold">Full Transparency</Text>
                <Text fontSize="sm">Complete visibility into reserve backing</Text>
              </VStack>
            </HStack>

            <HStack
              gap={2}
              p={4}
              bg="whiteAlpha.50"
              rounded="lg"
              border="1px solid"
              borderColor="whiteAlpha.200"
              backdropFilter="blur(10px)"
              align="center"
            >
              <Center
                p={2}
                bg="transparent"
                rounded="lg"
                border="1px solid"
                borderColor="whiteAlpha.200"
                backdropFilter="blur(10px)"
                pos="absolute"
                right={2}
                top={2}
              >
                <Icon as={Zap} boxSize={4} color="brand.500" />
              </Center>
              <VStack align="flex-start" gap={1}>
                <Text fontWeight="semibold">Real-time Updates</Text>
                <Text fontSize="sm">Instant verification and monitoring</Text>
              </VStack>
            </HStack>

            <HStack
              gap={2}
              p={4}
              bg="whiteAlpha.50"
              rounded="lg"
              border="1px solid"
              borderColor="whiteAlpha.200"
              backdropFilter="blur(10px)"
              align="center"
            >
              <Center
                p={2}
                bg="transparent"
                rounded="lg"
                border="1px solid"
                borderColor="whiteAlpha.200"
                backdropFilter="blur(10px)"
                pos="absolute"
                right={2}
                top={2}
              >
                <Icon as={Lock} boxSize={4} color="brand.500" />
              </Center>
              <VStack align="flex-start" gap={1}>
                <Text fontWeight="semibold">Bank-grade Security</Text>
                <Text fontSize="sm">Enterprise-level data protection</Text>
              </VStack>
            </HStack>

            <HStack
              gap={2}
              p={4}
              bg="whiteAlpha.50"
              rounded="lg"
              border="1px solid"
              borderColor="whiteAlpha.200"
              backdropFilter="blur(10px)"
              align="center"
            >
              <Center
                p={2}
                bg="transparent"
                rounded="lg"
                border="1px solid"
                borderColor="whiteAlpha.200"
                backdropFilter="blur(10px)"
                pos="absolute"
                right={2}
                top={2}
              >
                <Icon as={Globe} boxSize={4} color="brand.500" />
              </Center>
              <VStack align="flex-start" gap={1}>
                <Text fontWeight="semibold">Global Standards</Text>
                <Text fontSize="sm">Compliance with international regulations</Text>
              </VStack>
            </HStack>
          </Grid>
        </VStack>
      </Container>

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

      <Container maxW="7xl">
        <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={16} alignItems="center">
          <VStack align="flex-start" gap={8}>
            <Badge size="lg" colorPalette="red" px={4} py={2} rounded="full">
              <Sparkles size={16} style={{ marginRight: '8px' }} />
              Advanced Features
            </Badge>

            <Heading size="2xl" color="gray.800">
              Programmable{' '}
              <Text as="span" bgGradient="linear(to-r, red.500, orange.500)" bgClip="text">
                Auditing
              </Text>{' '}
              and Automation
            </Heading>

            <Text fontSize="lg" color="gray.600" lineHeight="1.6">
              Our platform offers advanced features that make reserve verification completely automated and
              programmable.
            </Text>

            <VStack gap={6} align="flex-start" w="full">
              <HStack gap={4} p={4} bg="red.50" rounded="lg" w="full">
                <Box p={2} bg="red.100" rounded="lg">
                  <Lock size={20} color="#EF4444" />
                </Box>
                <VStack align="flex-start" gap={1}>
                  <Text fontWeight="semibold" color="gray.800">
                    Issuance Locks
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    Automatic pauses when inconsistencies are detected
                  </Text>
                </VStack>
              </HStack>

              <HStack gap={4} p={4} bg="orange.50" rounded="lg" w="full">
                <Box p={2} bg="orange.100" rounded="lg">
                  <AlertTriangle size={20} color="#F59E0B" />
                </Box>
                <VStack align="flex-start" gap={1}>
                  <Text fontWeight="semibold" color="gray.800">
                    Smart Alerts
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    Real-time notifications about discrepancies
                  </Text>
                </VStack>
              </HStack>

              <HStack gap={4} p={4} bg="blue.50" rounded="lg" w="full">
                <Box p={2} bg="blue.100" rounded="lg">
                  <BarChart3 size={20} color="#3B82F6" />
                </Box>
                <VStack align="flex-start" gap={1}>
                  <Text fontWeight="semibold" color="gray.800">
                    Custom Dashboards
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    Tailored visualizations for each client
                  </Text>
                </VStack>
              </HStack>

              <HStack gap={4} p={4} bg="green.50" rounded="lg" w="full">
                <Box p={2} bg="green.100" rounded="lg">
                  <Shield size={20} color="#10B981" />
                </Box>
                <VStack align="flex-start" gap={1}>
                  <Text fontWeight="semibold" color="gray.800">
                    Regulatory Compliance
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    Meeting international standards
                  </Text>
                </VStack>
              </HStack>
            </VStack>
          </VStack>

          <Card.Root overflow="hidden" shadow="2xl" bgGradient="linear(to-br, red.500, orange.500)" color="white">
            <Card.Body p={10}>
              <VStack gap={6} align="flex-start">
                <Box p={3} bg="whiteAlpha.200" rounded="full">
                  <TrendingUp size={40} />
                </Box>
                <Heading size="xl" color="white">
                  Stablecoins with Total Confidence
                </Heading>
                <Text lineHeight="1.6" color="whiteAlpha.900">
                  For stablecoins, we offer a dynamic dashboard that connects custodian data with on-chain monitoring,
                  ensuring independent verification of 100% backing.
                </Text>
                <Text fontSize="sm" color="whiteAlpha.800" lineHeight="1.6">
                  Update frequency, inconsistency detection and public transparency for issuers, regulators and
                  investors.
                </Text>
                <HStack>
                  <Star size={16} />
                  <Star size={16} />
                  <Star size={16} />
                  <Star size={16} />
                  <Star size={16} />
                </HStack>
              </VStack>
            </Card.Body>
          </Card.Root>
        </Grid>
      </Container>

      <Container maxW="5xl" position="relative" zIndex={1}>
        <VStack gap={10} textAlign="center">
          <Box p={4} bg="whiteAlpha.200" rounded="full">
            <Shield size={48} />
          </Box>
          <Heading size="3xl" fontWeight="800">
            Strengthen Trust in Your Digital Asset
          </Heading>
          <Text fontSize="xl" color="whiteAlpha.900" maxW="700px" lineHeight="1.6">
            Discover how Fact Finance can bring more transparency, security and credibility to your tokenized assets.
          </Text>

          <Stack direction={{ base: 'column', sm: 'row' }} gap={6}>
            <ChakraLink href="mailto:por@fact.finance">
              <Button
                size="xl"
                colorPalette="white"
                variant="solid"
                px={10}
                py={8}
                fontSize="lg"
                fontWeight="semibold"
                _hover={{ transform: 'translateY(-2px)' }}
                transition="all 0.3s"
                shadow="xl"
              >
                <Users size={20} style={{ marginRight: '8px' }} />
                Request Consultation
              </Button>
            </ChakraLink>
            <ChakraLink href="https://docs.fact.finance/features/por/">
              <Button
                size="xl"
                variant="outline"
                colorPalette="whiteAlpha"
                px={10}
                py={8}
                fontSize="lg"
                fontWeight="semibold"
                _hover={{
                  bg: 'whiteAlpha.200',
                  transform: 'translateY(-2px)',
                }}
                transition="all 0.3s"
              >
                <FileCheck size={20} style={{ marginRight: '8px' }} />
                Technical Documentation
                <ArrowUpRight size={16} style={{ marginLeft: '8px' }} />
              </Button>
            </ChakraLink>
          </Stack>

          <HStack gap={8} color="whiteAlpha.700" fontSize="sm" mt={8}>
            <HStack>
              <CheckCircle size={16} />
              <Text>Certified Auditing</Text>
            </HStack>
            <HStack>
              <Clock size={16} />
              <Text>24/7 Available</Text>
            </HStack>
            <HStack>
              <Globe size={16} />
              <Text>International Standards</Text>
            </HStack>
          </HStack>
        </VStack>
      </Container>
    </>
  );
};

export default Home;
