import { Button, Center, Container, Heading, Stack, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import { Nav } from '../../../../components/ui/Nav'

const Done = () => {
  const router = useRouter()
  return (
    <div>
        <Nav />
        <Center>
            <Stack spacing={5} align="center">
                <Heading textAlign="center">
                    And we are done!
                </Heading>
                <Text
                fontSize="md"
                color="gray.600"
                textAlign="center"
                >
                    You have now booked your spot on the waiting list. You will be notified when MyRepairs goes live soon.
                </Text>
                <Button
                onClick={() => router.replace('/')}
                _active={{
                    transform: 'scale(0.9)',
                }}
                height={50}
                width={150}
                colorScheme="#D7345B"
                bgColor="#D7345B"
                >Done </Button>
            </Stack>
        </Center>
    </div>
  )
}

export default Done