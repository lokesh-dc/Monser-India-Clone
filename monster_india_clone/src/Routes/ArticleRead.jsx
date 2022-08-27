import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { fetchJobArticle } from "../Components/API/fetchApi"
import { Flex, Grid, Button, Icon, Text, Box, Img } from "@chakra-ui/react"
import { AiOutlineStar , AiOutlineShareAlt } from "react-icons/ai";

export default function ArticleRead () {
    const params = useParams()
    const [article, setArticle] = useState({});
    useEffect(()=>{
        fetchJobArticle(params.id)
        .then((res)=>{
            setArticle(res);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[params.id])
    return (
        <Grid  w={{base:"95%",sm:"95%", md:"95%", lg:"80%"}} margin="auto" p={4}  >
            <Flex alignItems="center" justifyContent="space-between">
                <Text className="Heading">About the Job in Detail</Text>
                <Flex alignItems="center" gap={3}>
                    <Icon w={6} h={6} as={AiOutlineStar}  />
                    <Icon w={6} h={6} as={AiOutlineShareAlt} />
                    <Button variant="outline" colorScheme="purple" _hover={{bg:"primary", color:"white"}}>APPLY</Button>
                </Flex>
            </Flex>
            <Box boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px" p={10} pos="relative" my={10}>
                <Text pos="absolute" top="-20px" right="-20px" bg="orange" p={4} color="white">
                    {article.Industry==="" && "Software Development"}
                </Text>
                <Text className="Heading"> {article.Job_title} </Text>
                <Text fontSize="xl">Company : {article.Company} </Text>
                <Flex bg="black" color="white" p={3} justifyContent="space-between" my={5}>
                    <Flex  gap={10}>
                        <Text>Posted on : {article.Date_Posted}</Text>
                        <Text>Total Views : {Math.floor(Math.random()* 100)}</Text>
                        <Text>Job Id : {article.id}</Text>
                        <Text>Total Application : 0</Text>
                    </Flex>
                    <Text>{article.Job_Type}</Text>
                </Flex>
                <Text textAlign="justify" lineHeight={2}><b>Description : </b> <br /> {article.Job_Desc}</Text>
            </Box>
        </Grid>
    )
}