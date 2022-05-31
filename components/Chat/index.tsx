import { Avatar, Box, Divider, Flex, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

export const Chat = () => {
    // generate a list of chats
    const chats = [
        {
            id: 1,
            name: 'John Doe',
            message: 'Hey, how are you?',
            timestamp: '1:00pm',
            avatar: 'https://i.pravatar.cc/300?img=1',

        },
        {
            id: 2,
            name: 'Jane Lorem',
            message: 'Did you get my message?',
            timestamp: '1:01pm',
            avatar: 'https://i.pravatar.cc/300?img=2',
        },
        {
            id: 3,
            name: 'Kevin Doe',
            message: 'I am good, thanks!',
            timestamp: '1:02pm',
            avatar: 'https://i.pravatar.cc/300?img=3',
        },
        {
            id: 4,
            name: 'Thabo Mazibuko',
            message: 'Did you check the cooling system?',
            timestamp: '1:02pm',
            avatar: 'https://i.pravatar.cc/300?img=4',
        },
        {
            id: 5,
            name: 'Carol Van der Merwe',
            message: 'I will be there in a minute',
            timestamp: '1:02pm',
            avatar: 'https://i.pravatar.cc/300?img=5',
        }
    ]
  return (
    <Box
    width="100%"
    height="100%"
    overflowY="scroll"
    >
        <Flex
        flexDir="column"
        >
            {
                chats.map(chat => (
                    <div key={chat.id}>
                        <Flex
                        flexDir="row"
                        alignItems="center"
                        px={3}
                        mb={3}
                        mt={3}
                        >
                            <Box
                            mr={2}
                            >
                                <Avatar
                                width={10}
                                height={10}
                                src={chat.avatar}
                                />
                            </Box>
                            <Box>
                                <Text
                                fontWeight="medium"
                                >
                                    {chat.name}
                                </Text>
                                <Text
                                color="gray.500"
                                >
                                    {chat.message}
                                </Text>
                            </Box>
                            <Spacer />
                            <Text
                            fontSize="sm"
                            color="gray.500"
                            >
                                {chat.timestamp}
                            </Text>
                        </Flex>
                        <Divider />
                    </div>
                ))
            }
        </Flex>
    </Box>
  )
}
