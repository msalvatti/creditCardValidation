import Head from 'next/head'
import Image from 'next/image'
import { Box, Flex, Input, Button, Icon, useToast } from '@chakra-ui/react';
import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import { useState, ChangeEvent } from "react";
import { validateCard } from '../api/api';

export default function Home() {
  const [cardNumber, setCardNumber] = useState('');
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const toast = useToast();

  const handleValidation = async () => {
    try {
      const response = await validateCard(cardNumber);
      setIsValid(response.isValid);
    } catch (error) {
      setIsValid(false);
      toast({
        title: 'Error',
        description: 'An error occurred while validating the card.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue: string = e.target.value;
    
    setIsValid(null);
  
    const cleanedInputValue: string = inputValue.replace(/\D/g, '');
  
    const formattedInputValue: string = cleanedInputValue.replace(/(\d{4})/g, '$1 ').trim();
  
    if (/^\d{0,4}(\s\d{0,4}){0,3}$/.test(formattedInputValue)) {
      setCardNumber(formattedInputValue);
    }
  };


  return (
    <>
      <Head>
        <title>Project Broadcast</title>
        <meta name="description" content="Project Broadcast" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Box bg="black" height="100vh" width="100%">
        <Flex justifyContent="space-between" flexDirection="column" alignItems="center">
          <Flex flex="1" mt="5" ml={10} width="100%" justifyContent="center" flexDirection="column" alignItems="flex-start">
            <Image src="/logo.png" alt="ProjectBroadcast" width={200} height={100} />
          </Flex>
        </Flex>

        <Flex justifyContent="center" width="100%" flexDirection="row" alignItems="center" mt={10}>
          <Box bg="white" p={6} borderRadius="md" boxShadow="md" position="relative"
            width="500px"
            overflow="hidden"
          >
            <Flex alignItems="center">
              <Input
                type="text"
                placeholder="Enter the credit card number"
                value={cardNumber}
                onChange={handleInputChange}
                isInvalid={isValid === false}
                width="300px"
              />

              <Button colorScheme="teal" ml={4} onClick={handleValidation}>
                Validate
              </Button>

              {isValid !== null && cardNumber && (
                <Icon
                  mt={2}
                  color={isValid ? 'green.500' : 'red.500'}
                  as={isValid ? CheckIcon : CloseIcon}
                  boxSize={5}
                  ml={4}
                />
              )}
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  )
}
