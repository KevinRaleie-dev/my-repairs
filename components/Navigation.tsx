import { Avatar, Box, Button, Text, Divider, Flex, Image, Input, InputGroup, InputLeftElement, Spacer } from '@chakra-ui/react'
import Link from 'next/link'
import { FiBell, FiInbox, FiPlus, FiSearch } from 'react-icons/fi'
import { useQuery } from 'react-query'
import { meQuery } from '../src/api-calls'

// add labels under icons on the navbar

export const Navigation = () => {

  const { data } = useQuery('me-query', meQuery)

  return (
        <Flex
        position="sticky"
        top={0}
        zIndex={10}
        bgColor="white"
        alignItems="center"
        borderBottomWidth={1}        
        px={20}
        py={2}
        >
            <Box display={["flex"]} alignItems="center">
              <Link href="/feed" passHref>
                <Image 
                src="/logo.svg"
                alt="logo"
                width={12}
                height={12}
                />
              </Link>
                <Box ml={5}>
                    <InputGroup>
                        <InputLeftElement>
                            <FiSearch />
                        </InputLeftElement>
                        <Input
                        w={450}
                        focusBorderColor="black"
                        borderRadius={10}
                        variant="filled"                                                
                        placeholder="Search service providers, categories, etc..."
                        />
                    </InputGroup>
                </Box>
            </Box>
            <Spacer />
            <Box
            display={["flex"]}
            alignItems="center"
            justifyContent="space-between"
            >
              {
                data?.role === "customer" ? (
                  <>
                    <Link href="/new" passHref>
                      <Button
                      mr={3}
                      size="sm"
                      leftIcon={<FiPlus />}
                      color="blue.500"
                      >
                        Create request
                      </Button>
                    </Link>
                  </>
                ) : null
              } 
                <Box
                mr={3}
                >
				  <Flex direction="column" alignItems="center" color="gray.600" justifyContent="center" gap={1}> 
                  <FiInbox />
				  <Text fontSize="xs" fontWeight="medium">My Inbox</Text>
				  </Flex>
                </Box>          
                <Divider height={10} width={2} orientation='vertical' />                
            </Box>
            <Box display={["flex"]} alignItems="center">
                <Flex direction="column" color="gray.600" alignItems="center" gap={1} justifyContent="center">
                  <FiBell />
				  <Text fontSize="xs" fontWeight="medium">My Notifications</Text>
                </Flex>
				<Link href='/profile' passHref>
				    <Flex direction="column" gap={1} alignItems="center" justifyContent="center">
					    <Avatar
						cursor="pointer"
						name={data?.data?.firstName + ' ' + data?.data?.lastName}
						ml={3} size="sm" />
					</Flex>
				</Link>
            </Box>
    </Flex>
  )
}
