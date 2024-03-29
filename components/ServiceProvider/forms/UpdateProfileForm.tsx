import { FormControl, Input, Textarea, Flex, Box, Tag, Button, Text, InputGroup, InputLeftElement, useToast } from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { createServiceProviderProfileHandler, meQuery } from '../../../src/api-calls'
import { capitalize } from '../../../src/utils/capitalize'
import { convertToObject } from '../../../src/utils/convertToObject'
import { UpdateProfileLayout } from '../../ui/UpdateProfileLayout'

type FormProps = {
	profession: string
	bio?: string
	ratePerHour: number
	skills: string[]
}

export const UpdateProfileForm = () => {
	const toast = useToast()
	const mutation = useMutation(async (data: FormProps) => {
		return await createServiceProviderProfileHandler(data)
	})
	const queryClient = useQueryClient()
	const [skill, setSkill] = React.useState<string>('')
	const [skills, setSkills] = React.useState<string[]>([])
	const { register, handleSubmit, formState, setError } = useForm<FormProps>();
	const { data: me } = useQuery('me-query', meQuery, {
		onSuccess: (data) => {
			if (data?.data?.profile !== null) {
				setSkills(data.data.profile.skills)
			}
		}
	})

	const handleToast = () => {
		toast({
			title: 'Success',
			description: 'Profile updated successfully',
			status: 'success',
			duration: 9000,
			isClosable: true,
		})
	}

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
		const response = await mutation.mutateAsync({
			profession: data.profession,
			bio: data.bio,
			ratePerHour: data.ratePerHour,
			skills: skills
		})

		if (response?.response?.data?.success === false) {
			const errors = convertToObject(response.response.data.errors);
			Object.keys(errors).forEach(key => {
				setError(key as any, { message: errors[key] }, { shouldFocus: true })
			})
			return;     // why do i have to return early ??  
		}

		queryClient.invalidateQueries('me-query')
		handleToast()
	}

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Text
					mt={10}
					color="purple.900"
					fontWeight="medium"
					fontSize={["lg", "xl"]}>Profile details</Text>
				<Text fontSize={["xs", "sm"]} color="gray.600">
					This section handles updating your profile details. Click the Update profile button to save your changes.
				</Text>
				<UpdateProfileLayout label='Profession' description='What do you do for work?'>
					<FormControl>
						<Input
							{...register("profession")}
							focusBorderColor='none'
							bg="white"
							defaultValue={me.data?.profile?.profession}
							placeholder="eg. Plumber, Electrician, etc."
						/>
					</FormControl>
				</UpdateProfileLayout>
				<UpdateProfileLayout label="Bio" description='Write a short introduction about yourself.'>
					<FormControl>
						<Textarea
							{...register("bio")}
							focusBorderColor='none'
							bg="white"
							defaultValue={me.data?.profile?.bio}
							placeholder="I am a plumber and I am good at fixing things..."
						/>
					</FormControl>
				</UpdateProfileLayout>
				<UpdateProfileLayout label="Skills" description='List out some of the skills you have.'>
					<FormControl>
						<Input
							bg="white"
							focusBorderColor='none'
							onChange={handleSkillChange}
							placeholder='Add skills'
						/>
						<Text fontSize="xs" color="gray.500">Press the `spacebar` to save multiple skills. For multiple words use `-`</Text>
						<Flex
							alignItems="baseline"
							justifyContent="flex-start"
							gap={2}
							flexWrap="wrap"
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
						<InputGroup>
							<InputLeftElement>
								R
							</InputLeftElement>
							<Input
								{...register("ratePerHour")}
								bg="white"
								focusBorderColor='none'
								defaultValue={me.data?.profile?.ratePerHour}
								min={1}
								max={250}
								type="number"
								name="ratePerHour"
								placeholder='R0.00'
							/>
						</InputGroup>
						{formState.errors.ratePerHour && <Text fontSize="xs" color="red.500">
						{formState.errors.ratePerHour.message}</Text>}
					</FormControl>
				</UpdateProfileLayout>
				<Flex
					mt={2}
					px={[0, 10]}
					justifyContent="flex-end"
				>
					<Button
						isLoading={mutation.isLoading}
						size="sm"
						type="submit"
						colorScheme="none"
						bgColor="#D7345B"
						color="white"
					>
						Update profile
					</Button>
				</Flex>
			</form>
		</div>
	)
}
