import { Flex, FormControl, FormLabel, Input, Tag, TagCloseButton, TagLabel } from '@chakra-ui/react'
import React from 'react'

export const Skills = () => {

  const [skill, setSkill] = React.useState<string>('');
  const [skills, setSkills] = React.useState<string[]>([]);

  const handleSkillSubmit = React.useCallback((e: React.FormEvent) => {
    e.preventDefault();

    skills.push(skill);

    setSkill('');
  }, [skills, skill])
  return (
    <div>
        <form onSubmit={handleSkillSubmit}>
            <FormControl>
                <FormLabel htmlFor='skills'>Skills</FormLabel>
                <Input
                onChange={(e) => setSkill(e.target.value)}
                id='skills' type='text' placeholder='e.g. Soldering, Brick laying' />                      
            </FormControl>
        </form>
        <Flex alignItems="center" justifyContent="start">
            {skills.map((skill, index) => (
                <div  key={index}>
                    <Tag
                    mt={3}
                    mr={3}
                    size='md'
                    key={index}
                    borderRadius='full'
                    variant='solid'
                    colorScheme='green'
                    >
                        <TagLabel fontWeight="600">{skill}</TagLabel>
                        <TagCloseButton />
                    </Tag>
                </div>
            ))}
        </Flex>
    </div>
  )
}