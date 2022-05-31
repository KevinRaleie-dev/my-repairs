import { Box, Divider, Text } from '@chakra-ui/react'
import React from 'react'

type SectionProps = {
    title: string
}

export const Section: React.FunctionComponent<SectionProps> = ({
    title,
}) => {
  return (
    <div id={title}>
        <Box>
            <Text
            fontSize="2xl"
            color='#00ADA7'
            >
                # {title}
            </Text>
            <Divider />
        </Box>
    </div>
  )
}