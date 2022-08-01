import { Stack, FormControl, Input, Button, Text, InputGroup, InputRightElement } from '@chakra-ui/react'
import axios from 'axios'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { convertToObject } from '../../../src/utils/convertToObject'
import { setToken } from '../../../src/utils/token'

type CustomerSignInFormProps = {
    emailOrPhone: string
    password: string
}

type ComponentProps = {
    onOpen: () => void
}

async function signInCustomer(input: CustomerSignInFormProps) {
    const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/customer/login`;
    try {
        const response =  await axios.post( url, {
            emailOrPhone: input.emailOrPhone,
            password: input.password
        });
        return response.data;
    } catch (error) {
        return error
    }
}

export const CustomerSignInForm = ({
    onOpen
}: ComponentProps) => {
  
  const { handleSubmit, formState, register, setError } = useForm<CustomerSignInFormProps>()
  const [show, setShow] = React.useState<boolean>(false)
  const router = useRouter()

  const onSubmit = async (data: CustomerSignInFormProps) => {
    onOpen()
    // const signIn = await signInCustomer({
    //     emailOrPhone: data.emailOrPhone,
    //     password: data.password
    // })

    // if (signIn.response?.data?.success === false) {
    //     const errors = convertToObject(signIn.response.data.errors);
    //     Object.keys(errors).forEach(key => {
    //         setError(key as any, { message: errors[key] }, { shouldFocus: true })
    //     })        
    // }

    // if (signIn.success) {
		// lets display a modal here to show that the platform is still being worked on.
        // setToken("mr-token", signIn.token);
        // router.push('/feed');

        // onOpen()
    // }
  }

  return (
    <>
    <Head>
        <title>MyRepairs | Customer Sign in</title>
    </Head>
    <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={5} direction={["column"]}>
            <FormControl>
                <Input
                {...register("emailOrPhone", { required: true })}
                type='tel'
                name='emailOrPhone'
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
                {formState.errors.emailOrPhone && <Text fontSize="sm" color="red.500">{formState.errors.emailOrPhone.message}</Text>}           
            </FormControl>
            <FormControl>
                <Text fontSize={['sm']} align={['right']} color='gray.500'>
                    Forgot password?
                </Text>
                <InputGroup>
                    <Input
                    {...register("password", { required: true })}
                    type={show ? 'text' : 'password'}
                    name='password'
                    fontWeight='medium'
                    placeholder='Enter your password'
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
                        {show ? <FiEye /> : <FiEyeOff /> }
                    </InputRightElement>
                </InputGroup>
                
                {formState.errors.password && <Text fontSize="sm" color="red">{formState.errors.password.message}</Text>}                      
            </FormControl>
            <Button
            type='submit'
            isLoading={formState.isSubmitting}
            _focus={{ outline: 'none' }}
            borderRadius='full'
            color='white'
            bgColor='#D7345B'
            colorScheme='none'
            >
                Sign in
            </Button>
        </Stack>            
    </form>
    </>
  )
}
