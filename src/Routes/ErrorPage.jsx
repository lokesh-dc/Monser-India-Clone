import { Button, Flex, Grid, Text } from "@chakra-ui/react"
import {ArrowBackIcon} from "@chakra-ui/icons"
import { useEffect } from "react"
import { Link } from "react-router-dom"

export default function ErrorPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <Grid justifyContent="center">
            <Flex alignItems="center" justifyContent="center" gap={2} flexDirection="column">
                <Text className="Heading">Requested Page not found</Text>
            <Link to="/">
                <Button  bg="primary" color="white" leftIcon={<ArrowBackIcon />} _hover={{bg:"dark_primary"}}>BACK TO HOME</Button>
            </Link>
            </Flex>
            <img src="https://img.freepik.com/free-vector/404-error-lost-space-concept-illustration_114360-7901.jpg?w=826&t=st=1661670811~exp=1661671411~hmac=7f3638461bdc57965695728a6346f32c58d4d4eb437280bf10b2d45864e1f94c" alt="" />
        </Grid>
    )
}