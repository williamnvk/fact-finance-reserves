import { Container, Grid, Badge, Heading, Text, VStack, HStack, Box, SimpleGrid, Flex, Icon } from '@chakra-ui/react';
import { CheckCircle, Target, Zap, Database, Shield, Network, Code, Cpu, Info } from 'lucide-react';

export const WhyChooseUseSection = () => {
  return (
    <>
      {/* Why Choose Us Section */}
      <Box bg="black" py={24} color="white">
        <Container maxW="6xl">
          {/* Header Section */}
          <VStack gap={6} textAlign="center" mb={20}>
            <Badge px={4} py={2} rounded="full" bg="gray.900" color="gray.300">
              <Target size={16} style={{ marginRight: '8px' }} />
              Blockchain oracle infrastructure
            </Badge>
            <Heading fontSize="4xl" color="white" maxW="3xl">
              The most{' '}
              <Text as="span" bgImage="linear-gradient(35deg, {colors.brand.500}, {colors.brand.400})" bgClip="text">
                reliable oracle
              </Text>{' '}
              for On-Chain reserve verification
            </Heading>
            <Text fontSize="xl" color="gray.400" lineHeight="1.7" maxW="2xl">
              Tamper-proof, real-time reserve data directly to smart contracts through our decentralized oracle network.
            </Text>
          </VStack>

          {/* Stats */}
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} mb={20} maxW="2xl" mx="auto">
            <VStack gap={2}>
              <Text fontSize="3xl" fontWeight="bold" color="cyan.300">
                15+
              </Text>
              <Text fontSize="sm" color="gray.400">
                Blockchains
              </Text>
            </VStack>
            <VStack gap={2}>
              <Text fontSize="3xl" fontWeight="bold" color="success.300">
                99.9%
              </Text>
              <Text fontSize="sm" color="gray.400">
                Oracle Uptime
              </Text>
            </VStack>
            <VStack gap={2}>
              <Text fontSize="3xl" fontWeight="bold" color="brand.300">
                &lt;3s
              </Text>
              <Text fontSize="sm" color="gray.400">
                Data Latency
              </Text>
            </VStack>
          </SimpleGrid>

          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={16} alignItems="start">
            {/* Left Side - Features */}
            <VStack gap={8} align="flex-start">
              <Heading size="lg" color="white" mb={4}>
                Key features
              </Heading>

              <VStack gap={6} align="flex-start" w="full">
                {[
                  {
                    icon: Network,
                    title: 'Decentralized network',
                    description: 'Multi-node architecture prevents single points of failure',
                  },
                  {
                    icon: Code,
                    title: 'Smart contract integration',
                    description: 'Native integration with DeFi protocols',
                  },
                  {
                    icon: Shield,
                    title: 'Cryptographic proofs',
                    description: 'Zero-knowledge proofs ensure data authenticity',
                  },
                  {
                    icon: Database,
                    title: 'Multi-Chain support',
                    description: 'Cross-chain verification on 15+ networks',
                  },
                  {
                    icon: Zap,
                    title: 'Real-Time updates',
                    description: 'Sub-second reserve ratio updates',
                  },
                ].map((feature, index) => (
                  <HStack key={index} gap={4} align="flex-start" w="full">
                    <Flex align="center" justify="center" w={10} h={10} bg="whiteAlpha.100" rounded="lg" flexShrink={0}>
                      <Icon as={feature.icon} boxSize={5} color="brand.100" />
                    </Flex>
                    <VStack align="flex-start" gap={1} flex={1}>
                      <Text fontWeight="semibold" color="white">
                        {feature.title}
                      </Text>
                      <Text fontSize="sm" color="gray.400" lineHeight="1.5">
                        {feature.description}
                      </Text>
                    </VStack>
                  </HStack>
                ))}
              </VStack>

              {/* Technical Specs */}
              <VStack gap={4} align="flex-start" mt={8}>
                <HStack gap={3}>
                  <Icon as={Cpu} boxSize={5} color="purple.300" />
                  <Text fontWeight="semibold" color="white">
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
            </VStack>

            {/* Right Side - Enhanced Comparison Table */}
            <VStack gap={8} align="stretch">
              {/* Comparison Table with White Background */}
              <Box bg="gray.900" rounded="xl" p={0} border="1px solid" borderColor="gray.800">
                <VStack gap={6} align="stretch">
                  <VStack gap={2} textAlign="center" m={4} p={4}>
                    <Heading size="lg">Oracle vs traditional data</Heading>
                    <Text fontSize="sm" color="fg.muted">
                      Why blockchain oracles are superior
                    </Text>
                  </VStack>

                  {/* Table Header */}
                  <Grid templateColumns="1fr 1fr 1fr" gap={4} px={4}>
                    <Text fontWeight="bold" color="fg.muted" fontSize="sm" textAlign="left">
                      Feature
                    </Text>
                    <Text fontWeight="bold" color="success.300" fontSize="sm" textAlign="left">
                      Fact Finance Oracle
                    </Text>
                    <Text fontWeight="bold" color="fg.muted" fontSize="sm" textAlign="left">
                      Traditional APIs
                    </Text>
                  </Grid>

                  {/* Comparison Rows */}
                  <VStack gap={0} align="stretch" color="fg.muted" borderTop="1px solid" borderColor="gray.800">
                    {[
                      {
                        feature: 'Data Integrity',
                        oracle: 'Cryptographically Verified',
                        traditional: 'Trust-Based',
                      },
                      {
                        feature: 'Availability',
                        oracle: 'Decentralized Network',
                        traditional: 'Single Point of Failure',
                      },
                      {
                        feature: 'Smart Contracts',
                        oracle: 'Native Integration',
                        traditional: 'Requires Bridge',
                      },
                      {
                        feature: 'Update Frequency',
                        oracle: 'Real-time On-Chain',
                        traditional: 'Periodic Off-Chain',
                      },
                      {
                        feature: 'Transparency',
                        oracle: 'Fully Auditable',
                        traditional: 'Black Box',
                      },
                      {
                        feature: 'Censorship Resistance',
                        oracle: 'Decentralized',
                        traditional: 'Centralized Control',
                      },
                    ].map((row, index) => (
                      <Grid
                        key={index}
                        templateColumns="1fr 1fr 1fr"
                        gap={4}
                        borderBottom="1px solid"
                        borderColor="gray.800"
                        py={4}
                        px={4}
                      >
                        <Text color="fg.muted" fontSize="sm">
                          {row.feature}
                        </Text>
                        <Text flex={1} color="success.300" fontSize="sm" fontWeight="semibold">
                          {row.oracle}
                        </Text>
                        <Text flex={1} fontSize="sm" fontWeight="semibold">
                          {row.traditional}
                        </Text>
                      </Grid>
                    ))}
                  </VStack>

                  <HStack gap={4} px={4} pb={4}>
                    <Icon as={Info} boxSize={4} color="brand.100" />
                    <Text fontSize="md" color="brand.100" fontWeight="medium">
                      Fact.Finance Oracle provides superior reliability, transparency, and security
                    </Text>
                  </HStack>
                </VStack>
              </Box>
            </VStack>
          </Grid>

          {/* Bottom Integration Section */}
          <VStack gap={8} mt={20} textAlign="center">
            <Heading size="xl" color="white" fontWeight="light">
              Simple integration
            </Heading>
            <Text fontSize="lg" color="gray.400" maxW="xl">
              Deploy with just a few lines of code
            </Text>

            {/* Code Example */}
            <Box bg="gray.900" p={6} rounded="lg" maxW="xl" w="full">
              <Text fontSize="sm" color="gray.400" mb={4}>
                Solidity:
              </Text>
              <Box as="pre" fontSize="xs" color="success.300" textAlign="left" overflow="auto">
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

            <HStack gap={6} justify="center" flexWrap="wrap" mt={6}>
              <HStack gap={2}>
                <CheckCircle size={16} color="#10B981" />
                <Text fontSize="sm" color="gray.300">
                  Chainlink compatible
                </Text>
              </HStack>
              <HStack gap={2}>
                <Shield size={16} color="#3B82F6" />
                <Text fontSize="sm" color="gray.300">
                  Audited contracts
                </Text>
              </HStack>
              <HStack gap={2}>
                <Network size={16} color="#8B5CF6" />
                <Text fontSize="sm" color="gray.300">
                  Multi-chain
                </Text>
              </HStack>
            </HStack>
          </VStack>
        </Container>
      </Box>
    </>
  );
};
