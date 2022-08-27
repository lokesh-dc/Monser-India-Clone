import { Box, Button, Grid, GridItem, Input, Tab, TabList, Tabs, Text} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function BackgroundBox () {
    return (
        <Box h="fit-content"
                backgroundImage="url('https://images.unsplash.com/photo-1520531158340-44015069e78e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&q=80')"
                backgroundSize="cover"
                px = {{base:"2.5%",sm:"2.5", md:"2.5", lg:"10%"}}
                py="50px"
                textAlign="left"
                backgroundRepeat="none"
                backgroundPosition="center"
            >
                <Text fontSize={{base:"2xl", lg:"4xl"}} fontWeight="bold" color="black" mb={5}>
                    500,000+ Jobs. Find Better. Faster
                </Text>

                <Grid templateColumns= {{ base: "1fr",sm:"1fr", md:"1fr", lg: "3fr 1fr" }} color="white" gap="5"> 
                    <GridItem bg="rgba(0, 0, 0, 0.522);" p={10}>
                        <Tabs variant="unstyled" >
                            <TabList className="tabs"  >
                                <Tab _selected={{ color: 'white', bg: 'black' }}>All Jobs</Tab>
                                <NavLink to="/work-from-home-jobs">
                                    <Tab _selected={{ color: 'white', bg: 'black' }}>Work From Home</Tab>
                                </NavLink>
                                <NavLink to="/search">
                                    <Tab _selected={{ color: 'white', bg: 'black' }}>TRIUMPH Jobs</Tab>
                                </NavLink>
                                <Tab _selected={{ color: 'white', bg: 'black' }}>Contract Jobs</Tab>
                                <Tab _selected={{ color: 'white', bg: 'black' }}>Fresher Jobs</Tab>
                            </TabList>
                            <Grid templateColumns="3fr 1fr" py="30px" >
                                <Input type="text" bg="white" color="black" placeholder="Search by Skills, Company, & Job Title " />
                                <Button size="md" bg="primary">Search</Button>
                            </Grid>
                            <Text textAlign='right'>Advanced Search</Text>
                            <Text w='90%'> <b>Trending Searches : </b> 
                                Jobs in Delhi, Jobs in Mumbai, Jobs in Hyderabad, Jobs in Bangalore, 
                                <br /> Jobs in Chennai, Jobs in Pune, Jobs in Kolkata, Jobs in Lucknow
                            </Text>
                        </Tabs>
                        </GridItem>
                    <GridItem bg="rgba(0, 0, 0, 0.522);" p={4}>
                        <Grid templateColumns={{ base: "1fr 1fr", lg: "260px 260px" }} gap={4} h="100%" color="black" textAlign="center">
                            <GridItem bg="white;" p={5} lineHeight="2.8rem">
                                <Box>
                                    <Text fontSize="md" fontWeight="bold">NEW TO MONSTER ?</Text>
                                    <NavLink to="/login">
                                       <Text color="red" fontWeight="bold"> REGISTER WITH US </Text>
                                    </NavLink>
                                    <Text>or</Text>
                                    <Button size="md" py="10" color="white" lineHeight="2rem" bg="orange">UPLOAD RESUME <br /> We will create your Profile</Button>
                                </Box>
                            </GridItem>
                            <GridItem bg="white;" p={5} lineHeight="3.3rem" h="100%">
                                <Box>
                                    <Text fontSize="md" fontWeight="bold">FREE JOB ALERT</Text>
                                    <Text  lineHeight="1.1rem" fontSize="sm"> Get an email on <br /> jobs matching your <br /> criteria</Text>
                                    <Text color="grey">No registration required</Text>
                                    <Button variant="outline" colorScheme='primary'>CREATE JOB ALERT</Button>
                                </Box>
                            </GridItem>
                        </Grid>
                    </GridItem>
                </Grid>
            </Box>
    )
}