import { Stack, FormControl, Input, Button, Text } from '@chakra-ui/react'
import axios from 'axios'
import { useRouter } from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'
import { convertToObject } from '../../../src/utils/convertToObject'

type CustomerSignInFormProps = {
    emailOrPhone: string
    password: string
}

async function signInCustomer(input: CustomerSignInFormProps) {
    const url = 'http://localhost:5000/auth/customer/login';
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

export const CustomerSignInForm = () => {
  
  const { handleSubmit, formState, register, setError } = useForm<CustomerSignInFormProps>() 
  const router = useRouter()

  const onSubmit = async (data: CustomerSignInFormProps) => {
    const signIn = await signInCustomer({
        emailOrPhone: data.emailOrPhone,
        password: data.password
    })

    if (signIn.response?.data?.success === false) {
        const errors = convertToObject(signIn.response.data.errors);
        Object.keys(errors).forEach(key => {
            setError(key as any, { message: errors[key] }, { shouldFocus: true })
        })        
    }
    else {
        console.log(signIn.token)
        localStorage.setItem('mr-token', signIn.token)

        router.push('/feed')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={5} direction={["column"]}>
            <FormControl>
                <Input
                {...register("emailOrPhone", { required: true })}
                type='text'
                name='emailOrPhone'
                fontWeight='medium'
                placeholder='Enter email address or phone number'
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
                <Input
                {...register("password", { required: true })}
                type='password'
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
  )
}
