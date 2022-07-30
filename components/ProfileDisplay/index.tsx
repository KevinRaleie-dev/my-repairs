import { Box, Center, Avatar, Stack, Tag, TagLabel, Flex, Divider, Grid, GridItem, Text, Button, Menu, MenuButton, MenuItem, MenuList, IconButton } from '@chakra-ui/react'
import dayjs from 'dayjs'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { FaBirthdayCake } from 'react-icons/fa'
import { FiMoreHorizontal } from 'react-icons/fi'
import { IoCallSharp, IoMailSharp, IoDocumentSharp } from 'react-icons/io5'
import { Navigation } from '../Navigation'

type ProfileDisplayProps = {
    data: any
}

export const ProfileDisplay: React.FC<ProfileDisplayProps> = ({
    data
}) => {

  const date = dayjs(data?.data.createdAt).format('MMMM DD, YYYY')
  const router = useRouter()

  // check if im on the profile page
    const isProfilePage = router.pathname === '/profile'

    return (
    <>
        <Head>
            <title>{data?.data?.firstName} {data?.data?.lastName} | MyRepairs</title>
        </Head>
        <Navigation />
        <Box bgColor="purple" height={40}>
        </Box>
        <Box w="full" h="full" bg="#fafafa" pb={5}>
            <Box position="relative" borderWidth="1px" borderRadius="md" p={3} margin="auto" bgColor="white" height="auto" top={-20} w="75%">
                <Center mb={-5}>
                    <Avatar
                    top={-14}
                    borderColor="purple"
                    borderWidth="8px"
                    size="2xl"
                    position="relative"
                    name={`${data?.data?.firstName} ${data?.data?.lastName}`}
                    />	
                </Center>
                <Box position="relative" display="flex" justifyContent="flex-end" top={-28}>
                    {
                        isProfilePage ? (
                            <>
                                <Button>
                                    <Link href="/settings" passHref>
                                        Edit Profile
                                    </Link>
                                </Button>
                            </>
                        ) : (
                            <>
                                <Menu>
                                    <MenuButton as={IconButton}
                                    aria-label="Report user"
                                    icon={<FiMoreHorizontal />}
                                    />                                                                                                           
                                    <MenuList>
                                        <MenuItem>Report abuse</MenuItem>                                        
                                    </MenuList>
                                </Menu>
                            </>
                        )
                    }
                </Box>
                <Stack align="center" mb={10} spacing={3}>
                    <Stack align="center">
                        {
                            data?.role === "customer" ? (
                                <>
                                    <Tag size="md" variant="solid" colorScheme="green" borderRadius="full">
                                        <TagLabel>Customer</TagLabel>
                                    </Tag>
                                </>
                            ) : (
                                <>
                                    <Tag size="md" variant="solid" colorScheme="green" borderRadius="full">
                                        <TagLabel>Service provider</TagLabel>
                                    </Tag>
                                </>
                            )
                        }
                        <Text fontSize="4xl" fontWeight="bold">{data?.data?.firstName} {data?.data?.lastName}</Text>
                    </Stack>
                    {data?.role === "provider" ? (
                        <Text align="center" maxW="xl" fontSize="lg">
                            {data?.data?.profile?.bio}
                        </Text>
                    ) : null}
                    <Flex gap={3} color="gray">
                        <Flex gap={2} alignItems="center">
                            <FaBirthdayCake />
                            <Text>Joined on {date}</Text>
                        </Flex>
                        {
                            data?.role === "customer" ? (
                                <>
                                    <Flex gap={2} alignItems="center">
                                        {
                                            data.data.emailOrPhone.includes('@') ? (
                                                <>
                                                    <IoMailSharp />
                                                    <Text>{data.data.emailOrPhone}</Text>
                                                </>
                                            ) : (
                                                <>
                                                    <IoCallSharp />
                                                    <Text>{data.data.emailOrPhone}</Text>
                                                </>                                
                                            )
                                        }
                                    </Flex>
                                </>
                            ) : (
                                <>
                                    <Flex alignItems="center" gap={2}>
                                        <IoMailSharp />
                                        <Text>{data.data.email}</Text>
                                    </Flex>
                                    <Flex alignItems="center" gap={2}>
                                        <IoCallSharp />
                                        <Text>{data.data.phone}</Text>
                                    </Flex>
                                </>
                            )
                        }
                    </Flex>
                </Stack>
                {
                    data.role === "provider" && data.data.profile !== null && (
                        <>
                            <Box>
                                <Divider />
                                <Box>
                                    <Flex my={5} direction="row" justifyContent="space-evenly" alignItems="center">
                                        <Stack align="center" direction="column">
                                            <Text color="gray.500" fontWeight="medium" fontSize="sm">
                                                Rate per hour
                                            </Text>
                                            <Text>R{data.data.profile.ratePerHour}</Text>
                                        </Stack>
                                        <Stack align="center" direction="column">
                                            <Text color="gray.500" fontWeight="medium" fontSize="sm">
                                                Profession
                                            </Text>
                                            <Text>{data.data.profile.profession}</Text>
                                        </Stack>
                                    </Flex>
                                </Box>
                            </Box>
                        </>
                    )
                }				
            </Box>
            <Grid px={40} templateColumns="repeat(3, 1fr)" gap={3}>
                <GridItem p={5} colSpan={1}>
                    <Box>
                    {
                        data.role === "provider" ? (
                            <SkillsCard 
                            skills={data?.data?.profile?.skills}
                            />
                        ) : (
                            <>
                                <Box p={3} bgColor="white" borderWidth="1px" h="auto" width="300px" borderRadius="md">
                                    <Flex alignItems="center" gap={3} color="gray.600">
                                        <IoDocumentSharp />
                                        <Text>
                                            {data.data.requests.length} request(s) posted
                                        </Text>
                                    </Flex>
                                </Box>
                            </>
                        )
                    }											
                    </Box>
                </GridItem>
                <GridItem p={2} colSpan={2} borderWidth="2px" borderRadius="md" borderColor="blue">
                    {
                        data.role === "provider" ? (
                            <>
                                This is where the providers reviews are going to be
                            </>
                        ) : (
                            <>
                                This is where the customers requests are going to be displayed
                            </>
                        )
                    }
                </GridItem>
            </Grid>
            
        </Box>
        
        
    </>
)
}

type SkillsCardProps = {
skills: string[]
}

const SkillsCard: React.FC<SkillsCardProps> = ({
skills
}) => {
return (
    <Box bgColor="white" borderWidth="1px" h="auto" width="300px" borderRadius="md">
        <Text p={3} fontSize="lg" fontWeight="semibold">Skills</Text>
        <Divider />
        {
            skills === undefined ? null : (
                <>
                    <Flex p={3} gap={2} flexWrap="wrap">
                        {skills.map((skill, index) => (
                            <Text key={index}>{skill},</Text>
                        ))}
                    </Flex>
                </>
            )
        }
    </Box>
)
}
