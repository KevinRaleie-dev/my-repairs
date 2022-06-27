import { Box, Button, Divider, Flex, Image, Stack, Text } from '@chakra-ui/react'
import { AiFillFacebook, AiFillGoogleCircle } from 'react-icons/ai'
import { CustomerSignUpForm } from '../../../components/Customer/forms/Signup.form'
import NextLink from 'next/link'
import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { registerCustomer } from '../../../src/api-calls'
import { Loading } from '../../../components/ui/Loading'
import { useRouter } from 'next/router'


function setProvider(value: string) {
  localStorage.setItem('provider', value)
}

function getProvider(key: string) {
  const item = localStorage.getItem(key)

  if (item) {
    return item
  }
}

const Onboarding = () => {

  const { data, status } = useSession()
  const [error, setError] = React.useState('')
  const [loading, setLoading] = React.useState(false) // figure out how to handle loading state
  const router = useRouter()


  if (data?.user?.email) {
    registerCustomer({
      emailOrPhone: data.user.email,
      password: '',
      provider: getProvider('provider'),
    })
    .then((data) => {
      console.log(data.response.data)
      if (data.response.data.success === false) {
        setError(data.response.data.errors[0].message)
        // signOut()
      }
      else {
        router.push('/feed')
      }
    })
    .catch((err) => console.error(err))
  }


  return (    
        <Box position="relative">
          {
            loading ? <Loading /> : 
            <>    
              <Box                    
              px={5}
              py={2}
              >
                <Image
                src="/logo.svg"
                width={20}
                height={20}
                alt="My Repairs logo"
                />
              </Box>
              
              <Box
              display="grid"
              placeItems={["center"]}
              >
                <Text 
                fontSize="3xl"
                fontWeight="bold"
                align={["center"]}>
                  Sign up to get started.
                </Text>                
                {error && <Text color='red.400'>{error}</Text>}
                <Stack spacing={5} my={10}>      
                  <Button
                  onClick={async () => {                    
                    setProvider('google')
                    await signIn('google')
                  }}
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
                  onClick={async () => {                    
                    setProvider('facebook')
                    await signIn('facebook')
                  }}
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
                <Text maxW='lg' align='center' fontSize='sm' color='gray.500'>
                  By continuing, you acknowledge that you have read and understood, and agree to MyRepairs Terms of Service and Privacy Policy.
                </Text>          
              </Box>
            </>          
          }       
        </Box>
  )
}

export default Onboarding