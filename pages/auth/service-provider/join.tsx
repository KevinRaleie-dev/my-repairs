import { Avatar, AvatarGroup, Box, Button, Flex, FormControl, FormLabel, Input, InputGroup, InputRightElement, Stack, Text, useToast } from '@chakra-ui/react';
import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Logo } from '../../../components/ui/Logo';
import { convertToObject } from '../../../src/utils/convertToObject';
import { setToken } from '../../../src/utils/token'

type FormProps = {
    email: string;
    phone: string;
    password: string;
}

type Status = 'success' | 'error' | 'info' | 'warning';

async function handler(data: FormProps) {
    const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/service-provider/register`;
    try {
        const response =  await axios.post( url, {
            email: data.email,
            phone: data.phone,
            password: data.password,
            provider: 'email'
        });
        return response.data;
    } catch (error) {
        return error
    }
}

const Join = () => {
  const { register, handleSubmit, formState, setError } = useForm<FormProps>()
  const [show, setShow] = React.useState<boolean>(false);

  const router = useRouter();
  const toast = useToast();


  const handleToast = (title: string, description: string, status: Status) => {
    toast({
        title,
        description,
        status,
        duration: 9000,
        isClosable: true,
      })
  }

  const onSubmit = async (data: FormProps) => {
    const response = await handler(data);
    

    if (response?.response?.data?.errors.length > 0) {
        const errors = convertToObject(response?.response?.data?.errors);
        Object.keys(errors).forEach(key => {
            setError(key as any, { message: errors[key] }, { shouldFocus: true })
        })
    }

    if (response?.success) {
        console.log('successfully registered')
        setToken("provider-token", response.token)
        
        router.push('/service-provider/settings');
    }    
  }

  return (
    <Box>
        <Head>
            <title>MyRepairs | Service Provider Sign up</title>
        </Head>
        <Logo />
        <Box
        display="grid"
        placeItems={["center"]}
        >
            <AvatarGroup mb={3} size='sm' max={5}>
                <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />                
                <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />                
            </AvatarGroup>
            <Text
            align="center"
            fontSize="2xl"
            maxW="lg"
            fontWeight="bold"
            color="purple.900"
            >
                Join one of the largest service provider communities in South Africa. 
            </Text>
                        
            <Box as="main" my={8}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={5}>                                                    
                        <FormControl>
                            <FormLabel>Email address</FormLabel>
                            <Input
                            {...register("email", { required: true })}
                            aria-label='Email'               
                            type='email'
                            name='email'
                            fontWeight='medium'
                            placeholder='Enter your email address'
                            focusBorderColor='black'
                            _placeholder={{
                                fontWeight: 'medium',
                                fontSize: 'sm'
                            }}
                            borderWidth={1.5}
                            borderRadius={10}
                            />
							{formState.errors.email && <Text fontSize="sm" color="red">{formState.errors.email.message}</Text>}
                        </FormControl>
                        <FormControl>
                            <FormLabel>Phone number</FormLabel>
                            <Input
                            {...register("phone", { required: true })}
                            aria-label='Phone number'               
                            type='text'
                            name='phone'
                            fontWeight='medium'
                            placeholder='Enter your phone number'
                            focusBorderColor='black'
                            _placeholder={{
                                fontWeight: 'medium',
                                fontSize: 'sm'
                            }}
                            borderWidth={1.5}
                            borderRadius={10}
                            />
                            {formState.errors.phone && <Text fontSize="sm" color="red">{formState.errors.phone.message}</Text>}                         
                        </FormControl>
                        <FormControl>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input
                                {...register("password", { required: true })}
                                aria-label='Password'               
                                type={show ? 'text' : 'password'}
                                name='password'
                                fontWeight='medium'
                                placeholder='Create a password'
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
                                    {show ? <FiEye /> : <FiEyeOff />}
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Button
                        type='submit'    
                        isLoading={formState.isSubmitting}                                            
                        _focus={{ outline: 'none' }}
                        borderRadius='full'
                        color='white'
                        bgColor='#D7345B'
                        colorScheme='none'
                        px={10}
                        py={5}
                        >
                            Continue with email
                        </Button>
                        <Flex
                        justifyContent="space-between"
                        alignItems="baseline"
                        fontSize="sm"
                        color="gray.500"
                        >
                            <Text>
                                Already have an account?
                            </Text>
                            <Text>
                                <Link href="/auth/service-provider/login" passHref>
                                    Sign in
                                </Link>
                            </Text>
                        </Flex>
                    </Stack>
                    <Text mt={5} maxW='md' align='center' fontSize='sm' color='gray.600'>
                        By continuing, you acknowledge that you have read and understood, and agree to MyRepairs Terms of Service and Privacy Policy.
                    </Text> 
                </form>
            </Box>
        </Box>
    </Box>
  )
}

export default Join
