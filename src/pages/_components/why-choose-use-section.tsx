import { Container, Grid, Badge, Heading, Text, VStack, HStack, Box, Card, Separator, SimpleGrid, Flex, Icon } from '@chakra-ui/react';
import { CheckCircle, Minus, Target, Globe, Zap, Database, Shield, TrendingUp, Clock, AlertTriangle, Star, Award, Users, Activity, Link, Code, Cpu, Network } from 'lucide-react';

export const WhyChooseUseSection = () => {
  return (
    <>
      {/* Why Choose Us Section */}
      <Box bg="linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)" py={24} position="relative" overflow="hidden" color="white">
        {/* Background decorative elements */}
        <Box position="absolute" top="10%" left="5%" opacity={0.1}>
          <Network size={120} />
        </Box>
        <Box position="absolute" bottom="15%" right="8%" opacity={0.1}>
          <Code size={100} />
        </Box>
        <Box position="absolute" top="60%" left="15%" opacity={0.08}>
          <Cpu size={80} />
        </Box>

        <Container maxW="7xl">
          {/* Header Section */}
          <VStack gap={6} textAlign="center" mb={16}>
            <Badge size="lg" colorPalette="brand" px={6} py={3} rounded="full" bg="brand.900" border="2px solid" borderColor="brand.400">
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
            <Text fontSize="xl" color="whiteAlpha.800" lineHeight="1.7" maxW="3xl">
              Fact Finance provides tamper-proof, real-time reserve data directly to smart contracts through 
              our decentralized oracle network, enabling trustless verification of tokenized asset backing.
            </Text>
          </VStack>

          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={20} alignItems="start">
            {/* Left Side - Oracle Features */}
            <VStack align="flex-start" gap={8}>
              {/* Oracle Stats */}
              <SimpleGrid columns={3} gap={6} w="full" mb={4}>
                <Box textAlign="center" p={4} bg="whiteAlpha.100" rounded="xl" border="1px solid" borderColor="whiteAlpha.200">
                  <Text fontSize="2xl" fontWeight="bold" color="cyan.300">15+</Text>
                  <Text fontSize="sm" color="whiteAlpha.700">Blockchains</Text>
                </Box>
                <Box textAlign="center" p={4} bg="whiteAlpha.100" rounded="xl" border="1px solid" borderColor="whiteAlpha.200">
                  <Text fontSize="2xl" fontWeight="bold" color="green.300">99.9%</Text>
                  <Text fontSize="sm" color="whiteAlpha.700">Oracle Uptime</Text>
                </Box>
                <Box textAlign="center" p={4} bg="whiteAlpha.100" rounded="xl" border="1px solid" borderColor="whiteAlpha.200">
                  <Text fontSize="2xl" fontWeight="bold" color="blue.300">&lt;3s</Text>
                  <Text fontSize="sm" color="whiteAlpha.700">Data Latency</Text>
                </Box>
              </SimpleGrid>

              <VStack gap={6} align="flex-start" w="full">
                {[
                  {
                    icon: Network,
                    title: 'Decentralized Oracle Network',
                    description: 'Multi-node architecture ensures data integrity and prevents single points of failure',
                    color: 'cyan',
                    bgImage: 'linear-gradient(35deg, {colors.brand.500}, {colors.brand.400})'
                  },
                  {
                    icon: Code,
                    title: 'Smart Contract Integration',
                    description: 'Native integration with DeFi protocols, enabling automatic reserve-based actions',
                    color: 'green',
                    bgImage: 'linear-gradient(35deg, {colors.brand.500}, {colors.brand.400})'
                  },
                  {
                    icon: Shield,
                    title: 'Cryptographic Proofs',
                    description: 'Zero-knowledge proofs and Merkle trees ensure data authenticity without revealing sensitive info',
                    color: 'purple',
                    bgImage: 'linear-gradient(35deg, {colors.brand.500}, {colors.brand.400})'
                  },
                  {
                    icon: Database,
                    title: 'Multi-Chain Data Feeds',
                    description: 'Cross-chain reserve verification supporting Ethereum, Polygon, Arbitrum, and 12+ networks',
                    color: 'orange',
                    bgImage: 'linear-gradient(35deg, {colors.brand.500}, {colors.brand.400})'
                  },
                  {
                    icon: Zap,
                    title: 'Real-Time Price Feeds',
                    description: 'Sub-second reserve ratio updates with automatic circuit breakers for anomaly detection',
                    color: 'red',
                    bgImage: 'linear-gradient(35deg, {colors.brand.500}, {colors.brand.400})'
                  }
                ].map((feature, index) => (
                  <Box
                    key={index}
                    p={6}
                    bg="whiteAlpha.100"
                    rounded="xl"
                    border="1px solid"
                    borderColor="whiteAlpha.200"
                    w="full"
                    transition="all 0.3s ease"
                    _hover={{
                      transform: 'translateY(-2px)',
                      bg: 'whiteAlpha.150',
                      borderColor: `${feature.color}.400`
                    }}
                    position="relative"
                    _before={{
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      bg: `linear-gradient(90deg, ${feature.color}.400, ${feature.color}.600)`,
                      roundedTop: 'xl'
                    }}
                  >
                    <HStack gap={4} align="flex-start">
                      <Flex
                        align="center"
                        justify="center"
                        w={14}
                        h={14}
                        bg={feature.bgImage}
                        rounded="xl"
                        border="2px solid"
                        borderColor={`${feature.color}.400`}
                        flexShrink={0}
                      >
                        <Icon as={feature.icon} boxSize={6} color={`${feature.color}.300`} />
                      </Flex>
                      <VStack align="flex-start" gap={2} flex={1}>
                        <Text fontWeight="bold" fontSize="lg" color="white">
                          {feature.title}
                        </Text>
                        <Text fontSize="sm" color="whiteAlpha.700" lineHeight="1.6">
                          {feature.description}
                        </Text>
                      </VStack>
                    </HStack>
                  </Box>
                ))}
              </VStack>
            </VStack>

            {/* Right Side - Oracle vs Traditional Comparison */}
            <VStack gap={8} align="stretch">
              {/* Main Comparison Card */}
              <Card.Root bg="whiteAlpha.100" border="2px solid" borderColor="brand.400" rounded="2xl" overflow="hidden">
                <Box bg="linear-gradient(135deg, {colors.brand.500}, {colors.brand.400})" p={6}>
                  <HStack justify="space-between" align="center">
                    <HStack gap={3}>
                      <Icon as={Network} boxSize={6} color="white" />
                      <Text fontWeight="bold" color="white" fontSize="lg">
                        Oracle vs Traditional Data Sources
                      </Text>
                    </HStack>
                    <Badge colorPalette="success" variant="solid" size="lg" rounded="full">
                      <Star size={14} style={{ marginRight: '4px' }} />
                      On-Chain
                    </Badge>
                  </HStack>
                </Box>
                
                <Card.Body p={8} bg="whiteAlpha.50">
                  <VStack gap={6} align="stretch">
                    <Grid templateColumns="2fr 1fr 1fr" gap={6} fontSize="sm">
                      <Text fontWeight="bold" color="white" fontSize="md"></Text>
                      <Text fontWeight="bold" color="cyan.300" textAlign="center" fontSize="md">
                        Fact Finance Oracle
                      </Text>
                      <Text fontWeight="bold" color="whiteAlpha.600" textAlign="center" fontSize="md">
                        Traditional APIs
                      </Text>
                    </Grid>

                    <Separator borderColor="whiteAlpha.300" />

                    {[
                      {
                        feature: 'Data Integrity',
                        oracle: 'Cryptographically Verified',
                        traditional: 'Trust-Based',
                        oracleIcon: Shield,
                        traditionalIcon: AlertTriangle
                      },
                      {
                        feature: 'Availability',
                        oracle: 'Decentralized Network',
                        traditional: 'Single Point of Failure',
                        oracleIcon: Network,
                        traditionalIcon: Users
                      },
                      {
                        feature: 'Smart Contract Access',
                        oracle: 'Native Integration',
                        traditional: 'Requires Bridge',
                        oracleIcon: Link,
                        traditionalIcon: Minus
                      },
                      {
                        feature: 'Update Frequency',
                        oracle: 'Real-time On-Chain',
                        traditional: 'Periodic Off-Chain',
                        oracleIcon: Zap,
                        traditionalIcon: Clock
                      },
                      {
                        feature: 'Transparency',
                        oracle: 'Fully Auditable',
                        traditional: 'Black Box',
                        oracleIcon: Globe,
                        traditionalIcon: Minus
                      }
                    ].map((row, index) => (
                      <Grid key={index} templateColumns="2fr 1fr 1fr" gap={6} fontSize="sm" alignItems="center" py={2}>
                        <Text color="whiteAlpha.900" fontWeight="medium">
                          {row.feature}
                        </Text>
                        <HStack justify="center" p={3} bg="green.900" rounded="lg" border="1px solid" borderColor="green.400">
                          <Icon as={row.oracleIcon} boxSize={4} color="green.300" />
                          <Text color="green.200" fontWeight="semibold" fontSize="xs">
                            {row.oracle}
                          </Text>
                        </HStack>
                        <HStack justify="center" p={3} bg="red.900" rounded="lg" border="1px solid" borderColor="red.400">
                          <Icon as={row.traditionalIcon} boxSize={4} color="red.300" />
                          <Text color="red.200" fontWeight="semibold" fontSize="xs">
                            {row.traditional}
                          </Text>
                        </HStack>
                      </Grid>
                    ))}
                  </VStack>
                </Card.Body>
              </Card.Root>

              {/* Technical Specifications Card */}
              <Card.Root bg="linear-gradient(135deg, purple.900, blue.900)" color="white" rounded="2xl" border="1px solid" borderColor="purple.400">
                <Card.Body p={8}>
                  <VStack gap={6} align="flex-start">
                    <HStack gap={3}>
                      <Icon as={Cpu} boxSize={6} color="purple.300" />
                      <Text fontWeight="bold" fontSize="lg">
                        Technical Specifications
                      </Text>
                    </HStack>
                    
                    <SimpleGrid columns={1} gap={4} w="full">
                      {[
                        'Chainlink-compatible oracle interface',
                        'EVM and non-EVM blockchain support',
                        'Merkle proof verification system',
                        'Automated slashing for malicious nodes',
                        'Gas-optimized data aggregation',
                        'Cross-chain message passing'
                      ].map((spec, index) => (
                        <HStack key={index} gap={3}>
                          <CheckCircle size={16} color="#10B981" />
                          <Text fontSize="sm" color="whiteAlpha.900">
                            {spec}
                          </Text>
                        </HStack>
                      ))}
                    </SimpleGrid>
                  </VStack>
                </Card.Body>
              </Card.Root>
            </VStack>
          </Grid>

          {/* Bottom Integration Section */}
          <Box mt={20} textAlign="center">
            <VStack gap={8}>
              <Heading size="xl" color="white">
                Seamless Integration with Your DeFi Protocol
              </Heading>
              <Text fontSize="lg" color="whiteAlpha.800" maxW="2xl">
                Deploy our oracle with just a few lines of code and start receiving tamper-proof reserve data.
              </Text>
              
              {/* Code Example */}
              <Box bg="gray.900" p={6} rounded="xl" border="1px solid" borderColor="whiteAlpha.300" maxW="2xl" w="full">
                <Text fontSize="sm" color="gray.400" mb={4}>Solidity Integration Example:</Text>
                <Box as="pre" fontSize="xs" color="green.300" textAlign="left" overflow="auto">
{`// Import Fact Finance Oracle
import "@factfinance/oracle/contracts/IFactOracle.sol";

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
                <Badge size="lg" colorPalette="success" px={4} py={2} rounded="full" bg="green.900" border="1px solid" borderColor="green.400">
                  <CheckCircle size={16} style={{ marginRight: '8px' }} />
                  Chainlink Compatible
                </Badge>
                <Badge size="lg" colorPalette="brand" px={4} py={2} rounded="full" bg="blue.900" border="1px solid" borderColor="blue.400">
                  <Shield size={16} style={{ marginRight: '8px' }} />
                  Audited Smart Contracts
                </Badge>
                <Badge size="lg" colorPalette="purple" px={4} py={2} rounded="full" bg="purple.900" border="1px solid" borderColor="purple.400">
                  <Network size={16} style={{ marginRight: '8px' }} />
                  Multi-Chain Support
                </Badge>
              </HStack>
            </VStack>
          </Box>
        </Container>
      </Box>
    </>
  );
};
