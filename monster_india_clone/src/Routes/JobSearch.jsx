import {
    Input,
    FormControl,
    Grid,
    Select,
    Text,
    Button
  } from '@chakra-ui/react'
import { useEffect } from 'react'

export default function JobSearch () {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <Grid w = {{base:"100%",sm:"100%", md:"100%", lg:"80%"}}  m="auto" p={10}>
            <Text className='Heading' mb={5}>Advanced Job Search</Text>
            <FormControl p={10} display="grid" gap={2} bg="white" boxShadow= 'rgba(0, 0, 0, 0.35) 0px 5px 15px'>
                <Input type='text' placeholder='Keywords' />
                <Grid templateColumns="1fr 1fr">
                    <Input type='text' placeholder='Experience' />
                    <Input type='text' placeholder='Location' />
                </Grid>
                <Select placeholder='Industry'>
                    <option value="">Finance</option>
                    <option value="">Agriculture</option>
                    <option value="">Bussiness</option>
                    <option value="">Teaching</option>
                </Select>
                <Select placeholder='Function' >
                <option value="">Finance</option>
                    <option value="">Agriculture</option>
                    <option value="">Bussiness</option>
                    <option value="">Teaching</option>
                </Select>
                <Select placeholder='Role'>
                <option value="">Finance</option>
                    <option value="">Agriculture</option>
                    <option value="">Bussiness</option>
                    <option value="">Teaching</option>
                </Select>
                <Grid templateColumns="1fr 1fr">
                    <Input type='text' placeholder='Minimum Salary' />
                    <Input type='text' placeholder='Maximum Salary' />
                </Grid>
                <Button my={5} bg="primary" color="white" _hover={{bg:"dark_primary"}}>Search</Button>
            </FormControl>
        </Grid>
    )
}