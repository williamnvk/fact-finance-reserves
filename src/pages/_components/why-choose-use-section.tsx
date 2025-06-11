import { Container, Grid, Badge, Heading, Text, VStack, HStack, Box, Card, Separator, SimpleGrid, Flex, Icon } from '@chakra-ui/react';
import { CheckCircle, Minus, Target, Globe, Zap, Database, Shield, TrendingUp, Clock, AlertTriangle, Star, Award, Users, Activity, Link, Code, Cpu, Network } from 'lucide-react';

export const WhyChooseUseSection = () => {
  return (
    <>
      {/* Why Choose Us Section */}
      <Box bg="black" py={24} position="relative" overflow="hidden" color="white">
        {/* Background decorative elements - more subtle */}
        <Box position="absolute" top="10%" left="5%" opacity={0.05}>
          <Network size={120} />
        </Box>
        <Box position="absolute" bottom="15%" right="8%" opacity={0.05}>
          <Code size={100} />
        </Box>
        <Box position="absolute" top="60%" left="15%" opacity={0.03}>
          <Cpu size={80} />
        </Box>

        <Container maxW="7xl">
          {/* Header Section */}
          <VStack gap={6} textAlign="center" mb={16}>
            <Badge size="lg" colorPalette="brand" px={6} py={3} rounded="full" bg="gray.900" border="1px solid" borderColor="brand.400">
              <Target size={18} style={{ marginRight: '8px' }} />
              Blockchain Oracle Infrastructure
            </Badge>
            <Heading fontSize="4xl" color="white" maxW="3xl">
              The Most{' '}
              <Text as="span" bgImage="linear-gradient(35deg, {colors.brand.500}, {colors.brand.400})" bgClip="text">
                Reliable Oracle
              </Text>{' '}
              for On-Chain Reserve Verification
            </Heading>
            <Text fontSize="xl" color="gray.400" lineHeight="1.7" maxW="3xl">
              Fact Finance provides tamper-proof, real-time reserve data directly to smart contracts through 
              our decentralized oracle network, enabling trustless verification of tokenized asset backing.
            </Text>
          </VStack>

          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={20} alignItems="start">
            {/* Left Side - Oracle Features */}
            <VStack align="flex-start" gap={8}>
              {/* Oracle Stats */}
              <SimpleGrid columns={3} gap={6} w="full" mb={4}>
                <Box textAlign="center" p={4} bg="gray.900" rounded="xl" border="1px solid" borderColor="gray.700">
                  <Text fontSize="2xl" fontWeight="bold" color="cyan.300">15+</Text>
                  <Text fontSize="sm" color="gray.400">Blockchains</Text>
                </Box>
                <Box textAlign="center" p={4} bg="gray.900" rounded="xl" border="1px solid" borderColor="gray.700">
                  <Text fontSize="2xl" fontWeight="bold" color="green.300">99.9%</Text>
                  <Text fontSize="sm" color="gray.400">Oracle Uptime</Text>
                </Box>
                <Box textAlign="center" p={4} bg="gray.900" rounded="xl" border="1px solid" borderColor="gray.700">
                  <Text fontSize="2xl" fontWeight="bold" color="blue.300">&lt;3s</Text>
                  <Text fontSize="sm" color="gray.400">Data Latency</Text>
                </Box>
              </SimpleGrid>

              <VStack gap={6} align="flex-start" w="full">
                {[
                  {
                    icon: Network,
                    title: 'Decentralized Oracle Network',
                    description: 'Multi-node architecture ensures data integrity and prevents single points of failure',
                    color: 'cyan'
                  },
                  {
                    icon: Code,
                    title: 'Smart Contract Integration',
                    description: 'Native integration with DeFi protocols, enabling automatic reserve-based actions',
                    color: 'green'
                  },
                  {
                    icon: Shield,
                    title: 'Cryptographic Proofs',
                    description: 'Zero-knowledge proofs and Merkle trees ensure data authenticity without revealing sensitive info',
                    color: 'purple'
                  },
                  {
                    icon: Database,
                    title: 'Multi-Chain Data Feeds',
                    description: 'Cross-chain reserve verification supporting Ethereum, Polygon, Arbitrum, and 12+ networks',
                    color: 'orange'
                  },
                  {
                    icon: Zap,
                    title: 'Real-Time Price Feeds',
                    description: 'Sub-second reserve ratio updates with automatic circuit breakers for anomaly detection',
                    color: 'red'
                  }
                ].map((feature, index) => (
                  <Box
                    key={index}
                    p={6}
                    bg="gray.900"
                    rounded="xl"
                    border="1px solid"
                    borderColor="gray.700"
                    w="full"
                    transition="all 0.3s ease"
                    _hover={{
                      transform: 'translateY(-2px)',
                      bg: 'gray.800',
                      borderColor: `${feature.color}.400`
                    }}
                  >
                    <HStack gap={4} align="flex-start">
                      <Flex
                        align="center"
                        justify="center"
                        w={12}
                        h={12}
                        bg="gray.800"
                        rounded="lg"
                        border="1px solid"
                        borderColor={`${feature.color}.400`}
                        flexShrink={0}
                      >
                        <Icon as={feature.icon} boxSize={5} color={`${feature.color}.300`} />
                      </Flex>
                      <VStack align="flex-start" gap={2} flex={1}>
                        <Text fontWeight="bold" fontSize="lg" color="white">
                          {feature.title}
                        </Text>
                        <Text fontSize="sm" color="gray.400" lineHeight="1.6">
                          {feature.description}
                        </Text>
                      </VStack>
                    </HStack>
                  </Box>
                ))}
              </VStack>
            </VStack>

            {/* Right Side - Simplified Oracle vs Traditional Comparison */}
            <VStack gap={8} align="stretch">
              {/* Simplified Comparison */}
              <Box bg="gray.900" border="1px solid" borderColor="gray.700" rounded="xl" p={8}>
                <VStack gap={6} align="stretch">
                  <HStack justify="center" mb={4}>
                    <Text fontWeight="bold" color="white" fontSize="xl">
                      Oracle vs Traditional Data
                    </Text>
                  </HStack>

                  {/* Header Row */}
                  <Grid templateColumns="1fr 1fr 1fr" gap={4} pb={4} borderBottom="1px solid" borderColor="gray.700">
                    <Text fontWeight="bold" color="gray.300" fontSize="sm" textAlign="center">
                      Feature
                    </Text>
                    <Text fontWeight="bold" color="cyan.300" fontSize="sm" textAlign="center">
                      Fact Finance
                    </Text>
                    <Text fontWeight="bold" color="gray.500" fontSize="sm" textAlign="center">
                      Traditional
                    </Text>
                  </Grid>

                  {/* Comparison Rows */}
                  {[
                    {
                      feature: 'Data Integrity',
                      oracle: 'Cryptographically Verified',
                      traditional: 'Trust-Based'
                    },
                    {
                      feature: 'Availability',
                      oracle: 'Decentralized',
                      traditional: 'Single Point'
                    },
                    {
                      feature: 'Smart Contracts',
                      oracle: 'Native Integration',
                      traditional: 'Requires Bridge'
                    },
                    {
                      feature: 'Updates',
                      oracle: 'Real-time',
                      traditional: 'Periodic'
                    },
                    {
                      feature: 'Transparency',
                      oracle: 'Fully Auditable',
                      traditional: 'Black Box'
                    }
                  ].map((row, index) => (
                    <Grid key={index} templateColumns="1fr 1fr 1fr" gap={4} py={3} borderBottom="1px solid" borderColor="gray.800">
                      <Text color="white" fontSize="sm" textAlign="center" fontWeight="medium">
                        {row.feature}
                      </Text>
                      <Box textAlign="center" p={2} bg="green.900" rounded="md" border="1px solid" borderColor="green.700">
                        <Text color="green.200" fontSize="xs" fontWeight="semibold">
                          {row.oracle}
                        </Text>
                      </Box>
                      <Box textAlign="center" p={2} bg="red.900" rounded="md" border="1px solid" borderColor="red.700">
                        <Text color="red.200" fontSize="xs" fontWeight="semibold">
                          {row.traditional}
                        </Text>
                      </Box>
                    </Grid>
                  ))}
                </VStack>
              </Box>

              {/* Technical Specifications Card - Simplified */}
              <Box bg="gray.900" border="1px solid" borderColor="gray.700" rounded="xl" p={6}>
                <VStack gap={4} align="flex-start">
                  <HStack gap={3}>
                    <Icon as={Cpu} boxSize={5} color="purple.300" />
                    <Text fontWeight="bold" fontSize="lg" color="white">
                      Technical Specs
                    </Text>
                  </HStack>
                  
                  <VStack gap={2} w="full" align="flex-start">
                    {[
                      'Chainlink-compatible interface',
                      'EVM and non-EVM support',
                      'Merkle proof verification',
                      'Automated node slashing',
                      'Gas-optimized aggregation',
                      'Cross-chain messaging'
                    ].map((spec, index) => (
                      <HStack key={index} gap={3}>
                        <CheckCircle size={14} color="#10B981" />
                        <Text fontSize="sm" color="gray.300">
                          {spec}
                        </Text>
                      </HStack>
                    ))}
                  </VStack>
                </VStack>
              </Box>
            </VStack>
          </Grid>

          {/* Bottom Integration Section - Simplified */}
          <Box mt={20} textAlign="center">
            <VStack gap={8}>
              <Heading size="xl" color="white">
                Simple Integration
              </Heading>
              <Text fontSize="lg" color="gray.400" maxW="2xl">
                Deploy our oracle with just a few lines of code.
              </Text>
              
              {/* Code Example */}
              <Box bg="gray.900" p={6} rounded="xl" border="1px solid" borderColor="gray.700" maxW="2xl" w="full">
                <Text fontSize="sm" color="gray.400" mb={4}>Solidity Integration:</Text>
                <Box as="pre" fontSize="xs" color="green.300" textAlign="left" overflow="auto">
{`import "@factfinance/oracle/contracts/IFactOracle.sol";

contract YourProtocol {
    IFactOracle public factOracle;
    
    function getReserveRatio(address token) 
        external view returns (uint256) {
        return factOracle.getLatestReserveRatio(token);
    }
}`}
                </Box>
              </Box>

              <HStack gap={4} justify="center" flexWrap="wrap">
                <Badge size="lg" px={4} py={2} rounded="full" bg="green.900" border="1px solid" borderColor="green.700" color="green.200">
                  <CheckCircle size={14} style={{ marginRight: '8px' }} />
                  Chainlink Compatible
                </Badge>
                <Badge size="lg" px={4} py={2} rounded="full" bg="blue.900" border="1px solid" borderColor="blue.700" color="blue.200">
                  <Shield size={14} style={{ marginRight: '8px' }} />
                  Audited Contracts
                </Badge>
                <Badge size="lg" px={4} py={2} rounded="full" bg="purple.900" border="1px solid" borderColor="purple.700" color="purple.200">
                  <Network size={14} style={{ marginRight: '8px' }} />
                  Multi-Chain
                </Badge>
              </HStack>
            </VStack>
          </Box>
        </Container>
      </Box>
    </>
  );
};
