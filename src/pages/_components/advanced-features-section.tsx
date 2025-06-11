import { Box, Container, Heading, Text, Grid, VStack, HStack, Badge, SimpleGrid, Card } from '@chakra-ui/react';
import { Shield, TrendingUp, Lock, BarChart3, AlertTriangle, Sparkles, Star, Zap, Clock, Database, Globe, Eye } from 'lucide-react';

export const AdvancedFeaturesSection = () => {
  return (
    <Box bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)" py={24} color="white" position="relative" overflow="hidden">
      {/* Background decorative elements */}
      <Box position="absolute" top="10%" left="5%" opacity={0.1}>
        <Shield size={80} />
      </Box>
      <Box position="absolute" bottom="10%" right="5%" opacity={0.1}>
        <Database size={60} />
      </Box>
      <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" opacity={0.05}>
        <BarChart3 size={120} />
      </Box>

      <Container maxW="7xl">
        <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={16} alignItems="center">
          {/* Left Side - Content */}
          <VStack align="flex-start" gap={8}>
            <Badge size="lg" colorPalette="whiteAlpha" px={4} py={2} rounded="full" bg="whiteAlpha.200">
              <Sparkles size={16} style={{ marginRight: '8px' }} />
              Advanced Features
            </Badge>

            <Heading size="2xl" color="white">
              Programmable{' '}
              <Text as="span" bgImage="linear-gradient(35deg, {colors.brand.500}, {colors.brand.400})" bgClip="text">
                Auditing
              </Text>{' '}
              and Automation
            </Heading>

            <Text fontSize="lg" color="whiteAlpha.900" lineHeight="1.6">
              Our platform offers advanced features that make reserve verification completely automated and programmable, 
              giving you unprecedented control and transparency.
            </Text>

            <VStack gap={6} align="flex-start" w="full">
              <HStack gap={4} p={4} bg="whiteAlpha.200" rounded="lg" w="full" backdropBlur="md">
                <Box p={2} bg="red.500" rounded="lg">
                  <Lock size={20} color="white" />
                </Box>
                <VStack align="flex-start" gap={1}>
                  <Text fontWeight="semibold" color="white">
                    Automatic Issuance Locks
                  </Text>
                  <Text fontSize="sm" color="whiteAlpha.800">
                    Smart contracts automatically pause token issuance when reserve discrepancies are detected
                  </Text>
                </VStack>
              </HStack>

              <HStack gap={4} p={4} bg="whiteAlpha.200" rounded="lg" w="full" backdropBlur="md">
                <Box p={2} bg="orange.500" rounded="lg">
                  <AlertTriangle size={20} color="white" />
                </Box>
                <VStack align="flex-start" gap={1}>
                  <Text fontWeight="semibold" color="white">
                    Intelligent Alert System
                  </Text>
                  <Text fontSize="sm" color="whiteAlpha.800">
                    AI-powered alerts with customizable thresholds and multi-channel notifications
                  </Text>
                </VStack>
              </HStack>

              <HStack gap={4} p={4} bg="whiteAlpha.200" rounded="lg" w="full" backdropBlur="md">
                <Box p={2} bg="blue.500" rounded="lg">
                  <BarChart3 size={20} color="white" />
                </Box>
                <VStack align="flex-start" gap={1}>
                  <Text fontWeight="semibold" color="white">
                    Dynamic Dashboards
                  </Text>
                  <Text fontSize="sm" color="whiteAlpha.800">
                    Real-time visualizations with drill-down capabilities and export functions
                  </Text>
                </VStack>
              </HStack>

              <HStack gap={4} p={4} bg="whiteAlpha.200" rounded="lg" w="full" backdropBlur="md">
                <Box p={2} bg="green.500" rounded="lg">
                  <Shield size={20} color="white" />
                </Box>
                <VStack align="flex-start" gap={1}>
                  <Text fontWeight="semibold" color="white">
                    Regulatory Automation
                  </Text>
                  <Text fontSize="sm" color="whiteAlpha.800">
                    Automated compliance reporting for global regulatory frameworks
                  </Text>
                </VStack>
              </HStack>
            </VStack>
          </VStack>

          {/* Right Side - Features Grid */}
          <Box>
            <SimpleGrid columns={2} gap={6}>
              <Card.Root bg="whiteAlpha.200" backdropBlur="md" border="1px solid" borderColor="whiteAlpha.300">
                <Card.Body textAlign="center" py={8}>
                  <VStack gap={4}>
                    <Box p={3} bg="purple.500" rounded="full">
                      <TrendingUp size={24} color="white" />
                    </Box>
                    <Text fontWeight="bold" color="white" fontSize="sm">
                      Predictive Analytics
                    </Text>
                    <Text color="whiteAlpha.800" fontSize="xs" textAlign="center">
                      ML algorithms predict potential issues before they occur
                    </Text>
                  </VStack>
                </Card.Body>
              </Card.Root>

              <Card.Root bg="whiteAlpha.200" backdropBlur="md" border="1px solid" borderColor="whiteAlpha.300">
                <Card.Body textAlign="center" py={8}>
                  <VStack gap={4}>
                    <Box p={3} bg="cyan.500" rounded="full">
                      <Clock size={24} color="white" />
                    </Box>
                    <Text fontWeight="bold" color="white" fontSize="sm">
                      Real-time API
                    </Text>
                    <Text color="whiteAlpha.800" fontSize="xs" textAlign="center">
                      Integrate reserve data directly into your applications
                    </Text>
                  </VStack>
                </Card.Body>
              </Card.Root>

              <Card.Root bg="whiteAlpha.200" backdropBlur="md" border="1px solid" borderColor="whiteAlpha.300">
                <Card.Body textAlign="center" py={8}>
                  <VStack gap={4}>
                    <Box p={3} bg="pink.500" rounded="full">
                      <Eye size={24} color="white" />
                    </Box>
                    <Text fontWeight="bold" color="white" fontSize="sm">
                      Public Transparency
                    </Text>
                    <Text color="whiteAlpha.800" fontSize="xs" textAlign="center">
                      Embeddable widgets for public reserve verification
                    </Text>
                  </VStack>
                </Card.Body>
              </Card.Root>

              <Card.Root bg="whiteAlpha.200" backdropBlur="md" border="1px solid" borderColor="whiteAlpha.300">
                <Card.Body textAlign="center" py={8}>
                  <VStack gap={4}>
                    <Box p={3} bg="teal.500" rounded="full">
                      <Zap size={24} color="white" />
                    </Box>
                    <Text fontWeight="bold" color="white" fontSize="sm">
                      Instant Webhooks
                    </Text>
                    <Text color="whiteAlpha.800" fontSize="xs" textAlign="center">
                      Real-time notifications to your systems and workflows
                    </Text>
                  </VStack>
                </Card.Body>
              </Card.Root>
            </SimpleGrid>

            {/* Bottom Stats */}
            <Box mt={8} p={6} bg="whiteAlpha.200" rounded="xl" backdropBlur="md">
              <Grid templateColumns="repeat(3, 1fr)" gap={6} textAlign="center">
                <VStack gap={2}>
                  <Text fontSize="2xl" fontWeight="bold" color="white">
                    99.9%
                  </Text>
                  <Text fontSize="xs" color="whiteAlpha.800">
                    Accuracy Rate
                  </Text>
                </VStack>
                <VStack gap={2}>
                  <Text fontSize="2xl" fontWeight="bold" color="white">
                    &lt;5s
                  </Text>
                  <Text fontSize="xs" color="whiteAlpha.800">
                    Alert Latency
                  </Text>
                </VStack>
                <VStack gap={2}>
                  <Text fontSize="2xl" fontWeight="bold" color="white">
                    24/7
                  </Text>
                  <Text fontSize="xs" color="whiteAlpha.800">
                    Monitoring
                  </Text>
                </VStack>
              </Grid>
            </Box>
          </Box>
        </Grid>

        {/* Bottom CTA */}
        <VStack gap={6} textAlign="center" mt={16}>
          <Heading size="xl" color="white">
            Ready to Revolutionize Your Reserve Management?
          </Heading>
          <Text fontSize="lg" color="whiteAlpha.900" maxW="2xl">
            Join leading financial institutions who trust Fact Finance for continuous, automated reserve verification.
          </Text>
          <HStack>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill="#F59E0B" color="#F59E0B" />
            ))}
          </HStack>
          <Text color="whiteAlpha.800" fontSize="sm">
            Rated 5/5 by our enterprise clients
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};
