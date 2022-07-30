import { Button, FormControl, Input, InputGroup, InputRightElement, Stack, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { registerCustomer, sendVerificationCode } from '../../../src/api-calls'
import { CustomerSignUpFormProps } from '../../../src/types'
import { convertToObject } from '../../../src/utils/convertToObject'
import { setToken } from '../../../src/utils/token'

export const CustomerSignUpForm = () => {

  const { handleSubmit, formState, register, setError } = useForm<CustomerSignUpFormProps>()
  const [show, setShow] = React.useState<boolean>(false)
  const router = useRouter()

  const onSubmit = async (data: CustomerSignUpFormProps) => {
    const register = await registerCustomer({
        emailOrPhone: data.emailOrPhone,
        password: data.password,
        provider: 'email',
        firstName: data.firstName,
        lastName: data.lastName,
    })

    console.log('before', register)

    if (register.response?.data?.success === false) {
        const errors = convertToObject(register.response.data.errors);
        Object.keys(errors).forEach(key => {
            setError(key as any, { message: errors[key] }, { shouldFocus: true })
        })
    }

    if (register.success) {
        setToken("mr-token", register.token);
        const verified = await sendVerificationCode(data.emailOrPhone)
        if (verified?.data?.status === 'pending') {
            router.push('/auth/verification')
        }        
    }
  }

  return (
    <>
        <Head>
            <title>MyRepairs | Customer Sign up</title>
        </Head>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={5} direction={["column"]}>
                <FormControl>
                    <Input
                    {...register("firstName", { required: true })}
                    type='text'
                    name='firstName'
                    fontWeight='medium'
                    placeholder='Enter your name'
                    focusBorderColor='black'
                    _placeholder={{
                        fontWeight: 'medium',
                        fontSize: 'sm'
                    }}
                    borderWidth={1.5}
                    borderRadius={10}
                    />
                </FormControl>
                <FormControl>
                    <Input
                    {...register("lastName", { required: true })}
                    type='text'
                    name='lastName'
                    fontWeight='medium'
                    placeholder='Enter your surname'
                    focusBorderColor='black'
                    _placeholder={{
                        fontWeight: 'medium',
                        fontSize: 'sm'
                    }}
                    borderWidth={1.5}
                    borderRadius={10}
                    />
                </FormControl>
                <FormControl>                                
                    <Input
                    {...register("emailOrPhone", { required: true })}
                    type='text'
                    name='emailOrPhone'
                    fontWeight='medium'
                    placeholder='Enter your Phone number'
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
                    <InputGroup>
                        <Input
                        {...register("password", { required: true })}
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
                            {
                                show ? <FiEye /> : <FiEyeOff />
                            }
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
                    Continue
                </Button>
            </Stack>
        </form>
    </>
  )
}
