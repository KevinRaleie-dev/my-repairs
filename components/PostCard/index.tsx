import { Box, Flex, Text, Stack, Divider, Avatar, AvatarGroup } from '@chakra-ui/react'
import React from 'react'
import { FiMoreHorizontal } from 'react-icons/fi';

type PostCardProps = {
    content: string
    numOfInterests: number;
    fullName: string;
    numOfMinutes: number;
}

export const PostCard: React.FunctionComponent<PostCardProps> = ({
    content,
    numOfInterests,
    fullName,
    numOfMinutes,
}) => {
  return (
    <Box
    mt={3}
    p={2}
    >
        <Stack direction="row">
            <Avatar name={fullName} size="md" />
            <Stack spacing={5}>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Flex>
                        <Flex mr={1}>
                            <Text fontSize="sm" fontWeight="bold">
                                {fullName}
                            </Text>
                            <Text ml={2} fontSize="sm" color="gray.400">
                                @{fullName.split(' ').join('').toLowerCase()}
                            </Text>
                        </Flex>
                        <Text color="gray.400">
                            &bull;
                        </Text>
                        <Text ml={1} fontSize="sm" color="gray.400">
                            {numOfMinutes} minutes ago
                        </Text>
                    </Flex>
                    <FiMoreHorizontal />
                </Box>
                <Text fontSize="sm" dangerouslySetInnerHTML={{__html: content}}>                
                </Text>
                <Stack>
                    <Divider />
                    <Box display={["flex"]} alignItems="baseline">
                        <AvatarGroup size='sm' max={4}>
                            <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                            <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                            <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                            <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                            <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                        </AvatarGroup>
                        <Text fontSize="sm" ml={2} color="#D7345B">
                            {numOfInterests} people are interested in this
                        </Text>
                    </Box>
                </Stack>
            </Stack>
        </Stack>
    </Box>
  )
}
