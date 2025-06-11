import { Container, Heading, Text, Grid, VStack, HStack, Badge, Center, Icon } from '@chakra-ui/react';
import { Shield, Eye, Lock, Globe, Zap } from 'lucide-react';
import { formatLargeNumber } from '@/lib/utils';
import { SystemStatus } from './system-status';

export const HomeHero = ({ totalReserves, clients }: { totalReserves: number; clients: any[] }) => {
  return (
    <>
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

          <VStack align="center" gap={4} w="full" my={16}>
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
    </>
  );
};
