import { Box, Flex, Image, Input, InputGroup, InputLeftElement, Spacer } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { FiBell, FiSearch, FiUser, FiMessageSquare } from 'react-icons/fi'

export const Nav = () => {
  return (
    <Flex
    alignItems="center"            
    px={10}
    position="sticky"
    top={0}
    mb={5}          
    zIndex={1}
    bgColor="white"
    >
      <Box>
        <Link
        href='/dashboard'
        passHref
        >
            <Image
            src="/logo.svg"
            width={20}
            height={20}
            alt="My Repairs logo"
            />            
        </Link>    
      </Box>
      <Spacer />
    </Flex> 
  )
}