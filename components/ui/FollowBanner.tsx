import { Stack, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import { SocialLinks } from './SocialLink'

type FollowBannerProps = {
	mt: number
}

export const FollowBanner = ({ mt }: FollowBannerProps) => {
	return (
		<div>
			<Stack align="center" mt={mt} spacing={3} bg="#efefef" p={10}>
				<Text
					fontSize="5xl"
					fontWeight="semibold"
				>Follow us</Text>
				<Text lineHeight="tall" maxW="xl" textAlign="center">Be sure to follow us on one of social media pages to keep up with what&apos;s going on behind the scenes.</Text>
				<Flex gap={2}>
					<SocialLinks
						socialLink='facebook.com/myrepairs'
						socialIcon={<FiFacebook />}
					/>
					<SocialLinks
						socialLink='facebook.com/myrepairs'
						socialIcon={<FiTwitter />}
					/>
					<SocialLinks
						socialLink='facebook.com/myrepairs'
						socialIcon={<FiInstagram />}
					/>
				</Flex>
			</Stack>
		</div>
	)
}
