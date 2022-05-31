import { Flex, Button } from '@chakra-ui/react'
import { signIn } from 'next-auth/react'
import React from 'react'
import { AiFillGoogleCircle, AiFillFacebook } from 'react-icons/ai'

export const AuthButtons = () => {
  return (
    <div>
        <Flex
        justifyContent="space-evenly"
        >
        <Button
        disabled={true}
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
        disabled={true}
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
        </Flex>
    </div>
  )
}
