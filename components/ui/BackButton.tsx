import { Box } from '@chakra-ui/react'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'

type BackButtonProps = {
    href: string
}

export const BackButton: React.FunctionComponent<BackButtonProps> = ({
    href
}) => { 
    const router = useRouter();

  return (
    <Box
    onClick={async () => {
        router.replace(href)
        await signOut()
    }}                  
    borderRadius="50%"
    p={2}
    _hover={{
        backgroundColor: 'gray.100',
        cursor: 'pointer',
    }}
    _active={{
        transform: 'scale(0.7)',
    }}
    >
        <FiArrowLeft />
    </Box>
  )
}