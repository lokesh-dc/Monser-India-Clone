import {Box, Button, Grid, GridItem, Input, Text, Img, Flex} from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { useContext } from "react"
import {FaFacebook, FaGoogle} from "react-icons/fa"
import { AppContext } from "../Context/AppContext"
import axios from "axios";
import { login_failure, login_success, login_request } from "../Context/createActions";
import { Navigate } from "react-router-dom";

const initState = {
    email : "",
    password : "",
}


export default function Login () {

    const {state,dispatch} = useContext(AppContext);
    const [user, setUser] = useState(initState);

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    function handleInput (e){
        const {name, value} = e.target;
        setUser({...user, [name] : value});
    }
    function handleSubmit(user) {
        dispatch(login_request);
        axios.post('https://reqres.in/api/login',
            {
                email : user.email,
                password: user.password
            }
        )
        .then((res)=>{
            const email = user.email;
            const token = res.data.token;
            dispatch(login_success({Email : email, Token : token }))
        })
        .catch((err)=>{
            dispatch(login_failure);
            console.log(err);
        })
    }

    function handleLogin() {
        const userLogin = {
            email: "eve.holt@reqres.in",
            password: "cityslicka"
        }
        setUser(userLogin);
        handleSubmit(userLogin);
    }

    if(state.isAuth){
        return <Navigate to="/" />
    }
    if(state.isError){
        return <Navigate to="*" />
    }
    return (   
            <Grid templateRows="100px 2fr 1fr" gap={5} px={{lg:"20%"}} py={10}>
                <Box>
                    <Text className="Heading">WELCOME BACK !</Text>
                    <Text fontSize='xl' color="grey"> You are just a step away from your dream job.</Text>
                </Box>
                <Grid templateColumns={{base:"1fr ",sm:"1fr",md:"1fr",lg:"repeat(2,1fr)"}} alignItems="center" justifyContent="center" border="1px solid grey">
                    <GridItem px={10} gap={3} display="grid" >
                            <Input type="text" placeholder="Email/Mobile" name="email" onChange={handleInput}/>
                            <Input type="password" placeholder="Password" name="password" onChange={handleInput}/>
                            <Text textAlign="right" color="primary">Forgot Passrord ? </Text>
                            <Button size="lg" w="100%" bg="primary" color="white" _hover={{bg:"dark_primary"}} onClick={()=>handleSubmit(user)}isLoading={state.isLoading} loadingText="Logging In" >Login</Button>
                            <Button variant='link' size="lg" color="primary" fontWeight="bold" >or, Login via OTP</Button>
                    </GridItem>
                    <GridItem textAlign="center" p={10} >
                        <Text fontSize="2xl">with your social network</Text>
                        <Grid templateColumns="repeat(2,225px)" p={5} justifyContent="center" gap="10"  px="10%" className="Login_Social_Buttons">
                            <Button leftIcon={<FaGoogle />} _hover={{bg:"#ea4335", color:"white"}} onClick={handleLogin}> Login with Google</Button>
                            <Button leftIcon={<FaFacebook />} _hover={{bg:"#3b5998", color:"white"}} onClick={handleLogin}> Login with FaceBook</Button>
                        </Grid>
                    </GridItem>
                </Grid>

                <Grid templateColumns={{base:"1fr ",sm:"1fr",md:"1fr",lg:"repeat(2,1fr)"}} gap={5} alignItems="center" justifyContent="center">
                    <GridItem px="5%" py="20px" border="1px solid" display="grid" gap={1}>
                            <Text fontSize="2xl" fontWeight="bold">New To Monster ?</Text>
                            <Text w="75%" color="grey" >Create your profile now and be visible to the top recruiters in the world</Text>
                            <Flex gap={5} alignItems="center">
                                <Button variant="outline" colorScheme="purple" _hover={{bg:"primary",color:"white" }}>Register with us</Button>
                                <Text>OR</Text>
                                <Button variant="outline" colorScheme="purple" _hover={{bg:"primary",color:"white" }}>Upload Resume</Button>
                            </Flex>
                    </GridItem>
                    <GridItem border="1px solid" p={5} height="100%">
                        <Text>
                            Your dream job is a click away! Get the app on your mobile
                        </Text>
                        <Flex mt={5} gap={10} className="app_download_logos">
                            <Img src="https://www.monsterindia.com/rio/public/images/android-footer.png" alt="googlePlay" />
                            <Img src="https://www.monsterindia.com/rio/public/images/ios-footer.png" alt="appStore" />
                        </Flex>
                    </GridItem>
                </Grid>
            </Grid>    
        )
}