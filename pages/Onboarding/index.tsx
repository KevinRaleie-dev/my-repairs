import { Box, Button, Container, Divider, Flex, FormControl, FormHelperText, FormLabel, Grid, Heading, Image, Input, Stack, Tab, TabList, TabPanels, Tabs, Text, TabPanel } from '@chakra-ui/react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React from 'react'
import { AiFillFacebook, AiFillGoogleCircle } from 'react-icons/ai'
import { CustomerSignUpForm } from '../../components/forms/signup/CustomerSignUpForm'
import { TechnicianSignUpForm } from '../../components/forms/signup/TechnicianSignUpForm'


const Onboarding = () => {
 

  // React.useEffect(() => {
  //   if(data?.user?.email !== undefined) {
  //     router.replace('/Onboarding/profile_setup')
  //   }
  // }, [data?.user?.email, router])

  return (
    <React.Fragment>
      <Grid templateColumns="repeat(2, 1fr)">
        <Box>
          
          <Container >
            <Box          
            pt={5}
            >
              <Image
              src="/logo.svg"
              width={20}
              height={20}
              alt="My Repairs logo"
              />
            </Box>
            <Stack spacing={3} mt={10}>
              <Heading>
                Welcome to My Repairs
              </Heading>
              <Tabs variant="soft-rounded" colorScheme="green">
                <TabList>
                  <Tab>
                    Customer
                  </Tab>
                  <Tab>
                    Technician
                  </Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <CustomerSignUpForm
                    caption='Join hundreds of customers who use My Repairs to find the right service for their home.'
                    />              
                  </TabPanel>
                  <TabPanel>
                    <TechnicianSignUpForm
                    caption='Join hundreds of other technicians looking for work to help repair and showcase their skills and craftmanship. Sign up today.'
                    />
                  </TabPanel>
                </TabPanels>            
              </Tabs>
            </Stack>
          </Container>          
        </Box>
        <Box
        height="100vh"
        bgColor='#D7345B'
        >
          {/* <Box
          position="absolute"
          zIndex={1}
          top={8}
          >
            <Image
              borderRadius={10}
              boxShadow="0 0 10px rgba(0, 0, 0, 0.1 )"         
              src="/phone-repair.jpg"
              alt='phone repair'
              width={220}
              height={350}
            />
          </Box>
          <Box
          position="relative"          
          top={310}
          marginLeft={150}
          >
            <Image                      
              borderRadius={20}
              boxShadow="0 0 10px rgba(0, 0, 0, 0.1 )"    
              src="/technician.jpg"
              alt='phone repair'          
              height={300}
            />
          </Box> */}
        </Box>
      </Grid>      
    </React.Fragment>
  )
}

export default Onboarding