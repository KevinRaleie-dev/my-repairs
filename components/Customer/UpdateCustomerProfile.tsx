import {Box, Button, Divider, Flex, FormControl, Input, InputGroup, InputLeftElement, Text, useToast} from "@chakra-ui/react"
import {useForm} from "react-hook-form"
import {FiMail, FiPhone} from "react-icons/fi"
import {useMutation, useQuery, useQueryClient} from "react-query"
import {meQuery, updateCustomerDetails} from "../../src/api-calls"
import {UpdateProfileLayout} from "../ui/UpdateProfileLayout"

type PersonalDetailsFormProps = {
  firstName: string;
  lastName: string;
  emailOrPhone: string;
}


export const UpdateCustomerProfile = () => {
  const toast = useToast()
  const { data: me, isLoading, } = useQuery('me-query', meQuery)
  const queryClient = useQueryClient()
  const mutation = useMutation(async (data: PersonalDetailsFormProps) => {
	return await updateCustomerDetails(data.firstName, data.lastName, data.emailOrPhone)
  }, {
  	onSuccess: () => {
        queryClient.invalidateQueries('me-query')
	}
  })
  const { register, handleSubmit, formState } = useForm<PersonalDetailsFormProps>();

  const handleToast = () => {
	toast({
	  title: 'Success',
	  description: 'Personal details updated successfully',
	  status: 'success',
	  duration: 9000,
	  isClosable: true,
	})
  }

  const onSubmit = async (data: PersonalDetailsFormProps) => {
	await mutation.mutateAsync(data);
	handleToast();
  }


  if (isLoading) {
	return <p>Loading...</p>
  }

	return (
		<>
            <Flex direction="column" gap={1}>
				<Text fontWeight="medium" mb={3} fontSize="xl" color="purple.900">
				    Personal info
				</Text>
			</Flex>
			<Divider />
			<Box>
			    <form onSubmit={handleSubmit(onSubmit)}>
				    <UpdateProfileLayout label="Full name">
					    <Flex gap={2}>	
							<FormControl>
							   <Input
								{...register('firstName')}
							    placeholder="First name"
								defaultValue={me.data.firstName}
								name="firstName"
							   /> 
							</FormControl>
							<FormControl>
							   <Input
							    {...register('lastName')}
							    placeholder="Last name"
								defaultValue={me.data.lastName}
								name="lastName"
							   /> 
							</FormControl>
						</Flex>
					</UpdateProfileLayout>
					<UpdateProfileLayout label="Email" description="Your primary email address or phone number">
					    <FormControl>
						   <InputGroup>
						        <InputLeftElement>
								    <FiPhone />
								</InputLeftElement>
								<Input
								 {...register('emailOrPhone')}
							     placeholder="Email"
								 defaultValue={me.data.emailOrPhone}
								 name="email"
								/>
						   </InputGroup>
						</FormControl>
					</UpdateProfileLayout>
				    <Flex px={8} direction="row" justifyContent="flex-end" mt={5}>
						<Button 
						borderRadius={10} 
						isLoading={mutation.isLoading} 
						type="submit" 
						bgColor="#D7345B" 
						colorScheme="none" 
						color="white">Update details</Button>
					</Flex>
				</form>
			</Box>
		</>
	)
}
