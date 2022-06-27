import { Button, FormControl, Input, Stack, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { registerCustomer } from '../../../src/api-calls'
import { CustomerSignUpFormProps } from '../../../src/types'
import { convertToObject } from '../../../src/utils/convertToObject'

export const CustomerSignUpForm = () => {

  const { handleSubmit, formState, register, setError } = useForm<CustomerSignUpFormProps>()
  const router = useRouter()

  const onSubmit = async (data: CustomerSignUpFormProps) => {
    const register = await registerCustomer({
        emailOrPhone: data.emailOrPhone,
        password: data.password,
        provider: 'email'
    })

    if (register.response?.data?.success === false) {
        const errors = convertToObject(register.response.data.errors);
        Object.keys(errors).forEach(key => {
            setError(key as any, { message: errors[key] }, { shouldFocus: true })
        })
    }
    else {
        router.push('/feed');    
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
                Continue with email
            </Button>
        </Stack>
    </form>
  )
}