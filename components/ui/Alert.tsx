import { AlertIcon, AlertTitle, AlertDescription, Alert as A } from '@chakra-ui/react'
import React from 'react'

type AlertProps = {
    description: string
    title: string;
    status: 'success' | 'warning' | 'error' | 'info';
}

export const Alert = ({
    description,
    title,
    status
}: AlertProps) => {
  return (
    <A
    status={status}
    variant='subtle'
    flexDirection='column'
    alignItems='center'
    justifyContent='center'
    textAlign='center'
    height='200px'
    >
        <AlertIcon boxSize='40px' mr={0} />
        <AlertTitle mt={4} mb={1} fontSize='lg'>
            {title}
        </AlertTitle>
        <AlertDescription maxWidth='sm'>
            {description}
        </AlertDescription>
    </A>
  )
}
