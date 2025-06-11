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
  SimpleGrid,
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
  Users,
  DollarSign,
  Activity,
  Lock,
  AlertTriangle,
  Eye,
  Zap,
  Star,
  Award,
  Briefcase,
  Target,
  ChevronRight,
  CheckCircle2,
  Minus,
} from 'lucide-react';
import { formatLargeNumber } from '@/lib/utils';
import { AdvancedFeaturesSection } from './_components/advanced-features-section';
import { CTA } from './_components/cta';
import { HomeHero } from './_components/home_hero';
import { FAQSection } from './_components/faq-section';
import { TestimonialsSection } from './_components/testimonials-section';

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
        bg="white"
        _dark={{
          bg: 'brand.950',
          bgImage: "linear-gradient(35deg, {colors.brand.800}, transparent)"
        }}
        bgImage="linear-gradient(35deg, {colors.brand.500}, {colors.brand.100})"
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
              const previousData = client.historicalData[client.historicalData.length - 2];
              const growth = previousData
                ? parseFloat((((latestData.reserves - previousData.reserves) / previousData.reserves) * 100).toFixed(1))
                : 0;

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
                  position="relative"
                >
                  {/* Gradient overlay */}
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    height="4px"
                    bgImage="linear-gradient(90deg, {colors.brand.500}, {colors.brand.400})"
                  />

                  <Card.Header>
                    <Flex justify="space-between" align="flex-start">
                      <HStack gap={4}>
                        <Box position="relative">
                          <Image
                            src={client.logo}
                            alt={client.companyName}
                            boxSize="60px"
                            objectFit="contain"
                            bg="gray.50"
                            rounded="xl"
                            p={2}
                          />
                          <Box position="absolute" bottom="-2px" right="-2px" p={1} bg="green.500" rounded="full">
                            <Box w={2} h={2} bg="white" rounded="full" />
                          </Box>
                        </Box>
                        <VStack align="flex-start" gap={1}>
                          <Heading size="lg" color="gray.800">
                            {client.companyName}
                          </Heading>
                          <Badge colorPalette="brand" variant="subtle" size="sm">
                            {client.type}
                          </Badge>
                        </VStack>
                      </HStack>
                      <VStack gap={2}>
                        <Badge colorPalette="success" variant="solid" rounded="lg" size="sm">
                          <CheckCircle size={12} style={{ marginRight: '4px' }} />
                          Verified
                        </Badge>
                        <Badge colorPalette="brand" variant="outline" rounded="lg" size="sm">
                          <Eye size={12} style={{ marginRight: '4px' }} />
                          Live
                        </Badge>
                      </VStack>
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
                              <TrendingUp
                                size={12}
                                style={{
                                  display: 'inline',
                                  marginRight: '4px',
                                  color: growth >= 0 ? '#10B981' : '#EF4444',
                                }}
                              />
                              {growth >= 0 ? '+' : ''}
                              {growth}% from last period
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

                      {/* Reserve Health Indicator */}
                      <Box>
                        <HStack justify="space-between" mb={2}>
                          <Text fontSize="sm" color="gray.600">
                            Reserve Health
                          </Text>
                          <Badge colorPalette="success" size="sm" variant="subtle">
                            Excellent
                          </Badge>
                        </HStack>
                        <Box w="full" bg="gray.200" rounded="full" h="2">
                          <Box bg="green.500" h="2" rounded="full" w={`${reserveRatio}%`} transition="width 0.3s" />
                        </Box>
                      </Box>

                      <Separator />

                      {/* Audit Details */}
                      <VStack gap={3} align="stretch">
                        <HStack justify="space-between" fontSize="sm">
                          <Text color="gray.500">Last Audit:</Text>
                          <HStack>
                            <Text fontWeight="medium" color="gray.700">
                              {latestData.date}
                            </Text>
                            <CheckCircle2 size={14} color="#10B981" />
                          </HStack>
                        </HStack>
                        <HStack justify="space-between" fontSize="sm">
                          <Text color="gray.500">Check Frequency:</Text>
                          <Text fontWeight="medium" color="gray.700">
                            {client.heartbeat}
                          </Text>
                        </HStack>
                        <HStack justify="space-between" fontSize="sm">
                          <Text color="gray.500">Compliance Status:</Text>
                          <Badge colorPalette="success" size="sm" variant="subtle">
                            <CheckCircle size={10} style={{ marginRight: '4px' }} />
                            Compliant
                          </Badge>
                        </HStack>
                        <HStack justify="space-between" fontSize="sm">
                          <Text color="gray.500">Risk Level:</Text>
                          <Badge colorPalette="success" size="sm" variant="subtle">
                            Low Risk
                          </Badge>
                        </HStack>
                      </VStack>
                    </VStack>
                  </Card.Body>

                  <Card.Footer>
                    <Link to={client.companyName.toLowerCase()}>
                      <Button variant="outline" size="lg" w="full" colorPalette="brand" _hover={{ bg: 'blue.50' }}>
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

      {/* Why Choose Us Section */}
      <Container maxW="7xl" py={20}>
        <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={16} alignItems="center">
          <VStack align="flex-start" gap={8}>
            <Badge size="lg" colorPalette="brand" px={4} py={2} rounded="full">
              <Target size={16} style={{ marginRight: '8px' }} />
              Why Choose Fact Finance
            </Badge>
            <Heading size="2xl" color="gray.800">
              The Most{' '}
              <Text as="span" bgImage="linear-gradient(35deg, {colors.brand.500}, {colors.brand.400})" bgClip="text">
                Trusted
              </Text>{' '}
              Platform for Proof of Reserves
            </Heading>
            <Text fontSize="lg" color="gray.600" lineHeight="1.6">
              Unlike traditional audit firms that provide quarterly snapshots, we offer continuous, real-time
              verification that ensures your reserves are always properly backed.
            </Text>

            <VStack gap={4} align="flex-start" w="full">
              <HStack gap={4}>
                <Box p={2} bg="green.100" rounded="lg">
                  <CheckCircle size={20} color="#10B981" />
                </Box>
                <VStack align="flex-start" gap={0}>
                  <Text fontWeight="semibold" color="gray.800">
                    Real-time monitoring
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    24/7 continuous verification vs. quarterly audits
                  </Text>
                </VStack>
              </HStack>

              <HStack gap={4}>
                <Box p={2} bg="blue.100" rounded="lg">
                  <Database size={20} color="#3B82F6" />
                </Box>
                <VStack align="flex-start" gap={0}>
                  <Text fontWeight="semibold" color="gray.800">
                    Direct custodian integration
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    No manual reporting - direct API connections
                  </Text>
                </VStack>
              </HStack>

              <HStack gap={4}>
                <Box p={2} bg="purple.100" rounded="lg">
                  <Globe size={20} color="#8B5CF6" />
                </Box>
                <VStack align="flex-start" gap={0}>
                  <Text fontWeight="semibold" color="gray.800">
                    Public transparency
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    Open dashboards for complete transparency
                  </Text>
                </VStack>
              </HStack>

              <HStack gap={4}>
                <Box p={2} bg="orange.100" rounded="lg">
                  <Zap size={20} color="#F59E0B" />
                </Box>
                <VStack align="flex-start" gap={0}>
                  <Text fontWeight="semibold" color="gray.800">
                    Automated compliance
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    Regulatory reporting and alerts included
                  </Text>
                </VStack>
              </HStack>
            </VStack>
          </VStack>

          <Box position="relative">
            <Card.Root bg="white" shadow="2xl" border="1px solid" borderColor="gray.200">
              <Card.Header>
                <HStack justify="space-between">
                  <Text fontWeight="bold" color="gray.800">
                    Fact Finance vs Traditional Audits
                  </Text>
                  <Badge colorPalette="success" variant="solid">
                    Better
                  </Badge>
                </HStack>
              </Card.Header>
              <Card.Body>
                <VStack gap={4} align="stretch">
                  <Grid templateColumns="2fr 1fr 1fr" gap={4} fontSize="sm">
                    <Text fontWeight="semibold" color="gray.700"></Text>
                    <Text fontWeight="semibold" color="green.600" textAlign="center">
                      Fact Finance
                    </Text>
                    <Text fontWeight="semibold" color="gray.500" textAlign="center">
                      Traditional
                    </Text>
                  </Grid>

                  <Separator />

                  <Grid templateColumns="2fr 1fr 1fr" gap={4} fontSize="sm" alignItems="center">
                    <Text color="gray.600">Monitoring Frequency</Text>
                    <HStack justify="center">
                      <CheckCircle size={16} color="#10B981" />
                      <Text color="green.600" fontWeight="medium">
                        Real-time
                      </Text>
                    </HStack>
                    <HStack justify="center">
                      <Minus size={16} color="#EF4444" />
                      <Text color="red.600" fontWeight="medium">
                        Quarterly
                      </Text>
                    </HStack>
                  </Grid>

                  <Grid templateColumns="2fr 1fr 1fr" gap={4} fontSize="sm" alignItems="center">
                    <Text color="gray.600">Data Source</Text>
                    <HStack justify="center">
                      <CheckCircle size={16} color="#10B981" />
                      <Text color="green.600" fontWeight="medium">
                        Direct APIs
                      </Text>
                    </HStack>
                    <HStack justify="center">
                      <Minus size={16} color="#EF4444" />
                      <Text color="red.600" fontWeight="medium">
                        Manual
                      </Text>
                    </HStack>
                  </Grid>

                  <Grid templateColumns="2fr 1fr 1fr" gap={4} fontSize="sm" alignItems="center">
                    <Text color="gray.600">Public Access</Text>
                    <HStack justify="center">
                      <CheckCircle size={16} color="#10B981" />
                      <Text color="green.600" fontWeight="medium">
                        Yes
                      </Text>
                    </HStack>
                    <HStack justify="center">
                      <Minus size={16} color="#EF4444" />
                      <Text color="red.600" fontWeight="medium">
                        No
                      </Text>
                    </HStack>
                  </Grid>

                  <Grid templateColumns="2fr 1fr 1fr" gap={4} fontSize="sm" alignItems="center">
                    <Text color="gray.600">Alert System</Text>
                    <HStack justify="center">
                      <CheckCircle size={16} color="#10B981" />
                      <Text color="green.600" fontWeight="medium">
                        Automated
                      </Text>
                    </HStack>
                    <HStack justify="center">
                      <Minus size={16} color="#EF4444" />
                      <Text color="red.600" fontWeight="medium">
                        None
                      </Text>
                    </HStack>
                  </Grid>
                </VStack>
              </Card.Body>
            </Card.Root>
          </Box>
        </Grid>
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
            <Card.Root shadow="lg" bg="white" _hover={{ transform: 'translateY(-4px)' }} transition="all 0.3s">
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

            <Card.Root shadow="lg" bg="white" _hover={{ transform: 'translateY(-4px)' }} transition="all 0.3s">
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

            <Card.Root shadow="lg" bg="white" _hover={{ transform: 'translateY(-4px)' }} transition="all 0.3s">
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

            <Card.Root shadow="lg" bg="white" _hover={{ transform: 'translateY(-4px)' }} transition="all 0.3s">
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

      <TestimonialsSection />

      <FAQSection />

      <CTA />
    </>
  );
};

export default Home;
