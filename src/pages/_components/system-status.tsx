import { Badge, Center, HStack, Icon, Text } from '@chakra-ui/react';
import { Activity, CheckCircle, Server } from 'lucide-react';

export const SystemStatus = () => {
  return (
    <HStack
      w="full"
      justify="space-between"
      align="center"
      p={4}
      rounded="full"
      borderWidth="1px"
      borderColor="whiteAlpha.100"
      bg="whiteAlpha.50"
      backdropFilter="blur(10px)"
      fontSize="xs"
      color="whiteAlpha.800"
      maxW="2xl"
      mx="auto"
    >
      {/* Status principal */}
      <HStack gap={2} align="center">
        <Icon as={CheckCircle} size="md" color="success.fg" />
        <Text fontWeight="medium" color="white">
          System Status
        </Text>
        <Badge colorPalette="success" variant="solid" size="xs" px={2} rounded="full">
          Live
        </Badge>
      </HStack>

      {/* Separador visual */}
      <Center ml={1} w="6px" h="6px" bg="success.fg" animation="pulse 2s infinite" rounded="full"></Center>

      {/* Métricas em linha */}
      <HStack gap={4} align="center" flex={1} justify="end">
        <HStack gap={1} align="center">
          <Icon as={Activity} size="md" color="success.fg" />
          <Text>
            System Check{` `}
            <Text as="span" color="success.300" fontWeight="medium">
              2min
            </Text>
          </Text>
        </HStack>

        <HStack gap={1} align="center">
          <Icon as={Server} size="md" color="success.fg" />
          <Text>
            Servers{` `}
            <Text as="span" color="success.300" fontWeight="medium">
              Ok
            </Text>
          </Text>
        </HStack>

        <Text>
          Uptime{' '}
          <Text as="span" color="success.300" fontWeight="medium">
            99.9%
          </Text>
        </Text>
      </HStack>
    </HStack>
  );
};
