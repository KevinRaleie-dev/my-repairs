import React from 'react'
import { 
Container, 
Text, 
Box, 
Stack, 
HStack, 
PinInput, 
PinInputField, 
Flex, 
Center, 
Button
} from '@chakra-ui/react'

import { useRouter } from 'next/router'

import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { BackButton } from '../../../../components/ui/BackButton'
import { Nav } from '../../../../components/ui/Nav'

const Verification = () => {

  const router = useRouter();  

  return (
    <div>
        <Nav />
        <Container
        h='100vh'
        marginTop={10}
        >
            <Stack spacing={5}>
                <Flex
                alignItems="center"
                >                
                    <BackButton href="/Onboarding" />
                    <Text
                    fontSize="2xl"
                    ml={2}
                    >
                        Verification
                    </Text>
                </Flex>
                <Text
                color="gray.600"
                >
                    Please enter the code we just sent to your email address to complete the verification process.
                </Text>
                <Center>
                    <HStack>
                        <PinInput size="lg" mask otp>
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                        </PinInput>
                    </HStack>                
                </Center>
            </Stack>
            <Center mt={6}>
                <Button
                _active={{
                    transform: 'scale(0.9)',
                }}
                rightIcon={<FiArrowRight />}
                onClick={() => router.push('/Onboarding/profile_setup')}
                height={50}
                width={400}
                colorScheme="#D7345B"
                bgColor="#D7345B"
                >
                    Continue
                </Button>
            </Center>

            <footer>
                <Box
                w="100%"
                left={0}
                bottom={0}
                position='fixed'
                p={5}            
                >
                    <Text
                    align='center'
                    mb={5}
                    fontWeight="semibold"
                    >
                        Having trouble with the verification process? <span
                        style={{
                            color: '#D7345B',
                        }}
                        >Get Help</span>
                    </Text>            
                </Box>
            </footer>
        </Container>
    </div>
  )
}

export default Verification