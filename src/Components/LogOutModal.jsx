import { Button, Menu, MenuButton, MenuItem, MenuList,  } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import {  logout, logout_success } from '../Context/createActions';
import { ChevronDownIcon } from "@chakra-ui/icons"
export default function LogOut () {
    const {state, dispatch} = useContext(AppContext);
    function handleLogout () {
        dispatch(logout_success)
        setTimeout(()=>{
            dispatch(logout)
        },1000)
    }
    return (
        <>
            {/* <Button onClick={onOpen} size='md' variant='outline' _hover={{bg:"orange", color:"white"}} ></Button> */}
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />} isLoading={state.isLoggingOut} loadingText="Logging out">
                {state.user.Email}
                </MenuButton>
                <MenuList>  
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>Starred Articles</MenuItem>
                    <MenuItem onClick={handleLogout} >Logout</MenuItem>
                </MenuList>
                </Menu>
        </>
    )
}