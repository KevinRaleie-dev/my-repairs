import {Button, Flex, Box, Text, Container} from '@chakra-ui/react'
import {signOut} from 'next-auth/react'
import {useRouter} from 'next/router'
import React from 'react'
import {FiDelete, FiLogOut, FiTrash2} from 'react-icons/fi'
import {clearToken} from '../../src/utils/token'

export const Account = () => {

	const router = useRouter()

  return (
    <div>
		<Text fontSize="xl" fontWeight="medium" color="purple.900" mb={5}>
			Your account
		</Text>
		<Container>
			<Flex onClick={() => {
				signOut()
				clearToken()
				router.replace('/');
				
			}} p={3} bgColor="gray.100" fontWeight="medium" cursor="pointer" alignItems="center" gap={3} mb={10} >
				<FiLogOut />
				<Text>Log out</Text>
			</Flex>
			<Flex direction="column" gap={2}>
			<Text fontWeight="semibold" fontSize="lg" color="#ED1C24">
				Dangerous area
			</Text>
			<Box p={3} bgColor="gray.100" display="flex" flexDirection="row" cursor="pointer" alignItems="center" fontWeight="medium">
				<FiTrash2 />
				<Text>
					Delete account
				</Text>
			</Box>
			<Text fontSize="sm" color="gray.500">
				Once you delete your account, all your related data will be lost. You cannot undo this action.
			</Text>
			</Flex>
		</Container>
		
        
    </div>
  )
}
