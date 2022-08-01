import { Box, Image, Spinner, Flex } from '@chakra-ui/react'

export const Loading = () => {
	return (
		<Box
			width="100vw"
			height="100vh"
			display="grid"
			placeItems="center"
		>
			<Flex alignItems="center" direction="column">
				<Image
					src="/logo.svg"
					alt="Myrepairs logo"
					width={200}
					height={200}
				/>
				<Spinner />
			</Flex>
		</Box>
	)
}
