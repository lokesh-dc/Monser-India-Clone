import {Box, FormControl, Grid, Input,Text, Button, Divider, Img, Tabs, TabList, Tab, TabPanels, TabPanel} from "@chakra-ui/react"
import EmployerTab from "../Components/EmployerTab"
export default function Employer () {
    return (
        <>
        <Box w="100%"
        backgroundImage="url('https://images.unsplash.com/photo-1520531158340-44015069e78e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&q=80')"
        backgroundSize="cover"
        backgroundRepeat="none"
        backgroundPosition="center"
        py={{lg:"50px"}}>
        <Grid templateColumns="1fr 2fr" w = {{base:"100%",sm:"100%", md:"100%", lg:"40%"}} bg="white" m={{base:"auto",sm:"auto", md:"auto", lg:"auto 50%"}} py="50px" gap={10} alignItems="center" 
               >
                <Img src="https://img.freepik.com/free-vector/profiling-concept-illustration_114360-5854.jpg?w=826&t=st=1661534338~exp=1661534938~hmac=70d13371d039fafe5d82c7a49202ba1151ca6bdb4e80fb206be0234dc0a37d4c" />
                <Box p={10}> 
                <Text className="Heading"> LOGIN </Text>
                <FormControl display="grid" gap={2}>
                    <Input type='email' placeholder="User Name"/>
                    <Input type='password' placeholder="Password" />
                    <Text textAlign="right">Forgot Password ?</Text>
                    <Button bg="primary" color="white">Login</Button>
                    <Divider />
                    <Button variant="link">New User ? Sign UP</Button>
                </FormControl>
                </Box>
        </Grid>
        </Box>


        <Grid textAlign="center" w={{base:"95%",sm:"95%", md:"95%", lg:"80%"}} m="auto" gap={5}>
            <Text fontSize="6xl">Our <b> Services </b></Text>
            <Text mb={10} fontSize="xl" color="grey">For employers who need great people. Find Better, Faster</Text>
            <Tabs variant='unstyled' >
                <TabList display="flex" justifyContent="space-evenly" >
                    <Tab _selected={{ color: 'white', bg: 'primary' }}>Core Services</Tab>
                    <Tab _selected={{ color: 'white', bg: 'primary' }}>Better Together</Tab>
                    <Tab _selected={{ color: 'white', bg: 'primary' }}>More Solution</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Grid templateColumns="repeat(3,1fr)" lineHeight={2} >
                            <EmployerTab 
                                src = 'https://media4.monsterindia.com/recruiter_2015/india/images/resume-database-1.jpg' 
                                head= "Resume Database Access"  
                            />
                            <EmployerTab 
                                src = 'https://media4.monsterindia.com/recruiter_2015/india/images/Job-Posting-1.jpg' 
                                head= "Job Posting"  
                            />
                            <EmployerTab 
                                src = 'https://media4.monsterindia.com/recruiter_2015/india/images/Monster-Social-1.jpg' 
                                head= "Monster Social Job Ads(MSJ)"  
                            />
                        </Grid>
                    </TabPanel>
                    <TabPanel>
                    <Grid templateColumns="repeat(3,1fr)" lineHeight={2} >
                            <EmployerTab 
                                src = 'https://media4.monsterindia.com/recruiter_2015/india/images/monster_assessment-1.jpg' 
                                head= "Monster Assessments"  
                            />
                            <EmployerTab 
                                src = 'https://media4.monsterindia.com/recruiter_2015/india/images/quinton-1.jpg' 
                                head= "Quinton"  
                            />
                            <EmployerTab 
                                src = 'https://media4.monsterindia.com/recruiter_2015/india/images/qhire-1.jpg' 
                                head= "Q Hire"  
                            />
                        </Grid>
                    </TabPanel>
                    <TabPanel>
                        <Grid templateColumns="repeat(3,1fr)" lineHeight={2} >
                            <EmployerTab 
                                src = 'https://media4.monsterindia.com/recruiter_2015/india/images/resume-database-1.jpg' 
                                head= "Resume Database Access"  
                            />
                            <EmployerTab 
                                src = 'https://media4.monsterindia.com/recruiter_2015/india/images/Job-Posting-1.jpg' 
                                head= "Job Posting"  
                            />
                            <EmployerTab 
                                src = 'https://media4.monsterindia.com/recruiter_2015/india/images/Monster-Social-1.jpg' 
                                head= "Monster Social Job Ads(MSJ)"  
                            />
                        </Grid>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Grid>


        </>
    )
}