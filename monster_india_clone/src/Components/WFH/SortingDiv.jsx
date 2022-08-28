import { Flex, Grid, Select, Text } from "@chakra-ui/react";

export default function SortingDiv ({handleLimitChange,initLimit, handleSortingChange, initSortMethod}) {
    return(
        <Flex alignItems="center" justifyContent="space-evenly" border="1px solid " bg="white" p={2}>
                <Grid alignItems="center" gap={5} templateColumns="repeat(3,1fr)"> 
                    <Text>Show: </Text>
                    <Select onChange={handleLimitChange} value={initLimit}>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option  value="100">100</option>
                    </Select>
                    <Text>per page </Text>
                </Grid>
                <Grid alignItems="center" gap={5} templateColumns="repeat(3,1fr)"> 
                    <Text>Sort by: </Text>
                    <Select onChange={handleSortingChange} value={initSortMethod}>
                        <option value="asc">Relevance</option>
                        <option value="desc">Freshness</option>
                    </Select>
                    <Text>per page </Text>
                </Grid>

            </Flex>
    )
}