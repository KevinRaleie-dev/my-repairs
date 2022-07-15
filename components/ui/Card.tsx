import { Box, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { FiChevronRight } from 'react-icons/fi'

type CardProps = {
    imageUrl: string
    title: string
}

export const Card: React.FunctionComponent<CardProps> = ({
    imageUrl,
    title,
}) => {
  return (
    <Box p={2}>
        <Box        
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        bgColor="white"
        overflow="hidden"
        >
            <Image
            src={imageUrl}
            alt={`${title} image`}
            objectFit="cover"
            width="500px"
            height={250}
            />

            <Box
            p={6}
            >            
                <Stack>
                    <Text fontWeight="semibold" fontSize="xl" color="#454545">
                        {title}
                    </Text>
                    <Box display={["flex"]} alignItems="center" fontSize="sm" fontWeight="medium" color="#D7345B">
                        <Text>
                            See Service Providers
                        </Text>
                        <FiChevronRight />
                    </Box>
                </Stack>
            </Box>
        </Box>
    </Box>
  )
}
