
import { Button, Heading, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

export function Component() {
  const navigate = useNavigate();
  return (
    <VStack>
      <Heading>Houve um erro no servidor</Heading>
      <Button onClick={() => navigate('/')}>
        Pagina inicial
      </Button>
    </VStack>
  );
}
