import { Box, Stack, Button, Flex, Divider, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { AiFillGoogleCircle, AiFillFacebook } from 'react-icons/ai'
import NextLink from 'next/link'
import { CustomerSignInForm } from '../../../components/Customer/forms/Signin.form'

const Login = () => {
  return (
    <Box>
          <Box                    
          px={5}
          py={2}
          >
            <NextLink href="/" passHref>
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
            fontWeight="bold"
            align={["center"]}>
              Log In.
            </Text>
            <Stack spacing={5} my={10}>      
              <Button
              _focus={{ outline: 'none' }}
              leftIcon={<AiFillGoogleCircle />}
              bgColor="white"
              borderColor="gray.200"
              borderWidth={2}
              borderRadius="full"
              px={12} 
              py={5}             
              >
                Continue with Google
              </Button>
              <Button
              _focus={{ outline: 'none' }}
              leftIcon={<AiFillFacebook />}
              bgColor="white"
              borderWidth={2}
              borderColor="gray.200"
              borderRadius="full"
              px={10}
              py={5}

              >
                Continue with Facebook
              </Button>
              <Flex
              justifyContent={["space-between"]}
              alignItems={["center"]}
              >
                <Divider />
                <Text color="gray.500" px={2}>Or</Text>
                <Divider />
              </Flex>         
              {/* <CustomerSignUpForm /> */}
              <CustomerSignInForm />
              
              <Box display={['flex']} justifyContent={['space-between']} fontSize={['sm']} color='gray.600'>
                <Text>
                  Don&apos;t have an account ?
                </Text>
                <NextLink href="/auth/customer/signup" passHref>                  
                   <a>Sign up</a>            
                </NextLink>
              </Box>
            </Stack>
            <Text maxW='lg' align='center' fontSize='sm' color='gray.500'>
              By continuing, you acknowledge that you have read and understood, and agree to MyRepairs Terms of Service and Privacy Policy.
            </Text>
          </Box>          
        </Box>
  )
}

export default Login
