import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { logout } from '../Context/createActions';

export default function LogOut () {
    const {state, dispatch} = useContext(AppContext);
    const { isOpen, onOpen, onClose } = useDisclosure()
    function handleLogout () {
        dispatch(logout);
    }
    return (
        <>
            <Button onClick={onOpen} size='md' variant='outline' _hover={{bg:"orange", color:"white"}} >{state.user.Email}</Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />                        
                        <ModalBody>
                            Do you want to Log out ?
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                                No
                            </Button>
                            <Button variant='ghost' onClick={handleLogout}  isLoading={state.isLoading} loadingText="Logging Out">Log out</Button>
                        </ModalFooter>
                        </ModalContent>
                    </Modal>    
        </>
    )
}