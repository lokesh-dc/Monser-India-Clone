import {Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Divider, Flex, Grid, Input, Select, Text} from "@chakra-ui/react"
import { useState } from "react"
import { useEffect } from "react"
import { fetchData } from "../Components/API/fetchApi"
import CheckboxCreator from "../Components/CheckboxCreator"
import { Icon } from '@chakra-ui/react'
import { AiOutlineStar , AiOutlineShareAlt } from "react-icons/ai";

const menu = [
    ['Sales', 'Software Eng', 'Customer Service', 'Voice Process', 'Java', 'Operations', 'Good Communication', 'Problem Solver' ],
    ['New York', 'Rego Park','West New York', 'Williston Park', 'Brooklyn', 'Maspeth', 'Paramus', 'West Orange' ],
    ['Finance', "Software", 'Information Technology', 'Business Services', 'Health Care', 'Retail', 'Construction, Repair & Maintenance', 'Architecture'],
    ['Chief Marketing Officer (CMO)', "Dental Hygienist", 'National Debt Relief', 'National Advocates for Pregnant Women', 'Emergency Veterinarian - NYC', 'ABA Therapist', 'Construction Project Manager', 'Diesel Mechanic'],
    ['Finance', "Software", 'Information Technology', 'Business Services', 'Health Care', 'Retail', 'Construction, Repair & Maintenance', 'Architecture'],
    ['Chief Marketing Officer (CMO)', "Dental Hygienist", 'National Debt Relief', 'National Advocates for Pregnant Women', 'Emergency Veterinarian - NYC', 'ABA Therapist', 'Construction Project Manager', 'Diesel Mechanic'],
];
let head = ['Skills', 'Location', 'Industry','Funcion','Roles','Company'];

export default function WorkFromHome () {

    const [page,setPage] = useState(1);
    const [limit,setLimit] = useState(25);
    const [articles, setArticles] = useState([]);

    function handlePageChange() {
        
    }

    useEffect(()=>{
        fetchData({page,limit})
        .then((res)=>{
            setArticles(res);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[page,limit])

    return (
        <>
        <Grid bg="white" templateColumns="2fr 1fr 1fr 1fr" px = {{base:"2.5%",sm:"2.5", md:"2.5", lg:"10%"}} py="10px" bacground="white" mt={5}>
            <Input type="text" placeholder="Search by skills, company & Job" />
            <Input type="text" placeholder="Location" />
            <Select placeholder="Experience">
                <option value="0">O Years</option>
                <option value="0">1 Years</option>
                <option value="0">2 Years</option>
                <option value="0">3 Years</option>
            </Select>
            <Button bg="primary" color="white">Search</Button>
        </Grid>

        <Grid templateColumns={{base:"1fr", sm:"1fr", md:"1fr", lg:"1fr 3fr"}} w="80%" margin="auto"  gap={10} p={10}>
            <Box bg="white" height="fit-content">
            <Text fontSize="xl" p={2} color="grey">Filter By </Text>
            <Divider />
            {
                menu.map((item,index)=>(
                    <Accordion  allowMultiple key={index} allowToggle >
                        <AccordionItem>
                        <Text >
                            <AccordionButton>
                                <Box flex='1' textAlign='left' fontWeight="bold" fontSize="md">{head[index]}</Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </Text>
                        <AccordionPanel pb={4} display="grid">
                            <CheckboxCreator data = {item}/>
                        </AccordionPanel>
                    </AccordionItem>

                </Accordion>
                ))
        }
        </Box>
        <Grid gap={5} >
            <Flex alignItems="center" justifyContent="space-evenly" border="1px solid " bg="white" p={2}>
                <Grid alignItems="center" gap={5} templateColumns="repeat(3,1fr)"> 
                    <Text>Show: </Text>
                    <Select >
                        <option value="25">25</option>
                        <option value="25">50</option>
                    </Select>
                    <Text>per page </Text>
                </Grid>
                <Grid alignItems="center" gap={5} templateColumns="repeat(3,1fr)"> 
                    <Text>Sort by: </Text>
                    <Select >
                        <option value="asc">Relevance</option>
                        <option value="desc">Freshness</option>
                    </Select>
                    <Text>per page </Text>
                </Grid>

            </Flex>
            {
                articles?.map((article)=>(
                    <Grid  boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px">
                        <Grid key={article.id} gap="5px" p={3} pos="relative" bg="white">
                            <Text fontSize="xl" fontWeight="600">{article.Job_title}</Text>
                            <Text color="primary">{article.Company}</Text>
                            <Flex justifyContent="space-between">
                                <Text><b> Location : </b>  {article.City}, {article.State}</Text>
                                <Text><b> Job Type : </b> {article.Job_Type}</Text>
                                <Text><b> Application Deadline : </b>  {article.Valid_until}</Text>       
                            </Flex>
                            <Text><b>Skills : </b> Communication Skills, Critical Thinking, Problem Solving </Text>
                            <Text ><b>Description :</b> {article.Job_Desc.substring(0,120)}...</Text>
                            <Text pos="absolute" top="0" right="0" p={1} bg="orange" color="white" w="300px" textAlign="center">{article.Industry==="" ? "Software Development" : article.Industry}</Text>
                        </Grid>
                            <Flex alignItems="center" justifyContent="space-between"  bg="rgba(129, 129, 129, 0.194)" p={2} >
                                <Text><b>Posted on :</b> {article.Date_Posted}</Text>
                                <Flex alignItems="center" gap={3}>
                                    <Icon w={6} h={6} as={AiOutlineStar} />
                                    <Icon w={6} h={6} as={AiOutlineShareAlt} />
                                    <Button variant="outline" colorScheme="purple" _hover={{bg:"primary", color:"white"}}>APPLY</Button>
                                </Flex>
                            </Flex>
                    </Grid>
                ))
            }
        </Grid>
        </Grid>
        </>
    )
}