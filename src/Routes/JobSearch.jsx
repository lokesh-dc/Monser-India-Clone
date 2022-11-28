import { SearchIcon } from '@chakra-ui/icons'
import {
    Input,
    FormControl,
    Grid,
    Select,
    Text,
    Button,
    InputGroup,
    InputLeftElement
  } from '@chakra-ui/react'
import { useContext, useState } from 'react'
import { useEffect } from 'react'
import { NavLink } from "react-router-dom"
import { AppContext } from '../Context/AppContext'
import { set_query } from '../Context/createActions'

const initState = {
    q : "Finance",
    Industry: "",
    Job_title:""
}
export default function JobSearch () {
    const [ query, setQuery] = useState(initState);
    const { dispatch} = useContext(AppContext);

    function handleData (e) {
        const {name,value} = e.target;
        setQuery({...query,[name]:value});
    }

    function handlesearch () {
        dispatch(set_query(query));
        setQuery(initState);
    }

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <Grid w = {{base:"100%",sm:"100%", md:"100%", lg:"80%"}}  m="auto" p={10}>
            <Text className='Heading' mb={5}>ADVANCED JOB SEARCH : </Text>
            <FormControl p={10} display="grid" gap={2} bg="white" boxShadow= 'rgba(0, 0, 0, 0.35) 0px 5px 15px'>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<SearchIcon color='gray.300' />}
                    />
                    <Input type='tel' placeholder='Keywords' name="q" onChange={handleData} />
                    </InputGroup>                
                <Grid templateColumns="1fr 1fr">
                    <Input type='text' placeholder='Experience' />
    
                    <Input type='text' placeholder='Location' />
                </Grid>
                <Select placeholder='Industry' name="Industry" onChange={handleData}>
                    <option value="Finance">Finance</option>
                    <option value="Business Services">Business Services</option>
                    <option value="Health Care">Health Care</option>
                    <option value="Construction, Repair & Maintenance">Construction, Repair & Maintenance</option>
                </Select>
                <Select placeholder='Function' name="Job_title" onChange={handleData}>
                <option value="Chief Marketing Officer (CMO)">Chief Marketing Officer (CMO)</option>
                    <option value="Dental Hygienist">Dental Hygienist</option>
                    <option value="National Debt Relief">National Debt Relief</option>
                    <option value="National Advocates for Pregnant Women">National Advocates for Pregnant Women</option>
                </Select>
                <Select placeholder='Role'>
                <option value="">Finance</option>
                    <option value="">Agriculture</option>
                    <option value="">Bussiness</option>
                    <option value="">Teaching</option>
                </Select>
                <Grid templateColumns="1fr 1fr">
                    <Select placeholder='Minimum Salary' >
                        <option value="">10000</option>
                        <option value="">20000</option>
                        <option value="">30000</option>
                        <option value="">50000</option>
                        <option value="">100000</option>
                    </Select>
                    <Select placeholder='Maximum Salary' >
                        <option value="">120000</option>
                        <option value="">200000</option>
                        <option value="">300000</option>
                        <option value="">500000</option>
                        <option value="">1000000</option>
                    </Select>
                </Grid>
                <NavLink to="/searched-articles" >
                    <Button my={5} bg="primary" color="white" _hover={{bg:"dark_primary"}} onClick={handlesearch}>Search</Button>
                </NavLink>
            </FormControl>
        </Grid>
    )
}