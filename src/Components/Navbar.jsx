import { Grid, Box,Img, Button, Menu, MenuButton, MenuList, MenuItem} from '@chakra-ui/react' 
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'
import LogOut from './LogOutModal';
export default function Navbar() {

    const {state , dispatch} = useContext(AppContext);

    return (
        <Grid  
            templateColumns={{base:"1fr", sm:"1fr", md:"1fr", lg:"10% 60% 25%"}} 
            gap={{base:"5", lg:"20"}} 
            textAlign="center" 
            justifyContent="center" 
            alignItems="center" 
            w="100%"
            px={20} 
            py={4}
            boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px;" 
            pos="sticky" 
            bg="white" 
            top={0} 
            zIndex={10}
        >
        
            <Box columns={1} spacing={10} m="auto">
            <NavLink to="/">
                <Img src="https://media.monsterindia.com/trex/public/default/images/monster-logo.svg" w="70%"  />
            </NavLink>
            </Box>
            
            <Grid templateColumns="repeat(5,1fr)" justifyContent="space-evenly" alignItems="center" display={{base:"none" ,sm:"none", md:"grid"}}>
            <Menu >
                <MenuButton>JOB SEARCH </MenuButton>
                    <MenuList fontSize="sm">
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
                    <MenuList fontSize="sm">
                    <NavLink to="/work-from-home-jobs" >
                            <MenuItem >WORK FROM HOME IN BANGALORE </MenuItem>
                            <MenuItem > WORK FROM HOME IN PUNE </MenuItem>
                            <MenuItem > WORK FROM HOME IN DELHI </MenuItem>
                            <MenuItem > WORK FROM HOME IN MUMBAI </MenuItem>
                            <MenuItem > WORK FROM HOME IN HYDERABAD </MenuItem>
                        </ NavLink>
                    </MenuList>
                </Menu>
                <Menu>
                <MenuButton>CAREER TIPS</MenuButton>
                    <MenuList fontSize="sm">
                    <NavLink to="/career-tips">
                            <MenuItem > COVID-19 CAREER ADVICE</MenuItem>
                            <MenuItem > JOB SEARCH STRATERGY </MenuItem>
                            <MenuItem > RESUME & COVER LETTER </MenuItem>
                            <MenuItem > INTERVIEW TIPS </MenuItem>
                            <MenuItem > CAREER MANAGEMENT </MenuItem>
                        </ NavLink>
                    </MenuList>
                </Menu>
                <Box>
                    <Button  bg="#feeabe" color="#f78520">PREMIUM SERVICES</Button>
                </Box>
                <Button variant='ghost'>MORE</Button>
            </Grid>

            <Grid templateColumns="repeat(2,1fr)" gap={3}>
                {
                    state.isAuth!==true && 
                    <NavLink to="/login">
                        <Button size='md' variant='outline' _hover={{bg:"orange", color:"white"}}>JOBSEEKER LOGIN</Button>
                    </NavLink>
                }
                {
                    state.isAuth &&
                    (
                        <LogOut />
                    )
                }

                <NavLink to="/employer">
                    <Button size='md' variant='outline' _hover={{bg:"orange", color:"white"}}>FOR EMPLOYERS</Button>
                </NavLink>
            </Grid>
        </Grid>
    )
}