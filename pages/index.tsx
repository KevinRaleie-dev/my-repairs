import { Box, Button, Flex, Grid, Heading, Image, Stack, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { FiArrowRight, FiChevronUp } from 'react-icons/fi'

const Home: NextPage = () => {

  return (
    <Box>
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

      {/* Nav */}
      <Flex
      py={2}
      px={8}
      gap={5}
      alignItems="center"
      justifyContent="flex-end"
      bgColor="gray.200"
      fontSize="xs" 
      fontWeight="semibold"
      color="blue.700"
      >
        <Flex gap={1} alignItems="center">
          <Text>
            Support
          </Text>
          <Box          
          transform="rotate(180deg)"
          fontSize="md"
          >
            <FiChevronUp />
          </Box>
        </Flex>
        <Text>
          <Link href='/auth/customer/login' passHref>
            Log in
          </Link>
        </Text>
      </Flex>
      <Flex 
      as="nav"
      borderBottomWidth={1}
      borderColor="gray.200"
      px={8} 
      py={1} 
      alignItems="center" 
      position="sticky" 
      top={0} 
      zIndex={1} 
      bgColor="white">
        <Flex
        width="full"
        direction="row"
        justifyContent="space-between"
        >
          <Box>
            <Image
            src="/logo.svg"
            alt="My Repairs logo"
            width={20}
            height={20}
            />
          </Box>
          <Flex          
          direction="row"
          alignItems="center"
          gap={8}
          fontSize="sm"
          fontWeight="500"
          >            
            <NavLink href="/" title="How It Works" />          
            {/* <NavLink href="/" title="Get A Quote" />           */}
            <NavLink href="/" title="About" />            
            <NavLink href="/" title="Contact Us" />
          </Flex>
          <Flex
          direction="row"
          alignItems="center"
          gap={2}
          >
            <Link href="/auth/service-provider/join" passHref>
              <Button
              colorScheme="none"
              fontWeight="normal"
              bgColor="white"
              borderWidth={2}
              borderColor="blue"
              color="blue"
              >
                Join as a Service Provider
              </Button>
            </Link>
            <Link
            href="/auth/customer/signup"
            passHref
            >
              <Button
              _hover={{
                opacity: 1
              }}
              colorScheme="none"
              bgColor="blue"
              color="white"
              opacity={0.7}
              fontWeight="medium"
              
              >
                Sign up
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
      {/* main */}
      <Box
      as="main"
      >
        <Grid my={20} templateColumns={["repeat(2, 1fr)"]} gap={2} px={20}>
          <Box>
            <Stack spacing={6}>
              <Text
              fontWeight="bold"
              color="#D7345B"
              fontSize="lg"
              >
                MyRepairs Service Provider Engagement Platform
              </Text>
              <Heading size="3xl" color="purple.900">
                Find A Maintenance Person <span style={{ color: "#66CECA" }}>In Your Area</span>
              </Heading>
              <Text 
              fontSize="lg"
              fontWeight="light"
              color="purple.900">
                Need something fixed? No problem we&apos;ve got you covered. Find a technician or service provider in your
                location and book a repair service in no time.
              </Text>
              <Box>
                <Link
                href="/auth/customer/signup"
                passHref
                >
                  <Button
                  fontWeight="medium"
                  colorScheme="none"
                  color="white"
                  py={6}
                  px={5}
                  bgColor="blue"
                  opacity={0.7}
                  rightIcon={<FiArrowRight />}
                  >
                    Sign up and request a service
                  </Button>
                </Link>
              </Box>
              <Flex gap={2}>
                <Text color="gray.600">
                  Already a service provider?
                </Text>
                <Text
                color="#D7345B"
                fontWeight="medium"
                >
                  <Link href="/auth/service-provider/login">
                    Sign in                
                  </Link>
                </Text>
              </Flex>
            </Stack>
          </Box>
          <Box>
            <Image
            src="/cuate.svg"
            alt="repair service"
            height={561}
            width={610}
             />
          </Box>
        </Grid>
      </Box>
    </Box>
  )
}


type NavLinkProps = {
  href: string;
  title: string;
}

function NavLink({href, title}: NavLinkProps) {
  return (
    <Text
    _hover={{
      color: "#D7345B"
    }}
    >
      <Link href={href} passHref>
        {title}
      </Link>
    </Text>
  )
}

function technicianServices() {
  // generate a list of technician services along with their images
  const services = [
    {
      name: 'Plumbing',
      image: '/plumbing.png',
    },
    {
      name: 'Electrical',
      image: '/electrician.png',
    },
    {
      name: 'Cleaning',
      image: '/cleaning.jpg',
    },
    {
      name: 'Painting',
      image: '/painting.png',
    },
    {
      name: 'Carpentry',
      image: '/carpentry.jpg',
    },
    {
      name: 'HVAC',
      image: '/hvac.png',
    },
  ]

  return services
}

export default Home
