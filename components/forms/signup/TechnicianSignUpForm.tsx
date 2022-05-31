import { Box, Stack, FormControl, FormLabel, Input, FormHelperText, Button, Flex, Divider, Text } from '@chakra-ui/react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React from 'react'
import { AiFillGoogleCircle, AiFillFacebook } from 'react-icons/ai'
import { AuthButtons } from '../../AuthButtons/AuthButtons'

type TechnicianSignUpFormProps = {
    caption: string
}

export const TechnicianSignUpForm: React.FunctionComponent<TechnicianSignUpFormProps> = ({
    caption
}) => {
    const { data } = useSession()
    const [email, setEmail] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')
    const [error, setError] = React.useState<string>('')
    const router = useRouter();
  
    const handleForm = (e: React.FormEvent) => {
      e.preventDefault();
  
      if(email && password) {
        router.push('/Onboarding/email_signup/verification');
      }
      else {
        setError('Please fill out all fields')
      }
    }
  return (
    <div>
        <Text
        color="gray.500"
        pb={4}
        >
            {caption}
            
        </Text>
        <Box>
        <form onSubmit={handleForm}>
            <Stack spacing={4}>
            <FormControl>
                <FormLabel htmlFor='email'>Email address</FormLabel>
                <Input
                placeholder='Enter an email address' 
                onChange={(e) => setEmail(e.target.value)}
                id='email' type='email' />
                <FormHelperText>We will never share your email.</FormHelperText>
                {error && <Text fontSize="sm" color="red">{error}</Text>}
            </FormControl>
            <FormControl>
                <FormLabel htmlFor='password'>Password</FormLabel>
                <Input
                placeholder='Enter a password'
                onChange={(e) => setPassword(e.target.value)}
                id='password' type='password' />   
                {error && <Text fontSize="sm" color="red">{error}</Text>}                   
            </FormControl>
            <Button                    
            type='submit'
            bgColor='#D7345B'
            color='white'
            colorScheme='#D7345B'
            _active={{
                transform: 'scale(0.95)',
            }}                    
            height={50}                  
            shadow='md'
            _hover={{ transform: 'scale(1.1)' }}
            >
                Get Started
            </Button>
            </Stack>
        </form>
        </Box>
        <Flex
        alignItems="center"
        justifyContent="space-between"
        >
        <Divider variant="dashed" />
        <Text mx={2}>
            or
        </Text>
        <Divider variant="dashed" />
        </Flex> 
        <AuthButtons />               
        {/* <Flex
        justifyContent="space-evenly"
        >
        <Button
        _active={{
            transform: 'scale(0.95)',
        }}
        colorScheme="white"
        color="gray.800"
        shadow="md"
        leftIcon={<AiFillGoogleCircle />}
        onClick={() => signIn('google')}
        >Sign in with Google</Button>
        <Button
        _active={{
            transform: 'scale(0.95)',
        }}
        shadow="md"
        bgColor="#1877F2"
        color="white"
        colorScheme="#1877F2"
        leftIcon={<AiFillFacebook />}
        onClick={() => signIn('facebook')}
        >Sign in with Facebook</Button>
        </Flex> */}
    </div>
  )
}