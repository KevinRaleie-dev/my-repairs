import {
    Box, Button, Center, Container, Flex, HStack,
    PinInput,
    PinInputField, Stack, Text
} from '@chakra-ui/react'

import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { FiArrowRight } from 'react-icons/fi'
import { useMutation, useQuery } from 'react-query'
import { BackButton } from '../../../components/ui/BackButton'
import { Nav } from '../../../components/ui/Nav'
import { meQuery, sendVerificationCode, verifyOTP } from '../../../src/api-calls'

type FormInputProps = {
    input1: string
    input2: string
    input3: string
    input4: string
    input5: string
    input6: string
}

type VerifyProps = {
    code: string
    phoneNumber: string
}

const Verification = () => {
  const [showError, setShowError] = useState<boolean>(false)
  const { register, handleSubmit } = useForm<FormInputProps>()
  const verifyMutation = useMutation(async (data: VerifyProps) => {
    return await verifyOTP(data.phoneNumber, data.code);
  })
  const { data: me, isLoading } = useQuery('me-query', meQuery)
  const router = useRouter();  

  const onSubmit =  async (data: FormInputProps) => {
    const code = `${data.input1}${data.input2}${data.input3}${data.input4}${data.input5}${data.input6}`
    
    const verified = await verifyMutation.mutateAsync({
        code,
        phoneNumber: me?.data?.phone || me?.data?.emailOrPhone // because of the customer model ☹️
    })

    if (verified?.data?.status === 'approved') {
        router.push('/auth/profile_setup/done')        
    }
    else {
        setShowError(prev => !prev)
    }
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
        <Nav />
        <Container
        h='100vh'
        marginTop={10}
        >
            <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={8}>
                <Flex
                alignItems="center"
                >                
                    <BackButton />
                    <Text
                    fontSize="2xl"
                    ml={2}
                    fontWeight="medium"
                    >
                        Verification
                    </Text>
                </Flex>
                <Text
                align="center"
                
                color="gray.600"
                >
                    Please enter the code we just sent to your phone number to complete the verification process.
                </Text>
                <Center>
                    <HStack>
                            <PinInput size="lg" mask otp>
                                <PinInputField 
                                {...register('input1')}
                                />
                                <PinInputField 
                                {...register('input2')}
                                />
                                <PinInputField 
                                {...register('input3')}
                                />
                                <PinInputField 
                                {...register('input4')}
                                />
                                <PinInputField 
                                {...register('input5')}
                                />
                                <PinInputField 
                                {...register('input6')}
                                />
                            </PinInput>
                    </HStack>                
                </Center>
            </Stack>
            <Center mt={6}>
                <Button
                isLoading={verifyMutation.isLoading}
                type="submit"
                _active={{
                    transform: 'scale(0.9)',
                }}
                rightIcon={<FiArrowRight />}                
                height={50}
                width={400}
                borderRadius="full"
                colorScheme="#D7345B"
                bgColor="#D7345B"
                >
                    Continue
                </Button>
            </Center>
            <Flex 
            display={showError ? 'flex' : 'none'}
            fontSize="sm"
            justifyContent="space-between"
            mt={4}
            color="gray.600"
            >
                <Text>
                    Invalid code or you took too long.
                </Text>
                <Text cursor="pointer" color="purple.900" fontWeight="medium" onClick={() => sendVerificationCode(me?.data?.phone)}>                    
                    Resend code
                </Text>
            </Flex>
            </form>
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