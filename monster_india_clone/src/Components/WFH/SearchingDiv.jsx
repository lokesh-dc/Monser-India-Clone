import { Button, Grid, Input, Select } from "@chakra-ui/react";
import { useState } from "react";

export default function SearchingDiv ({Search}) {
    const [query,setQuery] = useState("");
    function handleSearch(e) {
        e.preventDefault();
        Search(query);
        setQuery("");
    }

    function handleData(e){
        setQuery(e.target.value);
    }

    return (
        <Grid bg="white" templateColumns="2fr 1fr 1fr 1fr" px = {{base:"2.5%",sm:"2.5", md:"2.5", lg:"10%"}} py="10px" bacground="white" mt={5}>
        <Input type="text" placeholder="Search by skills, company & Job" onChange={handleData} value={query} />
        <Input type="text" placeholder="Location" />
        <Select placeholder="Experience">
            <option value="0">O Years</option>
            <option value="0">1 Years</option>
            <option value="0">2 Years</option>
            <option value="0">3 Years</option>
        </Select>
        <Button bg="primary" color="white" onClick={handleSearch}>Search</Button>
    </Grid>
    )
}