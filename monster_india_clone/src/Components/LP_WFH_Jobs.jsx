import { Flex, Grid, Text, Button, Skeleton} from "@chakra-ui/react";
import {ArrowRightIcon} from "@chakra-ui/icons"
import { useEffect } from "react";
import { useState } from "react";
import { fetchData } from "./API/fetchApi";
export default function WFHJobs () {

    const [jobs, setJobs] = useState([]);

    useEffect(()=>{
        fetchData()
        .then((res)=>{
            setJobs(res);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    function ratingStars(n) {
        let stars = ""
        for(let i=0;i<n;i++){
            stars += "⭐"
        }
        return stars;
    }
    let count= 1;
    return(
        <Grid gap={10} w={{base:"95%",sm:"95%", md:"95%", lg:"80%"}} p={10}>
        <Flex justifyContent="space-between">
            <Text className="Heading">Work From Home Jobs</Text>
            <Button variant="ghost" rightIcon={ <ArrowRightIcon />}>VIEW ALL</Button>
        </Flex>
        <Grid templateColumns="repeat(4,1fr)" gap={5}>
            {
                jobs.map((post)=>(
                    <Skeleton key={count++} isLoaded>
                        <Grid boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" textAlign="center" h="100%" p={5} pt={8} pos="relative"  >
                            <Text fontWeight="bold" fontSize="md">{post.Company}</Text>
                            <Text  px={3} py={1} >{ ratingStars(post.Rating) }</Text>
                            <Text color="grey">{post.Job_title}</Text>
                            <Text>Venue : {post.City}, {post.State}</Text>
                            <Text color="red">Valid Until : {post.Valid_until}</Text>
                        </Grid>
                    </Skeleton>
                ))
            }
        </Grid>
    </Grid>
    ) 
}
