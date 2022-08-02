import { Box, Flex, Text, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import Head from 'next/head';
import { useQuery } from 'react-query';
import {UpdateCustomerProfile} from '../components/Customer/UpdateCustomerProfile';
import { Layout } from '../components/Layout';
import { Account } from '../components/ServiceProvider/Account';
import { UpdateServiceProviderProfile } from '../components/ServiceProvider/UpdateServiceProviderProfile';
import { UploadDocuments } from '../components/ServiceProvider/UploadDocuments';
import { meQuery } from '../src/api-calls';

const ServiceProviderProfile = () => {
  const {data: me, isLoading} = useQuery('me-query', meQuery)

  if (isLoading) {
    return <>Loading...</>
  }

  return (
	<>
	<Head>
		<title>MyRepairs | Settings</title>
	</Head>
  <Layout rightElement={() => null}>
    <Box>          
      <Flex
      direction="column"
      gap={1}>
       <Text
	   pl={[2, 0]}
	   fontWeight="semibold"
	   color="purple.800"
	   fontSize={["2xl", "3xl"]}
	   >Settings</Text>
      <Tabs mt={2}>
      <TabList>
        <Tab>
          My details
        </Tab>
        <Tab>
          Documents
        </Tab>
        <Tab>
          Account
        </Tab>
      </TabList>
      {/* Tab panels */}
      <TabPanels>
        <TabPanel>
          {
            me?.role === "provider" ? <UpdateServiceProviderProfile /> : <UpdateCustomerProfile />
          }
        </TabPanel>
        <TabPanel>
          <UploadDocuments />
        </TabPanel>
        <TabPanel>
          <Account />
        </TabPanel>
      </TabPanels>
      </Tabs>                    
      </Flex>
    </Box>
  </Layout>
	</>
   
  )
}


export default ServiceProviderProfile
