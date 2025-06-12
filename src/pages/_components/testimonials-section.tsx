import {
  Container,
  VStack,
  Heading,
  Text,
  Badge,
  Box,
  SimpleGrid,
  Card,
  HStack,
} from '@chakra-ui/react';
import { MessageSquare, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Maria Rodriguez",
    role: "Chief Financial Officer",
    company: "Tokeniza Digital",
    avatar: "/api/placeholder/60/60",
    quote: "Fact Finance has revolutionized how we approach reserve verification. The real-time monitoring gives us and our investors complete confidence in our tokenized assets.",
    rating: 5
  },
  {
    name: "John Chen",
    role: "Head of Risk Management", 
    company: "Scenium Labs",
    avatar: "/api/placeholder/60/60",
    quote: "The automated compliance reporting has saved us countless hours while providing unprecedented transparency. Our regulators love the detailed audit trails.",
    rating: 5
  },
  {
    name: "Sarah Williams",
    role: "CEO",
    company: "Avenia Holdings",
    avatar: "/api/placeholder/60/60",
    quote: "Moving from quarterly audits to continuous verification was a game-changer. We can now offer our clients true peace of mind with 24/7 proof of reserves.",
    rating: 5
  }
];

export const TestimonialsSection = () => {
  return (
    <Container maxW="7xl" py={20}>
      <VStack gap={12}>
        <VStack gap={6} textAlign="center">
          <Badge size="lg" colorPalette="success" px={4} py={2} rounded="full">
            <MessageSquare size={16} style={{ marginRight: '8px' }} />
            Client success stories
          </Badge>
          <Heading fontSize="4xl" color="white" maxW="3xl">
            Trusted by{' '}
            <Text as="span" bgImage="linear-gradient(35deg, {colors.brand.500}, {colors.brand.400})" bgClip="text">
              industry leaders
            </Text>{' '}
            worldwide
          </Heading>
          <Text fontSize="lg" maxW="3xl">
            See how leading financial institutions are transforming their reserve verification with Fact Finance
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8} w="full">
          {testimonials.map((testimonial, index) => (
            <Card.Root key={index} bg="white" shadow="lg" border="1px solid" borderColor="gray.200" h="full">
              <Card.Body p={8}>
                <VStack gap={6} align="stretch" h="full">
                  <HStack gap={1}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
                    ))}
                  </HStack>
                  
                  <Box position="relative">
                    <Text color="gray.700" lineHeight="1.7" fontSize="md" fontStyle="italic">
                      "{testimonial.quote}"
                    </Text>
                  </Box>
                  
                  <Box mt="auto">
                    <HStack gap={4}>
                      <Box
                        boxSize="50px"
                        rounded="full"
                        bg="brand.100"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        color="brand.600"
                        fontWeight="bold"
                      >
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </Box>
                      <VStack align="flex-start" gap={0}>
                        <Text fontWeight="bold" color="gray.800" fontSize="sm">
                          {testimonial.name}
                        </Text>
                        <Text color="gray.600" fontSize="xs">
                          {testimonial.role}
                        </Text>
                        <Text color="brand.600" fontSize="xs" fontWeight="medium">
                          {testimonial.company}
                        </Text>
                      </VStack>
                    </HStack>
                  </Box>
                </VStack>
              </Card.Body>
            </Card.Root>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
}; 