import { Avatar, Container, Flex, Stack, Tag, Text } from '@chakra-ui/react'
import { Layout } from '../components/Layout'
import { PostCard } from '../components/PostCard'

const HomeFeed = () => {

  const filterTags = () => {
    const filterByDays = [
      'All',
      'Today',
      'This Week',
      'This Month',
      'This Year',
    ]

    return filterByDays;
  }

  return (
    <>      
      <Layout
      contentColSpan={2}
      rightElement={Suggestions}
      >
        <>        
            {/* filter feed  */}
          <Flex
          my={2}
          direction={["row"]}
            justifyContent="space-between"
          >
            {
              filterTags().map((tag, index) => {
                return (                  
                  <Tag 
                  _active={{
                    transform: "scale(0.8)",
                  }}
                  size="md" key={index} variant="subtle" cursor="pointer" bgColor={tag === "Today" ? "black" : ""} color={tag === "Today" ? "white" : ""}>
                    {tag}
                  </Tag>                  
                )
              })
            }
          </Flex>
            {/* end filter feed  */}
              
              <Flex
              direction={["column"]}
              >
                <PostCard
                fullName='John Doe'
                numOfMinutes={3}
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. <br /> <br/> Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                velit esse cillum dolore eu fugiat nulla pariatur. <br/> <br /> Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum. <br /> <br /> #hashtag #hashtag2"
                numOfInterests={10}
                />
                <PostCard
                fullName='Kevin Raleie'
                numOfMinutes={23}
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. <br /> <br/> Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                velit esse cillum dolore eu fugiat nulla pariatur. <br/> <br /> Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum. <br /> <br /> #hashtag #hashtag2"
                numOfInterests={9}
                />
                <PostCard
                fullName='Vivica '
                numOfMinutes={27}
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. <br /> <br/> Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                velit esse cillum dolore eu fugiat nulla pariatur. <br/> <br /> Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum. <br /> <br /> #hashtag #hashtag2"
                numOfInterests={20}
                />
                <PostCard
                fullName='Jo Nape'
                numOfMinutes={31}
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. <br /> <br/> Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                velit esse cillum dolore eu fugiat nulla pariatur. <br/> <br /> Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum. <br /> <br /> #hashtag #hashtag2"
                numOfInterests={5}
                />
              </Flex>
        </>
      </Layout>
    </>
  )
}

const Suggestions = () => {
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
            <Stack direction="row" align="center" fontSize="sm" spacing={3} mt={3}>
              <Avatar
              size="md"
              name="John Doe"
              />
              <Flex
              direction={["column"]}
              >
                <Text fontWeight="medium">
                  John Doe
                </Text>
                <Text color="gray.500">
                  @johndoe
                </Text>
              </Flex>
            </Stack>
            <Stack direction="row" align="center" fontSize="sm" spacing={3} mt={3}>
              <Avatar
              size="md"
              name="Jo Nape"
              />
              <Flex
              direction={["column"]}
              >
                <Text fontWeight="medium">
                  Jo Nape
                </Text>
                <Text color="gray.500">
                  @jonape
                </Text>
              </Flex>
            </Stack>
            <Stack direction="row" align="center" fontSize="sm" spacing={3} mt={3}>
              <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
              <Flex
              direction={["column"]}
              >
                <Text fontWeight="medium">
                  Ryan Florence
                </Text>
                <Text color="gray.500">
                  @ryanflorence
                </Text>
              </Flex>
            </Stack>
          </Flex>
        </Container>
    </>
  )
}

export default HomeFeed
