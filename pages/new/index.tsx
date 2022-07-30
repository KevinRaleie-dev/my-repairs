import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Stack, Textarea } from '@chakra-ui/react'
import axios from 'axios'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { FaWindowClose } from 'react-icons/fa'
import { Navigation } from '../../components/Navigation'
import { getToken } from '../../src/utils/token'


type FormData = {
    title: string
    requestDescription: string
    service: string
    location: string
    compensation: number
}

async function createRequestHandler(data: FormData) {
    try {

        const token = getToken("mr-token");

        const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/requests/create`, data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        return response.data;
    } catch (error) {
        return error
    }
}

const NewRequest = () => {
    const { register, handleSubmit, formState } = useForm<FormData>()
    const router = useRouter()

    const onSubmit = async (data: FormData) => {
        const response = await createRequestHandler({
            title: data.title,
            requestDescription: data.requestDescription,
            service: data.service,
            location: data.location,
            compensation: Number(data.compensation)
        })
        
        if(response?.success) {
            router.push('/feed')
        }
        
    }
        

  return (
    <Box width="100vw" height="100vh" bgColor="#fafafa">
        <Head>
            <title>New Request | MyRepairs</title>
        </Head>
        <Navigation />
        <Container mt={10} width="4xl">
            <Flex alignItems="center" justifyContent="space-between">
                <Heading size="md" mb={2}>Create Request</Heading>
                <Box cursor="pointer" onClick={() => router.back()}>
                    <FaWindowClose />
                </Box>
            </Flex>
            <Box width="full" bg="white" px={10} py={5} borderWidth="1px" borderRadius="md">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={5}>
                        <Input
                        {...register('title')}
                        type="text"
                        placeholder='New request title here..'
                        name="title"
                        _placeholder={{
                            fontWeight: 'bold',
                            fontSize: '30px'                            
                        }}
                        height={50}
                        fontWeight="bold"
                        fontSize="2xl"
                        variant="unstyled" size="lg" />
                        <FormControl>
                            <FormLabel color="gray.600"> I am looking for a..</FormLabel>
                            <Input
                            {...register('service')}
                            type="text"
                            name="service"
                            fontWeight="semibold"
                            variant="unstyled"
                            placeholder='Plumber, Electrician, etc.'
                            />
                        </FormControl>                       
                        <FormControl>
                            <FormLabel color="gray.600">Where?</FormLabel>                            
                            <Input
                            {...register('location')}
                            type="text"
                            name='location'
                            fontWeight="semibold"
                            variant="unstyled"
                            placeholder='Request location here..'
                            />                                                            
                        </FormControl>
                        <FormControl>
                            <FormLabel color="gray.600">How much are you willing to pay?</FormLabel>                            
                            <Input
                            {...register('compensation')}
                            fontWeight="medium"
                            type="number"
                            name="compensation"
                            min={0}
                            variant="unstyled"
                            placeholder='Compensation amount... R xxx'
                            />                                                            
                        </FormControl>
                        <FormControl>
                            <FormLabel color="gray.600">Description</FormLabel>
                            <Textarea
                            {...register('requestDescription')}
                            name="requestDescription"
                            placeholder='Write a brief description of your request here..'
                            fontSize="lg"
                            variant="unstyled"
                            />
                        </FormControl>
						<Button borderRadius={10} colorScheme="blue">Submit</Button>
                    </Stack>
				</form>
            </Box>
        </Container>

    </Box>
  )
}

export default NewRequest
