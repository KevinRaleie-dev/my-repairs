import {Box, Center, Flex, Text} from '@chakra-ui/react';
import React, {useCallback, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import {FiDownloadCloud, FiUploadCloud} from 'react-icons/fi';

export const UploadDocuments = () => {
	const [files, setFiles] = useState([])

	const onDrop = useCallback((acceptedFiles: any) => {
		const files = acceptedFiles.map((file: any) => Object.assign(file,{
			preview: URL.createObjectURL(file)
		}))

		if(files) {
			setFiles(files)
		}
	}, [])

	const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop, accept: {
		'application/pdf': ['.pdf'],
		'application/doc': ['.doc'],
		'application/docx': ['.docx']
	}, maxFiles: 1 })

	return (
		<div>
			<Flex
			direction="column"
			gap={1}
			mb={5}
			>
				<Text
				fontWeight="medium"
				color="purple.900"
				fontSize="xl"
				>
					Upload your documents
				</Text>
				<Text fontSize="sm" color="gray.600" fontWeight="medium">
					PDF and DOCX files are allowed. Only 1 file per upload.
				</Text>
			</Flex>
			<Box cursor="pointer" {...getRootProps()} border={`2px dashed ${isDragActive ? 'red' : '#e1e1e1'}`} borderRadius="md" w="full" h={300}>
				<input
				{...getInputProps()}
				/>
				{
					isDragActive ? (
						<>
							<Center height="full">
								<FiDownloadCloud />
							</Center>
						</>
					) : (
						<>
							<Flex direction="column" alignItems="center" justifyContent="center" h="full">
								<FiUploadCloud />
								<Text>Drag & drop your files here or click to open select your files.</Text>
							</Flex>
						</>
					)
				}
			</Box>
		</div>
	)
}
