import { Container, Grid, Badge, Heading, Text, VStack, HStack, Box, SimpleGrid, Flex, Icon } from '@chakra-ui/react';
import { CheckCircle, Target, Zap, Database, Shield, Network, Code, Cpu } from 'lucide-react';

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
              Blockchain Oracle Infrastructure
            </Badge>
            <Heading fontSize="4xl" color="white" maxW="3xl">
              The Most{' '}
              <Text as="span" bgImage="linear-gradient(35deg, {colors.brand.500}, {colors.brand.400})" bgClip="text">
                Reliable Oracle
              </Text>{' '}
              for On-Chain Reserve Verification
            </Heading>
            <Text fontSize="xl" color="gray.400" lineHeight="1.7" maxW="2xl">
              Tamper-proof, real-time reserve data directly to smart contracts through our decentralized oracle network.
            </Text>
          </VStack>

          {/* Stats */}
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} mb={20} maxW="2xl" mx="auto">
            <VStack gap={2}>
              <Text fontSize="3xl" fontWeight="bold" color="cyan.300">15+</Text>
              <Text fontSize="sm" color="gray.400">Blockchains</Text>
            </VStack>
            <VStack gap={2}>
              <Text fontSize="3xl" fontWeight="bold" color="green.300">99.9%</Text>
              <Text fontSize="sm" color="gray.400">Oracle Uptime</Text>
            </VStack>
            <VStack gap={2}>
              <Text fontSize="3xl" fontWeight="bold" color="blue.300">&lt;3s</Text>
              <Text fontSize="sm" color="gray.400">Data Latency</Text>
            </VStack>
          </SimpleGrid>

          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={16} alignItems="start">
            {/* Left Side - Features */}
            <VStack gap={8} align="flex-start">
              <Heading size="lg" color="white" mb={4}>
                Key Features
              </Heading>
              
              <VStack gap={6} align="flex-start" w="full">
                {[
                  {
                    icon: Network,
                    title: 'Decentralized Network',
                    description: 'Multi-node architecture prevents single points of failure'
                  },
                  {
                    icon: Code,
                    title: 'Smart Contract Integration',
                    description: 'Native integration with DeFi protocols'
                  },
                  {
                    icon: Shield,
                    title: 'Cryptographic Proofs',
                    description: 'Zero-knowledge proofs ensure data authenticity'
                  },
                  {
                    icon: Database,
                    title: 'Multi-Chain Support',
                    description: 'Cross-chain verification on 15+ networks'
                  },
                  {
                    icon: Zap,
                    title: 'Real-Time Updates',
                    description: 'Sub-second reserve ratio updates'
                  }
                ].map((feature, index) => (
                  <HStack key={index} gap={4} align="flex-start" w="full">
                    <Flex
                      align="center"
                      justify="center"
                      w={10}
                      h={10}
                      bg="gray.900"
                      rounded="lg"
                      flexShrink={0}
                    >
                      <Icon as={feature.icon} boxSize={5} color="gray.300" />
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
            </VStack>

            {/* Right Side - Comparison */}
            <VStack gap={8} align="stretch">
              <Heading size="lg" color="white" mb={4}>
                Oracle vs Traditional
              </Heading>

              <VStack gap={4} align="stretch">
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
                  <Grid key={index} templateColumns="1fr 1fr 1fr" gap={4} py={3}>
                    <Text color="gray.300" fontSize="sm" fontWeight="medium">
                      {row.feature}
                    </Text>
                    <Text color="green.300" fontSize="sm" textAlign="center">
                      {row.oracle}
                    </Text>
                    <Text color="red.300" fontSize="sm" textAlign="center">
                      {row.traditional}
                    </Text>
                  </Grid>
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
                    'Gas-optimized aggregation'
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
          </Grid>

          {/* Bottom Integration Section */}
          <VStack gap={8} mt={20} textAlign="center">
            <Heading size="xl" color="white">
              Simple Integration
            </Heading>
            <Text fontSize="lg" color="gray.400" maxW="xl">
              Deploy with just a few lines of code
            </Text>
            
            {/* Code Example */}
            <Box bg="gray.900" p={6} rounded="lg" maxW="xl" w="full">
              <Text fontSize="sm" color="gray.400" mb={4}>Solidity:</Text>
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

            <HStack gap={6} justify="center" flexWrap="wrap" mt={6}>
              <HStack gap={2}>
                <CheckCircle size={16} color="#10B981" />
                <Text fontSize="sm" color="gray.300">Chainlink Compatible</Text>
              </HStack>
              <HStack gap={2}>
                <Shield size={16} color="#3B82F6" />
                <Text fontSize="sm" color="gray.300">Audited Contracts</Text>
              </HStack>
              <HStack gap={2}>
                <Network size={16} color="#8B5CF6" />
                <Text fontSize="sm" color="gray.300">Multi-Chain</Text>
              </HStack>
            </HStack>
          </VStack>
        </Container>
      </Box>
    </>
  );
};
