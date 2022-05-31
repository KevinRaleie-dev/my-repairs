import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Stack, Textarea, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { FiPlus } from 'react-icons/fi'

export const RequestRepair = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
        <Button
        onClick={onOpen}
        bgColor='#D7345B'
        color='white'
        colorScheme='#D7345B'
        rightIcon={<FiPlus />}
        mx={2}
        mb={3}
        >
            Request Repair
        </Button>


      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Request Repair</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={3}>
                <FormControl>
                    <FormLabel htmlFor='email'>What are you looking for?</FormLabel>
                    <Select>
                        <option>Select an option</option>
                        <option>Plumber</option>
                        <option>Electrician</option>
                        <option>Carpenter</option>                        
                        <option>Other</option>
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='email'>What is your location?</FormLabel>
                    <Input
                    placeholder='Enter your location'
                     />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='email'>How much are you willing to pay?</FormLabel>
                    <Input
                    placeholder='Enter an amount in Rands'
                     />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='email'>Description</FormLabel>
                    <Textarea
                    placeholder="Please describe the problem you are facing"
                     />
                </FormControl>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
            colorScheme="#D7345B"
            bgColor='#D7345B'
            color="white"
            >Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
