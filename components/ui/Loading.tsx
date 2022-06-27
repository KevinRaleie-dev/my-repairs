import { Box, Center, Spinner } from '@chakra-ui/react'
import React from 'react'

export const Loading = () => {
  return (
    <Box
    position="absolute"
    width="100%"
    height="100%"
    bgColor="white"
    
    >
        <Center>
            <Spinner />
        </Center>
    </Box>
  )
}
