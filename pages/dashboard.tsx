import { Box, Flex, Grid, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Chat } from '../components/Chat'
import { Map } from '../components/ui/Map'
import { Aside } from '../components/ui/Aside'
import { Nav } from '../components/ui/Nav'

const Dashboard = () => {
  return (
    <div>
        <Nav />
        <Aside>
            <Box
            p={5}  
            
            width="100%"          
            >
                <Stack>
                    <Heading size="sm">Overview</Heading>
                    <Grid templateColumns='repeat(2, 1fr)' gap={2}>
                        <Box
                        width="100%"
                        height={250}
                        >
                            <Text
                            fontSize="xl"
                            fontWeight="semibold"
                            mb={2}
                            >Nearby Service Providers</Text>
                            <Map />
                        </Box>
                        <Box
                        width="100%"
                        height={250}
                        
                        >
                            <Flex
                            alignItems="center"
                            justifyContent="space-between"
                            >
                                <Text
                                fontSize="xl"
                                fontWeight="semibold"
                                mb={2}
                                >Chat</Text>
                                <Text
                                fontSize="sm"
                                color="#D7345B"
                                cursor="pointer"
                                >
                                    See all
                                </Text>
                            </Flex>
                            <Chat />
                        </Box>

                    </Grid>
                </Stack>

            </Box>
        </Aside>
    </div>
  )
}

export default Dashboard