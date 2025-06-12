import { Container, HStack, VStack, Heading, Text, Stack, Button, Link as ChakraLink } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { Clock, CheckCircle, ArrowUpRight, FileCheck, Shield, Globe } from 'lucide-react';
import {} from '@chakra-ui/react';
import { Users } from 'lucide-react';

export const CTA = () => {
  return (
    <Container maxW="5xl" position="relative" zIndex={1}>
      <VStack gap={10} textAlign="center">
        <Box p={4} bg="whiteAlpha.200" rounded="full">
          <Shield size={48} />
        </Box>
        <Heading size="3xl" fontWeight="800">
          Strengthen trust in your digital asset
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
  );
};
