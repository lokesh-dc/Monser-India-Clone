import { Box, Grid, Img, Text } from "@chakra-ui/react";

export default function PremiumBanner () {
    return (
        <Grid gap={10} templateColumns={{base:"1fr",sm:"1fr", md:"1fr",lg:"1fr 4fr 1fr"}} w={{base:"95%",sm:"95%", md:"95%", lg:"80%"}} >
                <Img display={{base:"none", sm:"none",md:"none",lg:"block"}} 
                    src="https://img.freepik.com/free-vector/shared-workspace-concept-illustration_114360-5189.jpg?w=1380&t=st=1661438687~exp=1661439287~hmac=d1dbd70f6434908230364a99c3850dabd814b960f0bda780d9d6b3e021c7e30c"/>
                <Box textAlign="centre"  display="grid" justifyContent="centre" alignItems="centre" p={30}>
                    <Text textAlign="center" fontSize="3xl" fontWeight="bold"> How to stand out from millions of the other resume ? </Text>
                    <Text textAlign="center" fontSize="2xl" color="grey"> 80% of the resume are rejected in 11 seconds. <br /> Don't want to be the 80% ? </Text>
                </Box>
                <Img display={{base:"none", sm:"none",md:"none",lg:"block"}}
                    src="https://img.freepik.com/free-vector/employees-team-talking-laughing-free-time-coffee-break-office-workers-team-discussing-success-project-man-woman-working-place_1150-41137.jpg?size=626&ext=jpg&ga=GA1.2.232400442.1661436296" />
            </Grid>
    )
}