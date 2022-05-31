import { Box, Flex, Image, Input, InputGroup, InputLeftElement, Spacer } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { FiBell, FiSearch, FiUser, FiMessageSquare } from 'react-icons/fi'

export const Nav = () => {
  return (
    <Flex
    alignItems="center"            
    px={10}
    borderBottom="1px solid #eaeaea"
    position="sticky"
    top={0}            
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
      <Flex
      flexDir="row"
      alignItems="center"
      justifyContent="space-between"      
      >
        <Search />

        <Box
        ml={5}
        >
          <FiBell />
        </Box>
        <Box
        ml={5}
        >
          <FiMessageSquare />
        </Box>

        <Box
        ml={5}
        >
          <FiUser />
        </Box>
      </Flex>
    </Flex> 
  )
}

const Search = () => {
  return (
    <Box>
      <InputGroup>
        <InputLeftElement 
        pointerEvents='none'>
        <FiSearch />
        </InputLeftElement>      
        <Input
          placeholder="Search for technicians, categories, or services"
          
        />
      </InputGroup>
    </Box>
  )
}