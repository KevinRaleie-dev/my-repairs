import { Box, Image, Flex } from '@chakra-ui/react'
import React from 'react'
import NextLink from 'next/link'

export const Logo = () => {
  return (
    <Flex                    
    px={5}
    py={2}
    direction="row"
    justifyContent={["center", "flex-start"]}
    >
    <NextLink href="/" passHref>
        <Image
        cursor="pointer"
        src="/logo.svg"
        width={20}
        height={20}
        alt="My Repairs logo"
        />
    </NextLink>
    </Flex>
  )
}
