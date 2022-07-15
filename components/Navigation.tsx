import { Flex, Box, Input, Spacer, Button, Divider, Avatar, Image, InputGroup, InputRightElement, InputLeftElement } from '@chakra-ui/react'
import React from 'react'
import { FiPlus, FiInbox, FiBell, FiSearch } from 'react-icons/fi'

export const Navigation = () => {
  return (
        <Flex
        position="sticky"
        top={0}
        zIndex={10}
        bgColor="white"
        alignItems="center"
        borderBottomWidth={1}        
        px={8}
        py={2}
        >
            <Box display={["flex"]} alignItems="center">
                <Image 
                src="./logo.svg"
                alt="logo"
                width={12}
                height={12}
                />
                <Box ml={5}>
                    <InputGroup>
                        <InputLeftElement>
                            <FiSearch />
                        </InputLeftElement>
                        <Input
                        focusBorderColor='none'
                        variant="filled"                                                
                        placeholder="Search"                        
                        />
                    </InputGroup>
                </Box>
            </Box>
            <Spacer />
            <Box
            display={["flex"]}
            alignItems="center"
            justifyContent="space-between"
            >
                <Button
                mr={3}
                size="sm"
                leftIcon={<FiPlus />}
                color="blue.500"
                >
                  Create request
                </Button>
                <Box
                mr={3}
                >
                  <FiInbox />
                </Box>          
                <Divider height={10} width={2} orientation='vertical' />                
            </Box>
            <Box display={["flex"]} alignItems="center">
                <Box>
                  <FiBell />
                </Box>
                <Avatar 
                name="John Doe"
                ml={3} size="sm" />
            </Box>
    </Flex>
  )
}
