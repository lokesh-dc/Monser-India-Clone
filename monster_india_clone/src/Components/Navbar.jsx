import { Grid, Box,Img, Button, Menu, MenuButton, MenuList, MenuItem, border, useDisclosure} from '@chakra-ui/react' 
import { NavLink } from 'react-router-dom'
export default function Navbar() {
    return (
        <Grid templateColumns="10% 60% 25%" gap={20} alignItems="center" padding="5" px="10%" boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px;" pos="sticky" top={0}>
            <Box columns={1} spacing={10}>
            <NavLink to="/">
                <Img src="https://media.monsterindia.com/trex/public/default/images/monster-logo.svg" />
            </NavLink>
            </Box>
            
            <Grid templateColumns="repeat(5,1fr)" justifyContent="space-evenly" alignItems="center">
            <Menu >
                <MenuButton>JOB SEARCH </MenuButton>
                    <MenuList>
                        <NavLink to="/search" >
                            <MenuItem >JOB BY LOCATION</MenuItem>
                            <MenuItem >JOB BY SKILL </MenuItem>
                            <MenuItem >JOB BY TITLE</MenuItem>
                            <MenuItem >JOB BY FUNCTIONS </MenuItem>
                            <MenuItem >JOB BY INDUSTRY</MenuItem>
                        </ NavLink>
                    </MenuList>
                </Menu>
                <Menu>
                <MenuButton>WORK FROM HOME</MenuButton>
                    <MenuList>
                    <NavLink to="/work-from-home-jobs" >
                            <MenuItem >WORK FROM HOME IN BANGALORE</MenuItem>
                            <MenuItem > WORK FROM HOME IN PUNE </MenuItem>
                            <MenuItem > WORK FROM HOME IN DELHI</MenuItem>
                            <MenuItem > WORK FROM HOME IN MUMBAI</MenuItem>
                            <MenuItem > WORK FROM HOME IN HYDERABAD </MenuItem>
                        </ NavLink>
                    </MenuList>
                </Menu>
                <Box>CARRIER TIPS</Box>
                <Box>
                    <Button  bg="#feeabe" color="#f78520">PREMIUM SERVICES</Button>
                </Box>
                <Button variant='ghost'>MORE</Button>
            </Grid>

            <Grid templateColumns="repeat(2,1fr)" gap={3}>
                <Button size='md' variant='outline'>JOBSEEKER LOGIN</Button>
                <Button size='md' variant='outline'>FOR EMPLOYERS</Button>
            </Grid>
        </Grid>
    )
}