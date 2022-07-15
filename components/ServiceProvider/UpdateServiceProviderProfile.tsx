import { Box, Button, Divider, Flex, FormControl, Input, InputGroup, InputLeftElement, Tag, Text, Textarea } from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { FiMail, FiPhone } from 'react-icons/fi'
import { useQuery } from 'react-query'
import { UpdateProfileLayout } from '../../components/ui/UpdateProfileLayout'
import axios from 'axios'
import { capitalize } from '../../src/utils/capitalize'
import { getToken } from '../../src/utils/token'

// TODO: If user is not verified, we will use the createProfileHandler instead of the updateProfileHandler

type FormProps = {
    firstName: string
    lastName: string
    profession: string
    bio?:string    
    ratePerHour: number
}

const meFetcher = async () => {
  try {
    const url = 'http://localhost:5000/api/auth/service-provider/me'
	const token = getToken()
    const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

    return response.data;
  }
  catch(error) {
    return error;
  }
}

const createProfileHandler = async (data: FormProps, skills: string []) => {
	try {
		const token = getToken()
		const url = 'http://localhost:5000/api/service-providers/create-profile'
		const response = await axios.post(url, {
					profession: data.profession,
					bio: data.bio,
					ratePerHour: Number(data.ratePerHour),
					skills: skills
				}, {
					headers: {
						Authorization: `Bearer ${token}`
					}
				}

		)

		return response.data
	}
	catch(error) {
		return error
	}
}

const updatePersonalDetailsHandler = async (firstName: string, lastName: string) => {
	try {
		const token = getToken()
		const url = 'http://localhost:5000/api/service-providers/update-personal-details'
		const response = await axios.patch(url, {
			firstName: firstName,
			lastName: lastName
		}, {
			headers: {
				Authorization: `Bearer ${token}`
			},
		})

		return response.data
	}
	catch(error) {
		return error
	}
}

