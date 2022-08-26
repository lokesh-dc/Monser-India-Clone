import { Flex, Grid, Text, Button, Skeleton} from "@chakra-ui/react";
import {ArrowRightIcon} from "@chakra-ui/icons"
import { useEffect } from "react";
import { useState } from "react";
import { fetchData } from "./API/fetchApi";
import { NavLink } from "react-router-dom";
export default function Jobs_Grid ({ type }) {

    const [jobs, setJobs] = useState([]);
    const page = type === "Recent Jobs" ? 1 : 2 ;
    const limit = 4;
    useEffect(()=>{
        fetchData({page,limit})
        .then((res)=>{
            setJobs(res);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[page])
    function ratingStars(n) {
        if(n==="")
            n = 3;
        let stars = ""
        for(let i=0;i<n;i++){
            stars += "⭐"
        }
        return stars;
    }
    let count= 1;
    return(
        <Grid gap={5} w={{base:"95%",sm:"95%", md:"95%", lg:"80%"}} p={4}>
        <Flex justifyContent="space-between">
            <Text className="Heading">{type}</Text>
            <Button variant="ghost" rightIcon={ <ArrowRightIcon />}>VIEW ALL</Button>
        </Flex>
        <Grid templateColumns={{base:"1fr", sm:"1fr", md:"repeat(2,1fr)" , lg:"repeat(4,1fr)"}} gap={5}>
            {
                jobs.map((post)=>(
                    <Skeleton key={count++} isLoaded={jobs.length!==0}>
                        <NavLink to={`/jobs/${post.id}`} >
                        <Grid boxShadow = "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px" textAlign="center" h="100%" p={5} pt={8} pos="relative"  >
                            <Text fontWeight="bold" fontSize="md">{post.Company}</Text>
                            <Text  px={3} py={1} >{ ratingStars(post.Rating) }</Text>
                            <Text color="grey">{post.Job_title}</Text>
                            <Text>Venue : {post.City}, {post.State}</Text>
                            <Text color="red">Valid Until : {post.Valid_until}</Text>
                        </Grid>
                        </NavLink>
                    </Skeleton>
                ))
            }
        </Grid>
    </Grid>
    ) 
}