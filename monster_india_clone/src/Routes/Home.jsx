import { Box, Button, Grid, GridItem, Input, Tab, TabList, Tabs, Text } from "@chakra-ui/react";
import {NavLink} from "react-router-dom"
import { useContext } from "react"
import { AppContext } from "../Context/AppContext"

export default function Home () {
    return (
        <div>
            <Box  h="fit-content"
                backgroundImage="url('https://images.unsplash.com/photo-1520531158340-44015069e78e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&q=80')"
                px="20%"
                py="50px"
                textAlign="left"
                backgroundRepeat="none"
                backgroundPosition="center"
            >
                <Text fontSize="4xl" fontWeight="bold" color="white">
                    500,000+ Jobs. Find Better. Faster
                </Text>

                <Grid templateColumns="1.5fr 1fr" color="white" gap="5"> 
                    <GridItem bg="rgba(0, 0, 0, 0.522);" p={10}>

                        <Tabs>
                            <TabList >
                                <Tab >All Jobs</Tab>
                                <Tab >Work From Home</Tab>
                                <Tab >TRIUMPH Jobs</Tab>
                                <Tab >Contract Jobs</Tab>
                                <Tab >Fresher Jobs</Tab>
                            </TabList>
                            <Grid templateColumns="3fr 1fr" py="30px" >
                                <Input type="text" borderRadius="0" border="none" bg="white" color="black" placeholder="Search by Skills, Company, & Job Title " />
                                <Button ize="md" bg="red" borderRadius="0" >Search</Button>
                            </Grid>
                            <Text> <b>Trending Searches :</b> Jobs in Delhi, Jobs in Mumbai, Jobs in Hyderabad, Jobs in Bangalore, Jobs in Chennai, Jobs in Pune, Jobs in Kolkata, Jobs in Lucknow</Text>
                        </Tabs>
                        </GridItem>
                    <GridItem bg="rgba(0, 0, 0, 0.522);" p={4}>
                        <Grid templateColumns="repeat(2,265px)" gap={4} h="100%" color="black" textAlign="center">
                            <GridItem bg="white;" p={5} lineHeight="2rem">
                                <Box>
                                    <Text fontSize="md" fontWeight="bold">NEW TO MONSTER ?</Text>
                                    <NavLink to="/login">
                                       <Text color="red" fontWeight="bold"> REGISTER WITH US </Text>
                                    </NavLink>
                                    <Text>or</Text>
                                    <Button size="md" py="10" color="white" lineHeight="2rem" bg="orange">UPLOAD RESUME <br /> We will create your Profile</Button>
                                </Box>
                            </GridItem>
                            <GridItem bg="white;" p={5} lineHeight="2.3rem" h="100%">
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
        </div>
    )
}