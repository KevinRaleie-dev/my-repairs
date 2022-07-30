import { Container, Flex, Stack, Avatar, Text } from "@chakra-ui/react"
import { useQuery } from "react-query"
import { getAllServiceProviders } from "../../src/api-calls"
import { SuggestedProvider } from "../ServiceProvider/SuggestedProvider"

export const Suggestions = () => {
    const {data, isLoading} = useQuery('providers', getAllServiceProviders)
    return (
      <>
        <Container>
            <Flex
            justifyContent="space-between"
            fontSize="sm"
            >
              <Text
              fontWeight="medium"
              >
                Suggested Technicians
              </Text>
              <Text
              color="blue.500"
              >
                See all
              </Text>
            </Flex>
            <Flex
            direction={["column"]}
            >
              {
                isLoading ? (
                    <>Loading...</>
                ) : (
                    data.data.slice(0, 4).map((provider: any) => (
                        <SuggestedProvider key={provider.id}
                        firstName={provider.firstName}
                        lastName={provider.lastName}
                        id={provider.id}
                        />
                    ))
                )

              }
            </Flex>
          </Container>
      </>
    )
}