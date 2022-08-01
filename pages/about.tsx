import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { FollowBanner } from '../components/ui/FollowBanner';
import { Logo } from '../components/ui/Logo';
import Head from 'next/head'
import { BackButton } from '../components/ui/BackButton';


const About = () => {
	return (
		<Box as="main">
			<Head>
				<title>MyRepairs | About us</title>
			</Head>
			<Logo />
			<Box px={[5, 10, 10, 20]} pt={5}>
				<Flex alignItems="center" gap={5}>
					<BackButton />
					<Heading color="purple.900" as="h3">About Us</Heading>
				</Flex>
				<Stack spacing={5} align="center">
					<Stack textAlign="left" direction={["column-reverse", "column-reverse", "column-reverse", "row-reverse"]} align="center" spacing={10}>
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
							width={[250, 300, 500]}
							height={[250, 300, 500]}
						/>
					</Stack>
					<Stack textAlign="left" direction={["column-reverse", "column-reverse", "column-reverse", "row"]} align="center" spacing={10}>
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
							width={[250, 300, 500]}
							height={[250, 300, 500]}
						/>
					</Stack>
				</Stack>
			</Box>
			<FollowBanner mt={20} />
		</Box>
	)
}



export default About;