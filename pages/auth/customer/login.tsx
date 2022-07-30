import { Box, Button, Flex, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure } from '@chakra-ui/react'
import NextLink from 'next/link'
import { CustomerSignInForm } from '../../../components/Customer/forms/Signin.form'

const Login = () => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  return (
    <Box>
      <Box                    
      px={5}
      py={2}
      >
        <NextLink href="/" passHref>
          <Image
          src="/logo.svg"
          width={20}
          height={20}
          alt="My Repairs logo"
          />
        </NextLink>
      </Box>      
      <Box
      display="grid"
      placeItems={["center"]}
      >
        <Text 
        fontSize="3xl"
        fontWeight="bold"
        color="purple.900"
        align={["center"]}>
          Customer Log In
        </Text>
			<Flex gap={1} mt={2}>
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
          <NextLink href="/auth/customer/signup" passHref>                  
              <a>Sign up</a>            
          </NextLink>
        </Box>
      </Stack>
      <Text maxW='lg' align='center' fontSize='sm' color='gray.500'>
        By continuing, you acknowledge that you have read and understood, and agree to MyRepairs Terms of Service and Privacy Policy.
      </Text>
    </Box>

             {/* Modal */}
      <Modal        
        onClose={onClose} 
        isOpen={isOpen} 
        isCentered>
        <ModalOverlay />
        <ModalContent
        borderRadius={12}
        >
          <ModalHeader color="purple.900">Can&apos;t wait huh?</ModalHeader>
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
