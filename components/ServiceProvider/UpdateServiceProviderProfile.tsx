import { Box, Divider, Text } from '@chakra-ui/react'
import { useQuery } from 'react-query'
import { meQuery } from '../../src/api-calls'
import { UpdatePersonalDetailsForm } from './forms/UpdatePersonalDetailsForm'
import { UpdateProfileForm } from './forms/UpdateProfileForm'
import { UpdateServiceProviderAddressForm } from './forms/UpdateServiceProviderAddressForm'

export const UpdateServiceProviderProfile = () => {
  
  const { isLoading } = useQuery('me-query', meQuery)

  return (
    <Box mb={10}>
        {
            isLoading ? (
                <>
                    Loading...
                </>
            ) : (
                <main>                                                              
                    <Text
                    fontWeight="medium"
                    fontSize="xl"
                    color="purple.900"
                    >
                    Personal info
                    </Text>
                    <Text
                    fontSize="sm"
                    color="gray.600"
                    mb={5}
                    >
                    Update your personal details and profile here.
                    </Text>                                       
                    <Divider />              
                    <UpdatePersonalDetailsForm />
                    <UpdateProfileForm />
                    <UpdateServiceProviderAddressForm />                  
                </main>
            )
        }
    </Box>
  )
}
