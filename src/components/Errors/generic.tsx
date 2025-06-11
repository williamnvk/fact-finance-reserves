import { Button, Heading, Text, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

export function Component() {
  let navigate = useNavigate();
  return (
    <VStack w="full" h="100vh" alignContent="center" justifyContent="center">
      <Heading textAlign="center">Ops...</Heading>
      <Text>Um erro inesperado aconteceu!</Text>
      <Button onClick={() => navigate('/')}>Voltar</Button>
    </VStack>
  );
}