export const UpdateServiceProviderProfile = () => {
  const [skill, setSkill] = React.useState<string>('')
  const [skills, setSkills] = React.useState<string[]>([])
  const [edit, setEdit] = React.useState<boolean>(false)
  const { register, handleSubmit, formState } = useForm<FormProps>() // will use formState to display form errors later

  // lets fetch user data using react query
  const { data: me, isLoading } = useQuery('me-query', meFetcher, {
    onError: (err) => {
        console.error('error', err)
    },
	refetchOnMount: false,
	onSettled: (data, error) => {
		console.log(data)

	}
  })

  const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSkill(e.target.value)

    document.addEventListener('keyup', (e: KeyboardEvent) => {
        if (e.code === 'Space') {

            if (skill.length > 0) {
                const newSkill = capitalize(skill);
                setSkills([...skills, newSkill])
                setSkill('')
            }
        }
    });
  }
  
  const onSubmit = async (data: FormProps) => {
	try {
		// move these request into a single 
		const {firstName, lastName} = data
		const updateResponse = await updatePersonalDetailsHandler(firstName, lastName)
		const createResponse = await createProfileHandler(data, skills)

		console.log('update response', updateResponse)
		console.log('create response', createResponse)
	}
	catch(error) {
		console.log(error)
	}
  }

  return (
    <Box mb={10}>
        {
            isLoading ? (
                <>
                    Loading...
                </>
            ) : (
                <>  
                    <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    >
                        <Flex
                        direction="column"
                        gap={1}
                        >
                        <Text
                        fontWeight="medium"
                        fontSize="xl"
                        color="purple.900"
                        >
                        Personal info
                        </Text>
                        <Text
                        fontSize="sm"
                        color="gray.600"
                        mb={5}
                        >
                        Update your personal details and profile here. Click the edit button to make changes.
                        </Text>
                        </Flex>
                        <Button
                        _hover={{
                        opacity: 1
                        }}
                        color="blue.500"
                        fontWeight="medium"
                        onClick={() => setEdit(prev => !prev)}
                        >
                        {edit ? 'Cancel' : 'Edit details'}
                        </Button>
                    </Flex>
                    <Divider />              
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <UpdateProfileLayout label='Full name'>
                            <Flex gap={3}>
                                <FormControl>
                                    <Input
                                    {...register("firstName")}
									focusBorderColor="black"
                                    bg="white"
                                    type="text"
									value={me.data?.firstName}
                                    disabled={!edit}
                                    placeholder="First name"
                                    />
                                </FormControl>
                                <FormControl>
                                    <Input
                                    {...register("lastName")}
									focusBorderColor="black"
                                    bg="white"
                                    type="text"
									value={me.data?.lastName}
                                    disabled={!edit}
                                    placeholder="Last name"
                                    />
                                </FormControl>
                            </Flex>
                        </UpdateProfileLayout>
                        <UpdateProfileLayout label='Email address'>
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement>
                                        <FiMail />
                                    </InputLeftElement>
                                    <Input
                                    bg="white"
									focusBorderColor='black'
                                    value={me.data?.email}
                                    variant="filled"
                                    type="email"
                                    disabled={true}
                                    placeholder="Email address"    
                                    />
                                </InputGroup>
                            </FormControl>
                        </UpdateProfileLayout>
                        <UpdateProfileLayout label='Phone number'>
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement>
                                        <FiPhone />
                                    </InputLeftElement>
                                    <Input
                                    bg="white"
									focusBorderColor='black'
                                    value={me.data?.phone}
                                    variant="filled"
                                    type='text'
                                    disabled={true}
                                    placeholder='Phone number'
                                    />
                                </InputGroup>
                            </FormControl>
                        </UpdateProfileLayout>
                        <UpdateProfileLayout label='Profession' description='What do you do for work?'>
                            <FormControl>
                                <Input
                                {...register("profession")}
								focusBorderColor='black'
                                bg="white"
                                disabled={!edit}
								value={me.data?.profile?.profession}
                                placeholder="eg. Plumber, Electrician, etc."
                                />
                            </FormControl>
                        </UpdateProfileLayout>
                        <UpdateProfileLayout label="Bio" description='Write a short introduction about yourself.'>
                            <FormControl>
                                <Textarea
                                {...register("bio")}
								focusBorderColor='black'
                                bg="white"
								value={me.data?.profile?.bio}
                                disabled={!edit}
                                placeholder="I am a plumber and I am good at fixing things..."
                                />
                            </FormControl>
                        </UpdateProfileLayout>
                        <UpdateProfileLayout label="Skills" description='List out some of the skills you have.'>
                            <FormControl>
                                <Input
                                bg="white"
								focusBorderColor='black'
                                disabled={!edit}
                                onChange={handleSkillChange}
                                placeholder='Add skills'
                                />
                                <Text fontSize="xs" color="gray.500">Press the `spacebar` to save multiple skills. For multiple words use `-`</Text>
                                <Flex
                                alignItems="baseline"
                                justifyContent="flex-start"
                                gap={2}
                                mt={2}
                                >
                                    {skills.map((skill, index) => (
                                        <Box key={index}>
                                            <Tag>{skill}</Tag>
                                        </Box>
                                    ))}
                                </Flex>
                            </FormControl>
                        </UpdateProfileLayout>
                        <UpdateProfileLayout label="Rate per hour" description="How much do you charge per hour for a job?">
                            <FormControl>
                                <Input
                                {...register("ratePerHour")}
                                bg="white"
								focusBorderColor='black'
								value={me.data?.profile?.ratePerHour}
                                min={0}
                                disabled={!edit}
                                type="number"
								name="ratePerHour"
                                placeholder='R0.00'
                                />
                            </FormControl>
                        </UpdateProfileLayout>
                        <Flex
                        mt={8}
                        justifyContent="flex-end"
                        >
                            <Button
                            disabled={!edit}
                            type="submit"
                            colorScheme="none"
                            bgColor="#D7345B"
                            color="white"
                            >
                                Save
                            </Button>
                        </Flex>
                    </form>
                </>
            )
        }
    </Box>
  )
}
