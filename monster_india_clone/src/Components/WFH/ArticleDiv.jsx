import { Button, Flex, Grid, Icon, Skeleton, Text} from "@chakra-ui/react";
import { useContext } from "react";
import { AiOutlineStar , AiOutlineShareAlt } from "react-icons/ai";
import { Navigate, NavLink } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
export default function ArticleDiv({article}) {
    const {state} = useContext(AppContext);
    if(state.isLoading){
        return (
            <Skeleton height='170px' />
        )
    }
    function handleAddToStar () {
        if(!state.isAuth){
            alert("please login")
            return (<Navigate to="/login" />)
        }
        
        
    }


    return (
        <Grid  boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" key={article.id}>
        <NavLink to={`/jobs/${article.id}`} key={article.id} >
            <Grid key={article.id} gap="5px" p={3} pos="relative" pt={{base:"10",sm:"10",md:"10",lg:"4"}} bg="white">
                <Text fontSize="xl" fontWeight="600">{article.Job_title}</Text>
                <Text color="primary">{article.Company}</Text>
                <Flex justifyContent="space-between">
                    <Text><b> Location : </b>  {article.City}, {article.State}</Text>
                    <Text><b> Job Type : </b> {article.Job_Type}</Text>
                    <Text><b> Application Deadline : </b>  {article.Valid_until}</Text>       
                </Flex>
                    <Text><b>Skills : </b> Communication Skills, Critical Thinking, Problem Solving </Text>
                    <Text ><b>Description :</b> {article.Job_Desc.substring(0,120)}...</Text>
                     <Text pos="absolute" top="0" right="0" p={1}  bg="orange" color="white" w="300px" textAlign="center">{article.Industry==="" ? "Software Development" : article.Industry}</Text>
            </Grid>
            </NavLink>

                <Flex alignItems="center" justifyContent="space-between"  bg="rgba(129, 129, 129, 0.194)" p={2} >
                    <Text><b>Posted on :</b> {article.Date_Posted}</Text>
                    <Flex alignItems="center" gap={3}>
                        <Icon w={6} h={6} as={AiOutlineStar} onClick={handleAddToStar} />
                        <Icon w={6} h={6} as={AiOutlineShareAlt} />
                        <Button variant="outline" colorScheme="purple" _hover={{bg:"primary", color:"white"}}>APPLY</Button>
                    </Flex>
                </Flex>
            </Grid>
    )
}