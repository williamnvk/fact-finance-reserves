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
  Link as ChakraLink,
  Spinner,
  Center,
  Progress,
  SimpleGrid,
} from '@chakra-ui/react';
import { Link } from 'react-router';
import {
  ArrowRight,
  Shield,
  Clock,
  CheckCircle,
  TrendingUp,
  Eye,
  Lock,
  BarChart3,
  AlertTriangle,
  FileCheck,
  Users,
  Globe,
  Zap,
} from 'lucide-react';
import { formatLargeNumber } from '@/lib/utils';

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
    document.title = 'Fact Finance - Proof of Reserves Auditing';
  }, []);

  if (!loaded) {
    return (
      <Center h="100vh">
        <VStack gap={4}>
          <Spinner size="xl" color="blue.500" />
          <Text color="bg.panel0">Carregando dados de auditoria...</Text>
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
      {/* Hero Section - Redesigned as Auditing Focus */}
      <Box
        bgGradient="linear(to-br, gray.900, blue.900, indigo.900)"
        color="white"
        py={20}
        position="relative"
        overflow="hidden"
      >
        {/* Background Pattern */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          opacity={0.1}
          bgSize="60px 60px"
          bgImage="radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)"
        />

        <Container maxW="7xl" position="relative" zIndex={1}>
          <Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={12} alignItems="center">
            <VStack align="flex-start" gap={6}>
              <Badge colorScheme="blue" size="lg" px={4} py={2} rounded="full" textTransform="none" fontSize="sm">
                <Shield size={16} style={{ marginRight: '8px' }} />
                Auditoria Certificada em Blockchain
              </Badge>

              <Heading size="4xl" lineHeight="shorter" bgGradient="linear(to-r, white, blue.200)" bgClip="text">
                Auditoria de Reservas{' '}
                <Text as="span" color="blue.300">
                  em Tempo Real
                </Text>
              </Heading>

              <Text fontSize="xl" color="whiteAlpha.800" maxW="600px">
                A <strong>Fact Finance</strong> é a empresa líder em auditoria independente de Proof of Reserves para
                ativos tokenizados, oferecendo transparência total e verificação contínua para o ecossistema Web3.
              </Text>

              <SimpleGrid columns={3} gap={6} w="full">
                <VStack align="flex-start" gap={1}>
                  <Text fontSize="2xl" fontWeight="bold">
                    R$ {formatLargeNumber(totalReserves)}
                  </Text>
                  <Text fontSize="sm" color="whiteAlpha.700">
                    Em Reservas Auditadas
                  </Text>
                </VStack>
                <VStack align="flex-start" gap={1}>
                  <Text fontSize="2xl" fontWeight="bold">
                    {clients.length}+
                  </Text>
                  <Text fontSize="sm" color="whiteAlpha.700">
                    Clientes Auditados
                  </Text>
                </VStack>
                <VStack align="flex-start" gap={1}>
                  <Text fontSize="2xl" fontWeight="bold">
                    24/7
                  </Text>
                  <Text fontSize="sm" color="whiteAlpha.700">
                    Monitoramento
                  </Text>
                </VStack>
              </SimpleGrid>

              <HStack gap={4} flexWrap="wrap">
                <ChakraLink href="mailto:por@fact.finance">
                  <Button size="lg" colorScheme="blue" px={8}>
                    <Users size={16} style={{ marginRight: '8px' }} />
                    Solicitar Auditoria
                  </Button>
                </ChakraLink>
                <ChakraLink href="https://docs.fact.finance/features/por/">
                  <Button size="lg" variant="outline" colorScheme="whiteAlpha" px={8}>
                    <FileCheck size={16} style={{ marginRight: '8px' }} />
                    Documentação Técnica
                  </Button>
                </ChakraLink>
              </HStack>
            </VStack>

            {/* Stats Card */}
            <Box
              bg="whiteAlpha.100"
              backdropFilter="blur(10px)"
              p={6}
              rounded="lg"
              borderWidth="1px"
            >
              <VStack gap={4}>
                <HStack justify="space-between" w="full">
                  <Text color="whiteAlpha.800">Status do Sistema</Text>
                  <Badge colorScheme="green" variant="solid">
                    <CheckCircle size={12} style={{ marginRight: '4px' }} />
                    Operacional
                  </Badge>
                </HStack>

                <Box h="1px" bg="whiteAlpha.200" w="full" />

                <SimpleGrid columns={2} gap={4} w="full">
                  <Box>
                    <Text fontSize="sm" color="whiteAlpha.700">
                      Uptime
                    </Text>
                    <Text fontSize="xl" fontWeight="bold" color="green.300">
                      99.9%
                    </Text>
                  </Box>
                  <Box>
                    <Text fontSize="sm" color="whiteAlpha.700">
                      Última Verificação
                    </Text>
                    <Text fontSize="md" fontWeight="bold" color="white">
                      Há 2 min
                    </Text>
                  </Box>
                </SimpleGrid>

                <Box w="full">
                  <Text fontSize="sm" color="whiteAlpha.700" mb={2}>
                    Confiabilidade dos Dados
                  </Text>
                  <Progress.Root value={99.9}>
                    <Progress.Track>
                      <Progress.Range />
                    </Progress.Track>
                    <Progress.Label>Confiabilidade dos Dados</Progress.Label>
                    <Progress.ValueText>99.9%</Progress.ValueText>
                  </Progress.Root>
                </Box>
              </VStack>
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* Trust Indicators */}
      <Box bg="bg.panel" py={12}>
        <Container maxW="7xl">
          <VStack gap={8} textAlign="center">
            <Text fontSize="sm" color="bg.panel0" textTransform="uppercase" letterSpacing="wider">
              Tecnologia de Ponta para Auditoria Transparente
            </Text>

            <SimpleGrid columns={{ base: 2, md: 4 }} gap={8} w="full">
              <VStack>
                <Eye size={32} color="#3182CE" />
                <Text fontWeight="semibold">Transparência Total</Text>
              </VStack>
              <VStack>
                <Zap size={32} color="#DD6B20" />
                <Text fontWeight="semibold">Tempo Real</Text>
              </VStack>
              <VStack>
                <Lock size={32} color="#38A169" />
                <Text fontWeight="semibold">Segurança Máxima</Text>
              </VStack>
              <VStack>
                <Globe size={32} color="#805AD5" />
                <Text fontWeight="semibold">Padrão Global</Text>
              </VStack>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Audited Clients Section - Redesigned */}
      <Box as="section" py={20}>
        <Container maxW="7xl">
          <VStack gap={12} textAlign="center" mb={16}>
            <VStack gap={4}>
              <Badge colorScheme="blue" size="lg" px={4} py={2} rounded="full">
                Portfólio de Auditoria
              </Badge>
              <Heading size="2xl">
                Empresas que{' '}
                <Text as="span" color="blue.500">
                  Confiam
                </Text>{' '}
                em Nossa Auditoria
              </Heading>
              <Text fontSize="lg" color="gray.600" maxW="600px">
                Verificação independente e contínua de reservas para os maiores players do mercado de ativos tokenizados
              </Text>
            </VStack>
          </VStack>

          <Grid templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }} gap={8}>
            {clients.map((client, index) => {
              const latestData = client.historicalData[client.historicalData.length - 1];
              const reserveRatio = ((latestData.reserves / latestData.reserves) * 100).toFixed(1);

              return (
                <Box
                  key={index}
                  bg="bg.panel"
                  border="2px solid"
                  borderColor="gray.100"
                  rounded="lg"
                  p={8}
                  shadow="lg"
                  _hover={{ shadow: '2xl', transform: 'translateY(-4px)' }}
                  transition="all 0.3s"
                >
                  {/* Header */}
                  <Flex justify="space-between" align="flex-start" mb={6}>
                    <HStack gap={4}>
                      <Image
                        src={client.logo}
                        alt={client.companyName}
                        boxSize="50px"
                        objectFit="contain"
                        bg="bg.panel"
                        rounded="lg"
                        p={2}
                      />
                      <VStack align="flex-start" gap={1}>
                        <Heading size="lg">{client.companyName}</Heading>
                        <Badge colorScheme="blue" variant="subtle">
                          {client.type}
                        </Badge>
                      </VStack>
                    </HStack>
                    <Badge colorScheme="green" variant="solid" p={2} rounded="lg">
                      <CheckCircle size={12} style={{ marginRight: '4px' }} />
                      Auditado
                    </Badge>
                  </Flex>

                  {/* Metrics */}
                  <SimpleGrid columns={2} gap={6} mb={6}>
                    <Box>
                      <Text fontSize="sm" color="bg.panel0">
                        Reservas Totais
                      </Text>
                      <Text fontSize="2xl" fontWeight="bold" color="green.500">
                        R$ {formatLargeNumber(latestData.reserves)}
                      </Text>
                      <Text fontSize="sm" color="gray.400">
                        <TrendingUp size={12} style={{ display: 'inline', marginRight: '4px' }} />
                        Verificado em tempo real
                      </Text>
                    </Box>

                    <Box>
                      <Text fontSize="sm" color="bg.panel0">
                        Taxa de Reserva
                      </Text>
                      <Text fontSize="2xl" fontWeight="bold" color="blue.500">
                        {reserveRatio}%
                      </Text>
                      <Text fontSize="sm" color="gray.400">
                        <Shield size={12} style={{ display: 'inline', marginRight: '4px' }} />
                        Totalmente lastreado
                      </Text>
                    </Box>
                  </SimpleGrid>

                  <Box h="1px" bg="gray.200" mb={6} />

                  {/* Audit Info */}
                  <VStack gap={3} align="stretch" mb={6}>
                    <HStack justify="space-between" fontSize="sm">
                      <Text color="bg.panel0">Última Auditoria:</Text>
                      <Text fontWeight="medium">{latestData.date}</Text>
                    </HStack>
                    <HStack justify="space-between" fontSize="sm">
                      <Text color="bg.panel0">Frequência de Verificação:</Text>
                      <Text fontWeight="medium">{client.heartbeat}</Text>
                    </HStack>
                    <HStack justify="space-between" fontSize="sm">
                      <Text color="bg.panel0">Status:</Text>
                      <Badge colorScheme="green" size="sm">
                        <CheckCircle size={10} style={{ marginRight: '4px' }} />
                        Conforme
                      </Badge>
                    </HStack>
                  </VStack>

                  {/* CTA */}
                  <ChakraLink as={Link} to={client.companyName.toLowerCase()}>
                    <Button
                      variant="outline"
                      size="lg"
                      w="full"
                      rightIcon={<ArrowRight size={16} />}
                      _hover={{ bg: 'blue.50', borderColor: 'blue.300' }}
                    >
                      Ver Relatório Completo
                    </Button>
                  </ChakraLink>
                </Box>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* Our Auditing Process */}
      <Box as="section" py={20} bg="bg.panel">
        <Container maxW="7xl">
          <VStack gap={12} textAlign="center" mb={16}>
            <VStack gap={4}>
              <Badge colorScheme="purple" size="lg" px={4} py={2} rounded="full">
                Metodologia de Auditoria
              </Badge>
              <Heading size="2xl">
                Como{' '}
                <Text as="span" color="purple.500">
                  Auditamos
                </Text>{' '}
                suas Reservas
              </Heading>
              <Text fontSize="lg" color="gray.600" maxW="600px">
                Processo rigoroso e automatizado que garante a máxima confiabilidade e transparência dos dados
              </Text>
            </VStack>
          </VStack>

          <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap={8}>
            <Box bg="bg.panel" shadow="md" p={6} rounded="lg" textAlign="center">
              <VStack gap={4}>
                <Box bg="blue.100" p={4} rounded="full">
                  <Globe size={32} color="#3182CE" />
                </Box>
                <Heading size="md" color="blue.600">
                  Conexão Direta
                </Heading>
                <Text fontSize="sm" color="gray.600">
                  Integração direta com custódiários, instituições financeiras e sistemas de auditoria independentes
                </Text>
              </VStack>
            </Box>

            <Box bg="bg.panel" shadow="md" p={6} rounded="lg" textAlign="center">
              <VStack gap={4}>
                <Box bg="green.100" p={4} rounded="full">
                  <Clock size={32} color="#38A169" />
                </Box>
                <Heading size="md" color="green.600">
                  Monitoramento 24/7
                </Heading>
                <Text fontSize="sm" color="gray.600">
                  Verificação contínua e automática, com dados atualizados e sincronizados com operações on-chain
                </Text>
              </VStack>
            </Box>

            <Box bg="bg.panel" shadow="md" p={6} rounded="lg" textAlign="center">
              <VStack gap={4}>
                <Box bg="purple.100" p={4} rounded="full">
                  <BarChart3 size={32} color="#805AD5" />
                </Box>
                <Heading size="md" color="purple.600">
                  Análise Avançada
                </Heading>
                <Text fontSize="sm" color="gray.600">
                  Algoritmos proprietários detectam discrepâncias e geram alertas automáticos para máxima segurança
                </Text>
              </VStack>
            </Box>

            <Box bg="bg.panel" shadow="md" p={6} rounded="lg" textAlign="center">
              <VStack gap={4}>
                <Box bg="orange.100" p={4} rounded="full">
                  <FileCheck size={32} color="#DD6B20" />
                </Box>
                <Heading size="md" color="orange.600">
                  Relatórios Públicos
                </Heading>
                <Text fontSize="sm" color="gray.600">
                  Dashboards transparentes e relatórios auditáveis, disponíveis publicamente para máxima transparência
                </Text>
              </VStack>
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* Advanced Features Section */}
      <Box as="section" py={20}>
        <Container maxW="7xl">
          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={16} alignItems="center">
            <VStack align="flex-start" gap={6}>
              <Badge colorScheme="red" size="lg" px={4} py={2} rounded="full">
                Recursos Avançados
              </Badge>

              <Heading size="2xl">
                Auditoria{' '}
                <Text as="span" color="red.500">
                  Programável
                </Text>
                e Automatizada
              </Heading>

              <Text fontSize="lg" color="gray.600">
                Nossa plataforma oferece recursos avançados que tornam a verificação de reservas completamente
                automatizada e programável.
              </Text>

              <VStack gap={4} align="flex-start" w="full">
                <HStack>
                  <Lock size={20} color="#E53E3E" />
                  <Text>
                    <strong>Bloqueios de Emissão:</strong> Pausas automáticas quando detectadas inconsistências
                  </Text>
                </HStack>
                <HStack>
                  <AlertTriangle size={20} color="#DD6B20" />
                  <Text>
                    <strong>Alertas Inteligentes:</strong> Notificações em tempo real sobre discrepâncias
                  </Text>
                </HStack>
                <HStack>
                  <BarChart3 size={20} color="#3182CE" />
                  <Text>
                    <strong>Dashboards Personalizados:</strong> Visualizações customizadas para cada cliente
                  </Text>
                </HStack>
                <HStack>
                  <Shield size={20} color="#38A169" />
                  <Text>
                    <strong>Conformidade Regulatória:</strong> Atendimento a padrões internacionais
                  </Text>
                </HStack>
              </VStack>
            </VStack>

            <Box bgGradient="linear(to-br, red.500, orange.600)" color="white" p={8} rounded="lg">
              <VStack gap={6} align="flex-start">
                <TrendingUp size={48} />
                <Heading size="lg">Stablecoins com Confiança Total</Heading>
                <Text>
                  Para stablecoins, oferecemos um dashboard dinâmico que conecta dados de custódiários com monitoramento
                  on-chain, garantindo verificação independente de 100% do lastro.
                </Text>
                <Text fontSize="sm" opacity={0.9}>
                  Frequência de atualizações, detecção de inconsistências e transparência pública para emissores,
                  reguladores e investidores.
                </Text>
              </VStack>
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box as="section" py={20} bgGradient="linear(to-r, blue.600, indigo.700)" color="white">
        <Container maxW="4xl" textAlign="center">
          <VStack gap={8}>
            <Shield size={64} style={{ opacity: 0.8 }} />
            <Heading size="2xl">Fortaleça a Confiança no seu Ativo Digital</Heading>
            <Text fontSize="xl" opacity={0.9} maxW="600px">
              Descubra como a Fact Finance pode trazer mais transparência, segurança e credibilidade para seus tokens
              tokenizados.
            </Text>

            <HStack gap={6} flexDir={{ base: 'column', sm: 'row' }}>
              <ChakraLink href="mailto:por@fact.finance">
                <Button size="xl" colorScheme="white" variant="solid" px={10} py={6}>
                  <Users size={16} style={{ marginRight: '8px' }} />
                  Solicitar Consultoria
                </Button>
              </ChakraLink>
              <ChakraLink href="https://docs.fact.finance/features/por/">
                <Button size="xl" variant="outline" colorScheme="whiteAlpha" px={10} py={6}>
                  <FileCheck size={16} style={{ marginRight: '8px' }} />
                  Documentação Técnica
                </Button>
              </ChakraLink>
            </HStack>

            <Text fontSize="sm" opacity={0.7} mt={4}>
              Auditoria certificada • Disponível 24/7 • Padrões internacionais
            </Text>
          </VStack>
        </Container>
      </Box>
    </>
  );
};

export default Home;
