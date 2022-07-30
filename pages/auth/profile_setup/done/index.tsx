import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { meQuery } from '../../../../src/api-calls'

const Done = () => {
  const { data: me } = useQuery('me-query', meQuery)
  const router = useRouter()
  return (
    <div>
        <Head>
            <title>MyRepairs - Account Verified</title>
        </Head>        
        <Box h="100vh" display="grid" placeItems="center">
            <Image
            src='/logo.svg'
            alt="My Repairs logo"
            width={100}
            height={100}
             />
            <Stack align="center">
                <Heading color="purple.900" fontSize="xl">Your Account Has Been Successfully Verified.</Heading>
                {
                    me?.role === 'customer' ? <>
                        <Text color="gray.600">
                            You have now claimed your spot on the MyRepairs platform. Be on the lookout for when we officially launch so you can make your first request.
                        </Text>
                    </> : <>
                            <Text color="gray.600">
                                You have now claimed your spot on the MyRepairs platform. Be on the lookout for new customers who are looking for your services once we officially launch.
                            </Text>
                            <Flex gap={1} color="purple.900">
                                <Text>
                                    In the meantime you can setup your profile
                                </Text>
                                <Text color="#D7345B" fontWeight="bold">
                                    <Link href='/settings' passHref>
                                        here.
                                    </Link>
                                </Text>
                            </Flex>       
                    </>
                }
            </Stack>
        </Box>
    </div>
  )
}

export default Done