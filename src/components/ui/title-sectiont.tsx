import { chakra, VStack } from '@chakra-ui/react';

export const TitleSection = chakra(VStack, {
  base: {
    w: "full",
    my: { base: 6, md: 12 },
    gap: { base: 2, md: 4 },
    alignItems: {
      base: "flex-start",
      md: "center"
    },
    justifyContent: {
      base: "flex-start",
      md: "center"
    }
  },
});
