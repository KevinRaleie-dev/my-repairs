import { Box } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { FiArrowLeft } from 'react-icons/fi'

export const BackButton = () => { 
  const router = useRouter();

  return (
    <Box
    onClick={async () => {
        router.back()
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