import { Box, Button, Container, Flex, Grid, Heading, Image, Stack, Text } from '@chakra-ui/react'
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
						display={["none", "none", "none", "flex"]}
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
						display={["none", "none", "none", "flex"]}
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
								Join as Service Provider
							</Button>
						</Link>
					</Flex>
				</Flex>
			</Flex>
			{/* main */}
			<Box
				as="main"
			>
				<Grid my={[10, 20]}
					templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]} gap={2}
					px={[5, 10, 15, 20]}>
					<Box>
						<Stack spacing={6} textAlign={["center", "center", "center", "left"]}>
							<Text
								fontWeight="bold"
								color="#D7345B"
								fontSize={["md", "lg"]}
							>
								MyRepairs Service Provider Engagement Platform
							</Text>
							<Heading size="3xl" color="purple.900">
								Find A Maintenance Person <span style={{ color: "#66CECA" }}>In Your Area</span>
							</Heading>
							<Text
								fontSize={["sm", "lg"]}
								color="gray.600">
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
										Sign up to claim your spot
									</Button>
								</Link>
								<Link href="/auth/service-provider/join" passHref>
									<Button display={["inline", "inline", "inline", "none"]} variant="link" mt={5} ml={[0, 2]}>
										Join as Service Provider
									</Button>
								</Link>
							</Box>
						</Stack>
					</Box>
					<Box display={["none", "none", "none", "block"]}>
						<Image
							src="/cuate.svg"
							alt="repair service"
							height={561}
							width={610}
						/>
					</Box>
				</Grid>
			</Box>

			<Box as="section">
				<Box px={[5, 10, 20]} py={5}>
					<Stack spacing={5} align="center">
						<Text 
						fontWeight="bold"
						fontSize={["5xl", "6xl"]}
						color="blue.900" 
						textAlign="center">Making Your Life More Convenient</Text>
						<Stack direction={["column-reverse", "column-reverse", "column-reverse", "row"]} align="center" spacing={10}>
							<Flex 
							textAlign={["center", "center", "left"]}
							fontSize={["sm", "sm", "md"]}
							lineHeight="tall" 
							color="gray.700" 
							direction="column" 
							gap={5} 
							maxW="lg">
								<Text>
									Where do you go during the middle of the day if you need a handyman or if one of your household appliances has to be repaired? What should you do in the event that an unexpected emergency arises, such as a pipe in your kitchen or bathroom that is leaking?
								</Text>
								<Text>
									Traditionally, you would either run to the nearest business that specialized in repairing home appliances or plumbing, or you would have to search for a reliable person. On the other hand, a lot of new home service businesses have started up recently. These businesses take advantage of the on-demand economy and make it easier to find a qualified person.
								</Text>
								<Text>
									Myrepairs is the answer; we simplify your life and make it simpler.
								</Text>
							</Flex>
							<Image
								src="/Feb-Business_9.jpg"
								alt="question mark image"
								width={[200, 300, 400, 500]}
								height={[200, 300, 400, 500]}
							/>
						</Stack>
					</Stack>
				</Box>
			</Box>

			<Box as="section">
				{/* <Box px={20} py={5}>
					<Stack spacing={5} align="center">
						<Heading color="purple.900" as="h3">About Us</Heading>
						<Stack direction={["column", "row-reverse"]} align="center" spacing={10}>
							<Flex lineHeight="tall" color="gray.700" direction="column" gap={5} maxW="lg">
								<Text>
									Myrepairs is an internet-based on-demand home service company that was founded with the intention of making homeowners and their families more content. It makes it possible for consumers to obtain rapid home services of a high quality while simultaneously enhancing the efficiency of personnel. We want to solve three of the most common problems that customers have: delays, poor quality, and not being able to see how much something costs.
								</Text>
								<Text>
									We offer a platform that allows clients searching for specialized services to connect with qualified and professional service providers. Once a user has signed up for the site, our system for finding a match will look for experts who match the user&apos;s criteria and are available in the area.
								</Text>
							</Flex>
							<Image
								src="/networking.jpg"
								alt="networking image"
								width={500}
								height={500}
							/>
						</Stack>
						<Stack direction={["column", "row"]} align="center" spacing={10}>
							<Flex lineHeight="tall" color="gray.700" direction="column" gap={5} maxW="lg">
								<Text color="purple.900" fontWeight="semibold" fontSize="2xl">Our Story</Text>
								<Text>
									Myrepairs was formed out of need, like many great things. Isn&apos;t it hard to find reliable service providers who always show up on time when you need help with small but important tasks around the house?
								</Text>
								<Text>
									We&apos;ve all been there. The moment we began, After a series of services that were little more than glorified directories, we decided to build Myrepairs. Myrepairs has made it simpler than ever to fix your appliances or locate a plumber. We want to help you solve all of your home problems quickly, easily, and most importantly, affordably. We do this with personalized online solutions, unmatched service quality, and professionals who have been fully vetted and are always ready to help.
								</Text>
								<Text>
									In keeping with our name, we&apos;re here to assist (Myrepairs). Our goal is to provide the best on-demand service in South Africa.
								</Text>
								<Text>
									Time and day the user chooses.
								</Text>
							</Flex>
							<Image
								src="/help.jpg"
								alt="support services image"
								width={500}
								height={500}
							/>
						</Stack>
					</Stack>
				</Box> */}
				<Box mx={[0, 0, 0, 20]} my={[0, 0, 0, 20]} borderRadius={[0, 0, 0, 20]} py={8} px={[3, 5]} bgColor="#D7345B" color="white">
					<Stack spacing={10} align="center">
						<Heading textAlign="center">How do we ensure that you get the best possible help from us?</Heading>
						<Flex gap={2} fontWeight="medium" fontSize="sm" direction={["column", "column", "row"]} justifyContent="space-between">
							<Box bgColor="#DF5D7C" p={2} borderRadius={10} maxW="sm">
								<Text>
									To guarantee that you get the finest possible service, each of our partners has been thoroughly vetted and has significant industry expertise.
								</Text>
							</Box>
							<Box bgColor="#DF5D7C" p={2} borderRadius={10} maxW="sm">
								<Text>
									Before you make any payments, we will let you know exactly what it is that you&apos;ll be paying for and how much it will be.
								</Text>
							</Box>
							<Box bgColor="#DF5D7C" p={2} borderRadius={10} maxW="sm">
								<Text>
									Not only do we provide the highest quality of service that is humanly feasible, but we also give a service warranty.
								</Text>
							</Box>
						</Flex>
						<Flex gap={2} fontWeight="medium" fontSize="sm" direction={["column", "column", "row"]} justifyContent="space-between">
							<Box bgColor="#DF5D7C" p={2} borderRadius={10} maxW="sm">
								<Text>
									You will have more time to unwind and be at peace thanks to the intuitive nature of our platform, which makes it very user-friendly.
								</Text>
							</Box>
							<Box bgColor="#DF5D7C" p={2} borderRadius={10} maxW="sm">
								<Text>
									You may choose from a variety of payment methods. Make use of our trustworthy and dependable online payment solutions.
								</Text>
							</Box>
							<Box bgColor="#DF5D7C" p={2} borderRadius={10} maxW="sm">
								<Text>
									We are here to assist you whenever you want our assistance, day or night, seven days a week. You may get help at any time that is most convenient for you.
								</Text>
							</Box>
						</Flex>
					</Stack>
				</Box>
				<Stack color="white" bgColor="black" py={10} spacing={5} lineHeight="tall" align="center" px={[5, 10, 20]} textAlign="center">
					<Text
						fontWeight="semibold"
						fontSize={["3xl", "5xl"]}
					>Providing Services and Establishing Pricing</Text>
					<Text fontSize={["sm", "md", "xl"]}>
						We cater both the products we provide and the pricing we charge to each individual client in order to give them the highest possible level of service. Customers have the option to choose between on-demand services and scheduled services, and they may make use of any of the listed service providers.
					</Text>
					<Text fontSize={["sm", "md", "xl"]}>
						And Because we only hire the most qualified service professionals and do thorough background checks on them before letting them join our team, you can be sure that your money will be well spent and that you will always be safe.
					</Text>
				</Stack>
			</Box>
		</Box>
	)
}


type NavLinkProps = {
	href: string;
	title: string;
}

function NavLink({ href, title }: NavLinkProps) {
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

export default Home
