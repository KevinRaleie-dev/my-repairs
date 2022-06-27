import { Button, Container, Heading, Stack, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import { Nav } from '../../../../components/ui/Nav'

const Done = () => {
  const router = useRouter()
  return (
    <div>
        <Nav />
        <Container>
            <Stack spacing={5}>
                <Heading>
                    And we are done!
                </Heading>
                <Text
                fontSize="sm"
                color="gray.600"
                >
                    You have now booked your spot on the waiting list. You will be notified when MyRepairs goes live soon.
                </Text>
                <Button
                onClick={() => router.replace('/')}
                _active={{
                    transform: 'scale(0.9)',
                }}
                height={50}
                colorScheme="#D7345B"
                bgColor="#D7345B"
                >Alright 👍 </Button>
            </Stack>
        </Container>
    </div>
  )
}

export default Done