import {Box, Button, Grid, GridItem, Input, Text, Img, Flex} from "@chakra-ui/react"
import {FaFacebook, FaGoogle} from "react-icons/fa"
export default function Login () {
    return (   
            <Grid templateRows="100px 2fr 1fr" gap={5} px="20%">
                <Box>
                    <Text fontSize="4xl" fontWeight="bold">WELCOME BACK !</Text>
                    <Text>You are just a step away from your dream job.</Text>
                </Box>
                <Grid templateColumns="repeat(2,1fr)" justifyContent="center"  alignItems="center" border="1px solid grey" >
                    <GridItem px="5%" paddingRight="50px"  display="grid" gap="3" borderRight="1px solid">
                            <Input type="text" placeholder="Email/Mobile"/>
                            <Input type="password" placeholder="Password"/>
                            <Text textAlign="right" color="primary">Forgot Passrord ? </Text>
                            <Button size="lg" w="100%" bg="primary" color="white" _hover={{bg:"dark_primary"}}>Login</Button>
                            <Button variant='link' size="lg" color="primary" fontWeight="bold">or, Login via OTP</Button>
                    </GridItem>
                    <GridItem textAlign="center">
                        <Text fontSize="2xl" margin={10}>with your social network</Text>
                        <Grid templateColumns="repeat(2,225px)" justifyContent="center" gap="10"  px="10%" className="Login_Social_Buttons">
                            <Button leftIcon={<FaGoogle />} _hover={{bg:"#ea4335", color:"white"}}> Login with Google</Button>
                            <Button leftIcon={<FaFacebook />} _hover={{bg:"#3b5998", color:"white"}}> Login with FaceBook</Button>
                        </Grid>
                    </GridItem>
                </Grid>

                <Grid templateColumns="repeat(2,1fr)" gap={5} alignItems="center">
                    <GridItem px="5%" py="20px" border="1px solid" display="grid" gap={1}>
                            <Text fontSize="2xl" fontWeight="bold">New To Monster ?</Text>
                            <Text w="50%" color="grey" >Create your profile now and be visible to the top recruiters in the world</Text>
                            <Flex gap={5} alignItems="center">
                                <Button variant="outline" colorScheme="primary">Register with us</Button>
                                <Text>OR</Text>
                                <Button variant="outline" colorScheme="primary">Upload Resume</Button>
                            </Flex>
                    </GridItem>
                    <GridItem border="1px solid" display="grid"  alignItems="center" justifyContent="center" height="100%">
                        <Text>
                            Your dream job is a click away! Get the app on your mobile
                        </Text>
                        <Flex gap={50} className="app_download_logos">
                            <Img src="https://www.monsterindia.com/rio/public/images/android-footer.png" alt="googlePlay" />
                            <Img src="https://www.monsterindia.com/rio/public/images/ios-footer.png" alt="appStore" />
                        </Flex>
                    </GridItem>
                </Grid>
            </Grid>    
        )
}