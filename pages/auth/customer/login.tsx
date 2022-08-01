import { Box, Button, Flex, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure } from '@chakra-ui/react'
import NextLink from 'next/link'
import { CustomerSignInForm } from '../../../components/Customer/forms/Signin.form'
import { Logo } from '../../../components/ui/Logo'

const Login = () => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  return (
    <Box>
      <Logo />     
      <Box
      px={5}
      display="grid"
      placeItems={["center"]}
      >
        <Text 
        fontSize={["xl", "2xl"]}
        fontWeight="bold"
        color="purple.900"
        textAlign={["center"]}>
          Customer Sign In
        </Text>
			<Flex fontSize={["sm", "md"]} gap={1} mt={2}>
				<Text color="gray.600">Are you a service provider?</Text>
				<Text color="#D7345B" fontWeight="medium">
					<NextLink href='/auth/service-provider/login' passHref>
						Sign in
					</NextLink>
				</Text>
			</Flex>
      <Stack spacing={5} my={10}>      
        <CustomerSignInForm onOpen={onOpen} />
        <Box display={['flex']} justifyContent={['space-between']} fontSize={['sm']} color='gray.600'>
          <Text>
            Don&apos;t have an account ?
          </Text>
          <Text color="purple.900" fontWeight="medium">
            <NextLink href="/auth/customer/signup" passHref>                  
                Sign up            
            </NextLink>
          </Text>
        </Box>
      </Stack>
      <Text mt={20} textAlign="center" fontSize='xs' color='gray.400'>
        By continuing, you acknowledge that you have read and understood, and agree to MyRepairs Terms of Service and Privacy Policy.
      </Text>
    </Box>

             {/* Modal */}
      <Modal
        size="xs"       
        onClose={onClose} 
        isOpen={isOpen} 
        isCentered>
        <ModalOverlay />
        <ModalContent
        borderRadius={12}
        >
          <ModalHeader color="purple.900">Can&apos;t wait?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text
            fontSize="sm"
            fontWeight="medium"
            color="gray.500"
            >
                We are still working on the final touches of our platform. We will be ready to launch soon.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button 
            colorScheme="none"
            color="white"
            bgColor="#D7345B"
            onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  </Box>
  )
}

export default Login
