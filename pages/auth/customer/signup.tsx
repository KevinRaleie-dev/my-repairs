import { Box, Image, Stack, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import { CustomerSignUpForm } from '../../../components/Customer/forms/Signup.form'
import { Logo } from '../../../components/ui/Logo'

const Onboarding = () => {

	return (
		<Box as="main">
			<Logo />
			<Box
				px={5}
				display="grid"
				placeItems={["center"]}
			>
				<Text
					fontSize={["xl", "2xl"]}
					color="purple.900"
					fontWeight="bold"
					textAlign="center">
					Sign up to get started
				</Text>
				<Text mt={3} color="gray.600" fontSize={["sm", "md"]}>Create your customer account now.</Text>
				<Stack spacing={5} my={10}>
					<CustomerSignUpForm />
					<Box display={['flex']} justifyContent={['space-between']} fontSize={['sm']} color='gray.500'>
						<Text>
							Already have an account?
						</Text>
						<Text fontWeight="medium" color="purple.900">
							<NextLink href="/auth/customer/login" passHref>
								Sign in
							</NextLink>
						</Text>
					</Box>
				</Stack>
				<Text mt={20} textAlign='center' fontSize='xs' color='gray.400'>
					By continuing, you acknowledge that you have read and understood, and agree to MyRepairs Terms of Service and Privacy Policy.
				</Text>
			</Box>
		</Box>
	)
}

export default Onboarding
