import { Box, Grid, Img, Text } from "@chakra-ui/react";

export default function EmployersDiv () {

    return (
    <Box w={{base:"95%",sm:"95%", md:"95%", lg:"80%"}} margin="auto" p={4} > 
        <Text className="Heading">Employers of Choice</Text>
        <Grid templateColumns={{base:"repeat(4,1fr)", sm:"repeat(4,1fr)", md:"repeat(4,1fr)" ,lg:"repeat(8,1fr)"}} py={5} gap={5}>
            <Img src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2021/june/ZnNwNuQzQu0ja8wsf8vGg4ajsi5RRpd7vlOX71RC.jpeg"></Img>
            <Img src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/april/3u92a6TD7MslWbPJic4wSzABsLPBwtL0mrthYvxW.jpeg"></Img>
            <Img src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/april/Mp2fRLKl9YmxG7YBxanGbRYdkzMayIcwhiEe8HyD.jpeg"></Img>
            <Img src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/august/nGqLoPmZun0GxVuKOgaEBB7Q63BGdyOPqHxRpTCl.jpeg"></Img>
            <Img src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2021/october/S75zzSg0xsbyLirgPUWCqPUuUT9LpsXVQp6uLb7B.jpeg"></Img>
            <Img src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2021/november/aGHVfuwztrBLUqQ4hUb3uhV1zgbGZTf9VaoKyRkm.jpeg"></Img>
            <Img src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/march/THyXXtT5sPRi1gVwdxkrksZzSsv7f5UkDFwkaQJD.jpeg"></Img>
            <Img src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/may/csLqDvD5G1J8NuUjYIXIS9vjE8FQMQjWJ6SRP4aj.jpeg" />
        </Grid>
    </Box>
    )
}