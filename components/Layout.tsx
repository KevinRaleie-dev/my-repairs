import { Box, Container, Divider, Flex, Grid, GridItem, Spacer, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { FiHome, FiMail, FiMap, FiMessageSquare, FiSettings } from 'react-icons/fi';
import { Navigation } from './Navigation';

type LayoutProps  = {
    children: React.ReactNode;
    contentColSpan?: number;
    rightElement: () => React.ReactNode;
}

// TODO: dynamically set the settings href depending on the user's role

export const Layout: React.FC<LayoutProps> = ({
    children,
    contentColSpan = 3, // default to 3
    rightElement,
}) => {
  return (
    <>
        <Navigation />
        <div>
            <Grid my={5} px={8} templateColumns="repeat(4, 1fr)" gap={0} h="full">
                <GridItem colSpan={1}>
                    <Container>
                        <SideNavigation>
                            <SideNavigationItem
                            icon={<FiHome />}
                            title="Home"
                            href="/feed"
                            />
                            <SideNavigationItem
                            icon={<FiMap />}
                            title="Map View"
                            href="/map-view"
                            />
							<SideNavigationItem
							icon={<FiMail />}
							title='Messages'
							href='/messages'
							/>
                            <SideNavigationItem
                            icon={<FiSettings />}
                            title="Settings"
                            href="/service-provider/settings" 
                            />
                            <Divider />
		                </SideNavigation>
                    </Container>
                </GridItem>
                <GridItem px={4} colSpan={contentColSpan} overflowY="auto">
                    <Box>
                        {children}
                    </Box>
                </GridItem>
                <GridItem>
                    <Box>
                        {rightElement()}
                    </Box>
                </GridItem>
            </Grid>
        </div>
    </>
  )
}

type SideNavigationProps = {
    children: React.ReactNode[];
}

const SideNavigation: React.FC<SideNavigationProps> = ({
    children,
}) => {
    return (
		<Flex as="nav" direction="column" fontSize="sm" gap={3}>
			{children}
		</Flex>
    )
}

type SideNavItemProps = {
    title: string;
    icon: React.ReactElement;
    href: string;
}

const SideNavigationItem: React.FC<SideNavItemProps> = ({
    title,
    icon,
    href,
}) => {

    const router = useRouter();

    const isActive = router.pathname === href;

    return (
        <div>
            <Link href={href} passHref>
                <Flex
                cursor="pointer"
                direction="row"
                alignItems="center"
                gap={2}
                bg={isActive ? 'blue.100' : 'transparent'}
                p={3}            
                color={isActive ? 'blue.600' : 'gray.600'}
                borderRadius={5}
                fontWeight="medium"
                >
                    <Box>
                        {icon}
                    </Box>
                        <Text>
                            {title}
                        </Text>
                </Flex>
            </Link>
        </div>
    )
}
