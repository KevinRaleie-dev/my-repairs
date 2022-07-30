import React from 'react'
import { Button, Flex, FormControl, Input, Select, Text, useToast } from '@chakra-ui/react'
import { UpdateProfileLayout } from '../../ui/UpdateProfileLayout'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { getCities, meQuery, updateServiceProviderAddress } from '../../../src/api-calls'
import { useForm } from 'react-hook-form'

type FormProps = {
    streetAddress: string
    city: string
    suburb: string
    province: string
    postalCode: string
}

export const UpdateServiceProviderAddressForm = () => {
  const toast = useToast()
  const { data } = useQuery('cities', getCities)
  const { data: me } = useQuery('me-query', meQuery)
  const { register, handleSubmit, } = useForm<FormProps>()
  const queryClient = useQueryClient()
  const mutation = useMutation( async (data: FormProps) => {
    return await updateServiceProviderAddress(data)
  });

  const handleToast = () => {
    toast({
      title: 'Success',
      description: 'Address updated successfully',
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
    <div>
        <Text
        fontWeight="medium"
        fontSize="xl"
        color="purple.900"
        >
        Address details
        </Text>
        <Text
        fontSize="sm"
        color="gray.600"
        mb={5}
        >
        Update your address details here. We will never share your address with anyone.
        </Text> 
        <form onSubmit={handleSubmit(onSubmit)}>
            <UpdateProfileLayout label='Street address' description='e.g. 345 Genrl brand'>
                <FormControl>
                    <Input
					{...register('streetAddress')}
					name='streetAddress'
					defaultValue={me?.data?.streetAddress}
					/>
                </FormControl>
            </UpdateProfileLayout>
            <UpdateProfileLayout label='Suburb'>
                <FormControl>
                    <Input
					{...register('suburb')}
					name='suburb'
					defaultValue={me?.data?.suburb}
					/>
                </FormControl>
            </UpdateProfileLayout>
            <UpdateProfileLayout label='City and Province'>
                <Flex gap={2}>
                    <FormControl>
                        <Select 
						{...register('city')}
						name='city'
						defaultValue={me?.data?.city}
						>
                            {
                                data?.data?.cityNames.map((c: any, index: any) => (
                                    <option key={index} value={c}>{c}</option>
                                ))                                    
                            }
                        </Select>
                    </FormControl>
                    <FormControl>
                        <Select 
						{...register('province')}
						name='province'
						defaultValue={me?.data?.province}
						>
                            {
                                data?.data?.provinces.map((p: any, index: any) => (
                                    <option key={index} value={p}>{p}</option>
                                ))
                            }
                        </Select>
                    </FormControl>
                </Flex>
            </UpdateProfileLayout>
            <UpdateProfileLayout label='Postal code'>
                <FormControl>
                    <Input
					{...register('postalCode')}
					name='postalCode'
					defaultValue={me?.data?.postalCode}
					/>
                </FormControl>
            </UpdateProfileLayout>
            <Flex justifyContent="flex-end" mt={2} px={10}>
                <Button
				isLoading={mutation.isLoading}
                type="submit"
                colorScheme="none" 
                color="white" 
                bgColor="#D7345B">
                    Update address
                </Button>
            </Flex>
        </form>
    </div>
  )
}
