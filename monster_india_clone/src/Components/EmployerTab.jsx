import { Button, Text, Img, Grid } from "@chakra-ui/react";

export default function EmployerTab (props) {
    const {src, head} = props
    return (
        <Grid justifyContent="center" p={10}>
            <Img src={src} w="`100%" />
            <Text fontSize="xl" fontWeight="bold">{head}</Text>
            <Text w="90%">Find your next hire with all new RDA powered by Semantic Search technology that makes it easy and quick to find the talent matching your requirements.</Text>
            <Button variant="outline" size="md" w="fit-content" colorScheme="purple">KNOW MORE</Button>
        </Grid>
    )
}