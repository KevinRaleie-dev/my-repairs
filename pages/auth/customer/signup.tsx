import { Box, Image, Stack, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import { CustomerSignUpForm } from '../../../components/Customer/forms/Signup.form'

const Onboarding = () => {

  return (    
    <Box as="main">      
          <Box                    
          px={5}
          py={2}
          >
            <NextLink href='/' passHref>
              <Image
              src="/logo.svg"
              width={20}
              height={20}
              alt="My Repairs logo"
              />
            </NextLink>
          </Box>
          
          <Box
          display="grid"
          placeItems={["center"]}
          >
            <Text 
            fontSize="3xl"
            color="purple.900"
            fontWeight="bold"
            align={["center"]}>
              Sign up to get started.
            </Text>  
            <Text mt={3} color="gray.600">Create your customer account now.</Text>                             
            <Stack spacing={5} my={10}>                                                
              <CustomerSignUpForm />
              <Box display={['flex']} justifyContent={['space-between']} fontSize={['sm']} color='gray.600'>
                <Text>
                  Already have an account?
                </Text>
                <NextLink href="/auth/customer/login" passHref>                  
                  <a>Sign in</a>            
                </NextLink>
              </Box>
            </Stack>
            <Text mb={5} maxW='lg' align='center' fontSize='sm' color='gray.500'>
              By continueing, you acknowledge that you have read and understood, and agree to MyRepairs Terms of Service and Privacy Policy.
            </Text>          
          </Box>      
    </Box>
  )
}

export default Onboarding
