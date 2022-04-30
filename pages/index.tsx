import { Container, Heading, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <Container centerContent>
      <Head>
        <title>My Repairs - Coming Soon</title>
        <meta name="description" content="My Repairs | Coming Soon" />
        <meta name="keywords" content="My Repairs, Coming Soon" />
        <meta name="author" content="My Repairs" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* add favicon */}        

        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="android-chrome-icon" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="android-chrome-icon" sizes="512x512" href="/android-chrome-512x512.png" />
      </Head>

      <Image src="/logo.svg" alt="My Repairs Logo" width={150} height={150} />
      <Image src="/cuate.svg" alt="" width={350} height={350} />
      <Heading
      size="2xl" 
      mt={2}
      lineHeight={1.1}
      letterSpacing="wider"
      >
        COMING SOON
      </Heading>
      <Text
      fontSize="lg"
      color="gray.500"
      mt={2}
      mb={10}
      align="center"
      >
        We&apos;re working hard to bring you the best service possible. Stay tuned!
      </Text>
    </Container>
  )
}

export default Home
