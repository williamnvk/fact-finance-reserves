import { Box, Container, Heading, Text, Grid, VStack, HStack, Badge } from '@chakra-ui/react';
import { Shield, TrendingUp, Lock, BarChart3, AlertTriangle, Sparkles, Star } from 'lucide-react';

export const AdvancedFeaturesSection = () => {
  return (
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
            Our platform offers advanced features that make reserve verification completely automated and programmable.
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
            Update frequency, inconsistency detection and public transparency for issuers, regulators and investors.
          </Text>
          <HStack>
            <Star size={16} />
            <Star size={16} />
            <Star size={16} />
            <Star size={16} />
            <Star size={16} />
          </HStack>
        </VStack>
      </Grid>
    </Container>
  );
};
