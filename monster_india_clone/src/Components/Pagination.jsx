import { Button, Flex } from "@chakra-ui/react";

export default function Pagination ({currentPage, handlePageChange}){

    return(
        <Flex width="fit-content" ml="70%">
            <Button disabled={currentPage===1} onClick={()=>handlePageChange(-1)}>PREVIOUS</Button>
            <Button disabled>{currentPage}</Button>
            <Button onClick={()=>handlePageChange(1)}>NEXT</Button>
        </Flex>
    )
}