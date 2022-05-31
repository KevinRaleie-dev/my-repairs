import { Box, Button, Flex, Spacer, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { FiBookOpen, FiHelpCircle, FiHome, FiLogOut, FiMap, FiMessageSquare, FiNavigation, FiPlus, FiSettings } from 'react-icons/fi'
import { RequestRepair } from '../RequestRepair'

type AsideProps = {
    children: React.ReactNode
}

export const Aside: React.FunctionComponent<AsideProps> = ({
    children
}) => {
  return (
    <Flex
    >
        <Box
        width={220}
        height="100vh"
        left={0}
        position="-webkit-sticky"
        borderRight="1px solid #eaeaea"
        overflow="hidden"
        >
            <Box py={5}>
                
                <Flex
                flexDir="column"                
                >
                    <RequestRepair />
                    {/* <p>home</p>            */}
                    <SideNavLink icon={<FiHome />} title="Home" />
                    <SideNavLink icon={<FiMap />} title="Discover SP" />       
                    <SideNavLink icon={<FiMessageSquare />} title="Chat" />
                    <SideNavLink icon={<FiBookOpen />} title="Bookings" />
                    <SideNavLink icon={<FiNavigation />} title="Track SP" />
                <Spacer />
                <Flex
                justifyContent="flex-end"
                flexDir="column"
                >
                    <SideNavLink icon={<FiSettings />} title="Settings" />
                    <SideNavLink icon={<FiHelpCircle />} title="Help" />
                    <SideNavLink link='/Onboarding' icon={<FiLogOut />} title='Logout' />
                </Flex>
                </Flex>
            </Box>            
        </Box>
        <Box
        width="100%"
        bg="white"
        >
            {children}
        </Box>
    </Flex>
  )
}

type SideNavLinkProps = {
    title: string
    icon?: React.ReactNode
    link?: string
}

const SideNavLink: React.FunctionComponent<SideNavLinkProps> = ({
    title,
    icon,
    link
}) => {
    const router = useRouter()
    return (
            <Box
            onClick={() => router.push(link!)}
            cursor="pointer"
            _hover={{
                backgroundColor: 'gray.100',
                transition: '0.2s ease-in-out',
                color: '#D7345B'
            }}
            _active={{
                transform: 'scale(0.8)',
            }}
            py={2}
            px={5}
            mb={3}
            mx={2}
            borderRadius={5}
            >
                <Stack direction="row" spacing={2} alignItems="center">
                    <Box>
                        {icon}
                    </Box>
                    <Text>
                        {title}
                    </Text>            
                </Stack>
            </Box>
    )
}
