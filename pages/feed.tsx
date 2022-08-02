import { Avatar, Container, Flex, Stack, Tag, Text } from '@chakra-ui/react'
import { Layout } from '../components/Layout'
import { PostCard } from '../components/PostCard'
import Head from 'next/head'
import { Suggestions } from '../components/ui/Suggestions'

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
      <Head>
		<title>MyRepairs | Home Feed</title>       
      </Head>
      <Layout
      contentColSpan={2}
      rightElement={Suggestions}
      >
        <>        
             
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

export default HomeFeed
