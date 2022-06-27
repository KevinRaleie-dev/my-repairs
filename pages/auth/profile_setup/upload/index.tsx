import { Box, Button, Container, Flex, Stack, Text } from '@chakra-ui/react'
import router from 'next/router'
import React from 'react'
import { useDropzone } from 'react-dropzone'
import { FiArrowRight } from 'react-icons/fi'
import { BackButton } from '../../../../components/ui/BackButton'
import { Nav } from '../../../../components/ui/Nav'

const Upload = () => {
  const [files, setFiles] = React.useState([]);
  const [showButton, setShowButton] = React.useState(false);

  const onDrop = React.useCallback((acceptedFiles: any) => {
    // do something with the files
    const files = acceptedFiles.map((file: any) => Object.assign(file, {
        preview: URL.createObjectURL(file)
    }));

    if(files) {
        setFiles(files);
        setShowButton(true);
    }

  }, [])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})


  return (
    <React.Fragment>
        <Nav />
        <Container
        mb={10}
        >
            <Flex
            alignItems="center"
            >
                <BackButton href='/Onboarding'/>
                <Text
                fontSize="2xl"
                ml={2}
                >
                    Upload documents
                </Text>
            </Flex>
            <Stack spacing={4} mt={4}>
                <Text color="gray.500">
                    Please upload some documents to verify your identity and complete your profile.
                </Text>
                <Box {...getRootProps()}
                cursor="pointer"
                borderRadius={8}
                border="2px dashed #e1e1e1"
                padding={4}
                height={200}
                display="grid"
                placeItems="center"
                >
                    <input
                     {...getInputProps()} />
                    {
                        isDragActive ? <Text>Drop the files here...</Text> : <Text>Drag & drop some files here, or click to select files</Text>
                    }
                </Box>
                <Flex
                alignItems="center"
                justifyContent="start"
                overflow="hidden"
                >
                    {files.map((file: any, index) => (
                        <Box key={index}
                        padding={3}
                        bgColor="gray.100"
                        borderRadius={5}
                        marginRight={3}
                        onClick={() => console.log(file.preview)}
                        >
                        <Text>
                            {file.name}
                        </Text>
                        </Box>
                    ))}
                </Flex>
                <Button
                display={showButton ? 'block' : 'none'}
                _active={{
                    transform: 'scale(0.9)',
                }}
                alignItems="center"
                rightIcon={<FiArrowRight />}
                onClick={() => router.push('/Onboarding/profile_setup/done')}
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

export default Upload