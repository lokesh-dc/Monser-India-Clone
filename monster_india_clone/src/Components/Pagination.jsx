import { Button, Flex } from "@chakra-ui/react";

export default function Pagination ({currentPage, handlePageChange}){
    return(
            <Flex  width="100%" justifyContent="end" gap={3}>
            { 
                    currentPage!==1 &&
                    <Button bg="primary" color="white" _hover={{bg:" dark_primary"}} onClick={()=>handlePageChange(-1)}>PREVIOUS</Button>
            }
            <Button variant="outline" colorScheme="purple" >{currentPage}</Button>
            <Button bg="primary" color="white" _hover={{bg:" dark_primary"}} onClick={()=>handlePageChange(1)}>NEXT</Button>
            </Flex>
    )
}