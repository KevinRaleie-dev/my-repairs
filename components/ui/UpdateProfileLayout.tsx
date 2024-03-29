import { Flex, Divider, Text } from "@chakra-ui/react";

type UpdateProfileLayoutProps = {
    children: React.ReactNode;
    label: string;
    description?: string;
}

export const UpdateProfileLayout = ({
    children,
    label,
    description

}: UpdateProfileLayoutProps) => {

    return (
        <>
            <Flex
            mt={8}            
            direction={["column", "row"]}
            alignItems={["flex-start", "center"]}
            justifyContent="space-between"
            gap={[2, 20]}
            mb={8}        
            >
                <Flex
                direction="column"
                
                >
                    <Text
                    color="purple.900"
                    fontWeight="medium"
                    >
                        {label}
                    </Text>
                    <Text
                    fontSize="xs"
                    fontWeight="medium"
                    color="gray.500"
                    >
                        {description}
                    </Text>
                </Flex>
                <Flex
                //pr={10}
				width="full"
                //width={500}
                >
                   {children}
                </Flex>
            </Flex>
            <Divider />
        </>
    )
}
