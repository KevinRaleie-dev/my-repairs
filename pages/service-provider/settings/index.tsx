import { Box, Flex, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import Head from 'next/head';
import { Layout } from '../../../components/Layout';
import { Account } from '../../../components/ServiceProvider/Account';
import { UpdateServiceProviderProfile } from '../../../components/ServiceProvider/UpdateServiceProviderProfile';
import { UploadDocuments } from '../../../components/ServiceProvider/UploadDocuments';

const ServiceProviderProfile = () => {

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
        <Heading>
          Settings
        </Heading>
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
        <Tab>
          Notifications
        </Tab>
      </TabList>
      {/* Tab panels */}
      <TabPanels>
        <TabPanel>
          <UpdateServiceProviderProfile />
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
