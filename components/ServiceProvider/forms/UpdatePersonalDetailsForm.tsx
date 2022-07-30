import { Flex, FormControl, Input, InputGroup, InputLeftElement, Button, useToast, FormHelperText } from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { FiMail, FiPhone } from 'react-icons/fi'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { meQuery, updateServiceProviderPersonalDetailsHandler } from '../../../src/api-calls'
import { UpdateProfileLayout } from '../../ui/UpdateProfileLayout'

type FormProps = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}

export const UpdatePersonalDetailsForm = () => {
  const toast = useToast()
  const queryClient = useQueryClient()
  const mutation = useMutation(async (data: FormProps) => {
    return await updateServiceProviderPersonalDetailsHandler(data)
  })
  const { data: me } = useQuery('me-query', meQuery)  
  const { register, handleSubmit, formState } = useForm<FormProps>() // handle errors later

  const handleToast = () => {
    toast({
      title: 'Success',
      description: 'Personal details updated successfully',
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  }

  const onSubmit = async (data: FormProps) => {
    await mutation.mutateAsync(data)
    queryClient.invalidateQueries('me-query')
    handleToast()
  }

  return (
    <section>
        <form onSubmit={handleSubmit(onSubmit)}>
            <UpdateProfileLayout label='Full name'>
                <Flex gap={3}>
                    <FormControl>
                        <Input
                        {...register("firstName")}
                        focusBorderColor="black"
                        name="firstName"
                        bg="white"
                        type="text"
                        defaultValue={me.data?.firstName}                                    
                        placeholder="First name"
                        />
                    </FormControl>
                    <FormControl>
                        <Input
                        {...register("lastName")}
                        focusBorderColor="black"
                        name="lastName"
                        bg="white"
                        type="text"
                        defaultValue={me.data?.lastName}                                    
                        placeholder="Last name"
                        />
                    </FormControl>
                </Flex>
            </UpdateProfileLayout>
            <UpdateProfileLayout label='Email address'>
                <FormControl>
                    <InputGroup>
                        <InputLeftElement>
                            <FiMail />
                        </InputLeftElement>
                        <Input
                        bg="white"
                        name="email"
                        focusBorderColor='black'
                        defaultValue={me.data?.email}
                        variant="filled"
                        type="email"
                        disabled={true}
                        placeholder="Email address"    
                        />
                    </InputGroup>
                        <FormHelperText>You cannot update your email address yet because your account has not been verified by us yet.</FormHelperText>
                </FormControl>
            </UpdateProfileLayout>
            <UpdateProfileLayout label='Phone number'>
                <FormControl>
                    <InputGroup>
                        <InputLeftElement>
                            <FiPhone />
                        </InputLeftElement>
                        <Input
                        bg="white"
                        name="phone"
                        focusBorderColor='black'
                        defaultValue={me.data?.phone}
                        variant="filled"
                        type='text'
                        disabled={true} // change this to isVerified, if they are not verified they can't update their phone number or email
                        placeholder='Phone number'
                        />
                    </InputGroup>
                        <FormHelperText>You cannot update your phone number yet because your account has not been verified by us yet.</FormHelperText>
                </FormControl>
            </UpdateProfileLayout>
            <Flex justifyContent="flex-end" mt={2} px={10}>
                <Button
                type="submit"
                isLoading={mutation.isLoading}
                colorScheme="none"
                color="white"
                bgColor="#D7345B"
                >
                    Update details
                </Button>
            </Flex>
        </form>
    </section>
  )
}
