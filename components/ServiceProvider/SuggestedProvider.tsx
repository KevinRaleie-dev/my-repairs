import { Stack, Avatar, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link';
import React from 'react'

type Props = {
    firstName: string;
    lastName: string;
    id: string;
}

export const SuggestedProvider: React.FC<Props> = ({
    firstName,
    lastName,
    id
}) => {
  return (
    <div>
        <Stack direction="row" align="center" fontSize="sm" spacing={3} mt={3}>            
            <Avatar
            size="md"
            name={`${firstName} ${lastName}`}
            />            
            <Flex
            direction={["column"]}
            >
            <Text fontWeight="medium">
                <Link href={`/service-provider/${id}`} passHref>
                        {`${firstName} ${lastName}`}
                </Link>
            </Text>
            <Text color="gray.500">
                @{firstName.toLowerCase()}{lastName.toLowerCase()}
            </Text>
            </Flex>
        </Stack>
    </div>
  )
}
