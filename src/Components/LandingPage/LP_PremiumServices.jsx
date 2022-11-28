import { Grid, Box,Flex, Img, Text, Button} from "@chakra-ui/react";
import {ArrowForwardIcon, ArrowRightIcon} from "@chakra-ui/icons"
export default function PremiumServices () {
    return (

        <Grid w={{base:"95%",sm:"95%", md:"95%", lg:"80%"}} gap={4} p={8}>
            <Flex justifyContent="space-between">
                <Text  className="Heading">PREMIUM SERVICES</Text>
                <Button variant="ghost" rightIcon={ <ArrowRightIcon />}>VIEW ALL</Button>
            </Flex>
        <Grid 
            className="premium"
            templateColumns={{base:"1fr", sm:"1fr", md:"repeat(2,1fr)", lg:"repeat(4,1fr)"}} 
            gap={4}
        >
            <Box>
                <Img src="https://img.freepik.com/free-vector/online-resume-concept-illustration_114360-5037.jpg?w=1380&t=st=1661502820~exp=1661503420~hmac=86fcce69d4c701ef774eb54da9ed65c6a734c511bf47a9282f0af8ccf3af2d87"/>
                <Text>Resume Writing</Text>
                <Text>Professionaly written resume + cover letter</Text>
                <Flex justifyContent="flex-end">
                    <Button variant="ghost" leftIcon={<ArrowForwardIcon />}>READ MORE</Button>
                </Flex>            
            </Box>
            <Box>
                <Img src="https://img.freepik.com/free-vector/status-update-concept-illustration_114360-1567.jpg?w=1380&t=st=1661502647~exp=1661503247~hmac=478c444e6621d96e926013b603e91f78e6a67b34e3e34d07e81b61529a34f766"/>
                    <Text>Resume Writing</Text>
                    <Text>Professionaly written resume + cover letter</Text>
                    <Flex justifyContent="flex-end">
                    <Button variant="ghost" leftIcon={<ArrowForwardIcon />}>READ MORE</Button>
                </Flex>            
            </Box>
            <Box>
                <Img src="https://img.freepik.com/free-vector/people-search-concept-illustration_114360-2656.jpg?w=1380&t=st=1661503245~exp=1661503845~hmac=bbb67bd2381d997516554825249957809ab9e9c12a78db3cb9413efabba55ffe"/>
                <Text>Resume Writing</Text>
                <Text>Professionaly written resume + cover letter</Text>
                <Flex justifyContent="flex-end">
                    <Button variant="ghost" leftIcon={<ArrowForwardIcon />}>READ MORE</Button>
                </Flex>                
            </Box>
            <Box>
                <Img src="https://img.freepik.com/free-vector/progress-concept-illustration_114360-1522.jpg?w=1380&t=st=1661503290~exp=1661503890~hmac=2b254b7ffc58d83bed4c5c3e23131fbd6952935e995c980c48424fd511b6db1b"/>
                <Text>Resume Writing</Text>
                <Text>Professionaly written resume + cover letter</Text>
                <Flex justifyContent="flex-end">
                    <Button variant="ghost" leftIcon={<ArrowForwardIcon />}>READ MORE</Button>
                </Flex>
            </Box>
    </Grid>
    </Grid>
    )
}