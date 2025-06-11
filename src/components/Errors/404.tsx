
import { Button, Heading, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

export function Component() {
  const navigate = useNavigate();
  return (
    <VStack>
      <Heading>Página não encontrada</Heading>
      <Button onClick={() => navigate('/')}>
        Pagina inicial
      </Button>
    </VStack>
  );
}
