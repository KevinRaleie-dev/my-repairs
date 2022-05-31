import {
    Avatar,
    Box,
    Button,
    Center,
    Container,
    Divider,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Text,
    Textarea
} from '@chakra-ui/react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'


import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { Skills } from '../../../components/Skills'
import { BackButton } from '../../../components/ui/BackButton'
import { Nav } from '../../../components/ui/Nav'
import { Section } from '../../../components/ui/Section'



const ProfileSetup = () => {

  const {data} = useSession()
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const router = useRouter()

  return (
    <React.Fragment>
        <Nav />
        <Container        
        mb={10}
        >
            <Flex
            alignItems="center"
            >
                <BackButton href='/Onboarding' />
                <Text
                fontSize='2xl'
                ml={2}
                >
                    Setting up your profile
                </Text>
                
            </Flex>
            <Stack spacing={4} mt={5}>
                <Center>
                    <Avatar
                    size="xl"
                    name={`${firstName} ${lastName}`}
                    src={data?.user?.image!}
                    />
                </Center>
                <Section title='Personal Details'/>
                <Flex
                alignItems="center"
                justifyContent="space-around"
                >
                    <FormControl>
                        <FormLabel htmlFor='password'>First Name</FormLabel>
                        <Input
                        defaultValue={data?.user?.name!.split(' ')[0]}
                        focusBorderColor='none'
                        onChange={(e) => setFirstName(e.target.value)} id='password' type='text' />                      
                    </FormControl>
                    <FormControl ml={3}>
                        <FormLabel htmlFor='password'>Last Name</FormLabel>
                        <Input defaultValue={data?.user?.name!.split(' ')[1]} onChange={(e) => setLastName(e.target.value)} id='password' type='text' />                      
                    </FormControl>
                </Flex>
                <FormControl>
                    <FormLabel htmlFor='password'>Email</FormLabel>
                    <Input
                    defaultValue={data?.user?.email!}
                    id='password' type='email' placeholder='example@example.com' />                      
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='password'>Contact Number</FormLabel>
                    <Input
                    placeholder='+639123456789'
                     id='password' type='number' />                      
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='password'>Bio</FormLabel>
                    <Textarea id='password' placeholder='Tell us a little bit about yourself.' />                      
                </FormControl>
                <Section title='Work'/>
                <FormControl>
                    <FormLabel htmlFor='password'>Profession</FormLabel>
                    <Input id='password' type='text' placeholder='e.g. Plumber' />                      
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='password'>Rates per hour (in Rands)</FormLabel>
                    <Input id='password' type='text' placeholder='Rxxx.xx' />                      
                </FormControl>                
                <Skills />
                <Section title='Location'/>
                <FormControl>
                    <FormLabel htmlFor='password'>Address</FormLabel>
                    <Input
                    placeholder='e.g. 123 Main St, Pretoria'
                    id='password' type='text' />                      
                </FormControl>
                <Flex
                alignItems="center"
                justifyContent="space-around"
                >
                    <FormControl>
                        <FormLabel htmlFor='password'>City/Town</FormLabel>
                        <Input
                        placeholder='e.g. Cape Town'
                        focusBorderColor='none'
                        type='text' />                      
                    </FormControl>
                    <FormControl ml={3}>
                        <FormLabel htmlFor='password'>Suburb</FormLabel>
                        <Input
                        placeholder='e.g. Sandton'
                        type='text' />                      
                    </FormControl>
                </Flex>
                <Flex
                alignItems="center"
                justifyContent="space-around"
                >
                    <FormControl>
                        <FormLabel htmlFor='password'>Province</FormLabel>
                        <Input
                        placeholder='e.g. Western Cape'
                        focusBorderColor='none'
                        type='text' />                      
                    </FormControl>
                    <FormControl ml={3}>
                        <FormLabel htmlFor='password'>Postal Code</FormLabel>
                        <Input 
                        placeholder='e.g. 2200'
                        type='text' />                      
                    </FormControl>
                </Flex>
                <Button
                _active={{
                    transform: 'scale(0.9)',
                }}
                rightIcon={<FiArrowRight />}
                onClick={() => router.push('/Onboarding/profile_setup/upload')}
                height={50}
                colorScheme="#D7345B"
                bgColor="#D7345B"
                >
                    Continue
                </Button>
            </Stack>
        </Container>
    </React.Fragment>
  )
}

export default ProfileSetup

