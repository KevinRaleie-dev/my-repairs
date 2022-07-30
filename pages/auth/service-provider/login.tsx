import { Box, Text, Stack, FormControl, Input, Flex, InputGroup, InputRightElement, Button, ModalContent, Modal, ModalBody, ModalCloseButton, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Logo } from '../../../components/ui/Logo'
import { convertToObject } from '../../../src/utils/convertToObject';
import { setToken } from '../../../src/utils/token';
import { useRouter } from 'next/router';

type FormProps = {
    emailOrPhone: string;
    password: string;
}

async function handler(data: FormProps) {
    const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/service-provider/login`;
    try {
        const response =  await axios.post( url, {
            emailOrPhone: data.emailOrPhone,
            password: data.password
        });
        return response.data;
    } catch (error) {
        return error
    }
}

const LoginTechnician = () => {

  const [show, setShow] = React.useState<boolean>(false); 
  const [message, setMessage] = React.useState<string>('');
  const { isOpen, onClose, onOpen } = useDisclosure()
  const { register, handleSubmit, formState, setError } = useForm<FormProps>();
  const router = useRouter();

    const onSubmit = async (data: FormProps) => {
        const response = await handler(data); // move this into a useMutation hook

        console.log(response)

        // literally the same code as in the customer sign in but not working the same ???

        if (response?.response?.data?.success === false) {
            const errors = convertToObject(response.response.data.errors);
            Object.keys(errors).forEach(key => {
                setError(key as any, { message: errors[key] }, { shouldFocus: true })
            })
            return;     // why do i have to return early ??  
        }

        if (response?.isVerified === false) {
			setMessage(response?.message)
			onOpen()
        } else {
            setToken("mr-token", response?.token)
            router.push('/feed')
        }
    }

  return (
    <Box>
        <Head>
            <title>MyRepairs - Service Provider Login</title>
        </Head>
        <Logo />
        <Box
        display="grid"
        placeItems={["center"]}
        >
            <Text fontSize="2xl" fontWeight="bold" color="purple.900" maxW="sm" align="center">
                Log into your Service Provider account.
            </Text>
            <Box my={10}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={5}>
                        <FormControl>
                            <Input
                            {...register("emailOrPhone")}
                            aria-label='Email'               
                            type='text'
                            name='emailOrPhone'
                            fontWeight='medium'
                            placeholder='Enter email or phone number'
                            focusBorderColor='black'
                            _placeholder={{
                                fontWeight: 'medium',
                                fontSize: 'sm'
                            }}
                            borderWidth={1.5}
                            borderRadius={10}
                            />
                            {formState.errors.emailOrPhone && <Text fontSize="xs" color="red.500">{formState.errors.emailOrPhone.message}</Text>}
                        </FormControl>
                        <FormControl>
                            <Flex justifyContent="flex-end">
                                <Text fontSize="sm" color="gray.600" cursor="pointer">
                                    Forgot password?   
                                </Text>
                            </Flex>
                            <InputGroup>
                                <Input
                                {...register("password")}
                                aria-label='Email'               
                                type={show ? 'text' : 'password'}
                                name='password'
                                fontWeight='medium'
                                placeholder='Enter a password'
                                focusBorderColor='black'
                                _placeholder={{
                                    fontWeight: 'medium',
                                    fontSize: 'sm'
                                }}
                                borderWidth={1.5}
                                borderRadius={10}
                                />
                                <InputRightElement
                                onClick={() => setShow(!show)}
                                >
                                    {
                                        show ? <FiEye /> : <FiEyeOff />
                                    }
                                </InputRightElement>
                            </InputGroup>
                            {formState.errors.password && <Text fontSize="xs" color="red.500">{formState.errors.password.message}</Text>}
                        </FormControl>
                        <Button
                        type='submit'      
                        isLoading={formState.isSubmitting}                                                        
                        _focus={{ outline: 'none' }}
                        _hover={{ opacity: 0.9 }}
                        borderRadius='full'
                        color='white'
                        bgColor='#D7345B'
                        colorScheme='none'
                        px={10}
                        py={5}
                        >
                            Sign in
                        </Button>
                    </Stack>
                </form>
                <Flex mt={5} color="gray.600" justifyContent="space-between" alignItems="center" fontSize="sm">
                    <Text>
                        Don&apos;t have an account? 
                    </Text>
                    <Text color="purple" fontWeight="medium">
                        <Link href="/auth/service-provider/join" passHref>
                            Sign up
                        </Link>
                    </Text>
                </Flex>
            </Box>
            <Text bottom={0} maxW="md" fontSize="sm" color="gray.500" align="center">
                By continuing, you acknowledge that you have read and understood, and agree to MyRepairs Terms of Service and Privacy Policy.
            </Text>
        </Box>

        {/* verify modal */}
        <Modal        
        onClose={onClose} 
        isOpen={isOpen} 
        isCentered>
        <ModalOverlay />
        <ModalContent
        borderRadius={12}
        >
          <ModalHeader color="purple.900">Verification</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text
            fontSize="sm"
            fontWeight="medium"
            color="gray.500"
            >
                {message}
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button 
            colorScheme="none"
            color="white"
            bgColor="#D7345B"
            onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default LoginTechnician
