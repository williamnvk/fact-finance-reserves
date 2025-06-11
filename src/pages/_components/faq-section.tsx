import { Container, VStack, Heading, Text, Badge, Box } from '@chakra-ui/react';
import { HelpCircle } from 'lucide-react';
import { AccordionRoot, AccordionItem, AccordionItemTrigger, AccordionItemContent } from '../../components/ui/accordion';

const faqs = [
  {
    question: 'What is Proof of Reserves (PoR)?',
    answer:
      'Proof of Reserves is a cryptographic verification method that demonstrates an exchange or financial institution holds sufficient assets to cover all customer deposits. Unlike traditional audits, our PoR system provides real-time, continuous verification of reserves.',
  },
  {
    question: 'How often are reserves verified?',
    answer:
      'Our system performs continuous verification 24/7, updating every few minutes. This is significantly more frequent than traditional quarterly audits, ensuring your reserves are always properly backed and monitored.',
  },
  {
    question: 'What happens if discrepancies are detected?',
    answer:
      'Our automated system immediately triggers alerts and can pause token issuance if configured. Notifications are sent to all stakeholders, and detailed reports are generated to help identify and resolve issues quickly.',
  },
  {
    question: 'How does this differ from traditional audits?',
    answer:
      'Traditional audits provide quarterly snapshots based on manual reporting. Our system offers real-time monitoring through direct API connections with custodians, providing continuous transparency and immediate discrepancy detection.',
  },

  {
    question: 'Can clients customize their audit parameters?',
    answer:
      'Yes, clients can configure monitoring frequency, alert thresholds, compliance requirements, and dashboard visualizations to meet their specific needs and regulatory requirements.',
  },
  {
    question: 'Is the audit data publicly accessible?',
    answer:
      'Yes, we provide public dashboards that display real-time reserve data while maintaining client confidentiality. This transparency builds trust with users and regulatory bodies.',
  },
  {
    question: 'What types of assets can be audited?',
    answer:
      'We support all major cryptocurrencies, stablecoins, tokenized assets, and traditional financial instruments. Our system can adapt to new asset types as the market evolves.',
  },
];

export const FAQSection = () => {
  return (
    <Box  py={16}>
      <Container maxW="4xl">
        <VStack gap={12}>
          <VStack gap={6} textAlign="center">
            <Badge size="lg" colorPalette="brand" px={4} py={2} rounded="full">
              <HelpCircle size={16} style={{ marginRight: '8px' }} />
              Frequently Asked Questions
            </Badge>
            <Heading fontSize="4xl" maxW="2xl" lineHeight="1.2">
              Everything You Need to Know About{' '}
              <Text as="span" bgImage="linear-gradient(35deg, {colors.brand.500}, {colors.brand.400})" bgClip="text">
                Proof of Reserves
              </Text>
            </Heading>
            <Text fontSize="lg" maxW="1xl">
              Get answers to the most common questions about our real-time audit platform
            </Text>
          </VStack>

          <AccordionRoot 
            collapsible 
            variant="enclosed" 
            w="full" 
            bg="white"
          >
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={index.toString()}>
                <AccordionItemTrigger 
                  py={6} 
                  px={6}
                  _hover={{ bg: "gray.50" }}
                  borderBottom="1px solid"
                  borderColor="gray.100"
                  _last={{ borderBottom: "none" }}
                >
                  <Text fontWeight="semibold" color="gray.800" fontSize="md">
                    {faq.question}
                  </Text>
                </AccordionItemTrigger>
                <AccordionItemContent px={6} pb={6}>
                  <Text color="gray.600" lineHeight="1.6" fontSize="sm">
                    {faq.answer}
                  </Text>
                </AccordionItemContent>
              </AccordionItem>
            ))}
          </AccordionRoot>
        </VStack>
      </Container>
    </Box>
  );
};
