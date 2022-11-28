import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Divider, Text } from "@chakra-ui/react";
import CheckboxCreator from "../CheckboxCreator"

const menu = [
    ['Finance', "Telecommunications", 'Information Technology', 'Business Services', 'Health Care', 'Retail', 'Construction, Repair & Maintenance', 'Architecture'],
    ['Sales', 'Software Eng', 'Customer Service', 'Voice Process', 'Java', 'Operations', 'Good Communication', 'Problem Solver' ],
    ['New York', 'Rego Park','West New York', 'Williston Park', 'Brooklyn', 'Maspeth', 'Paramus', 'West Orange' ],
    ['Chief Marketing Officer (CMO)', "Dental Hygienist", 'National Debt Relief', 'National Advocates for Pregnant Women', 'Emergency Veterinarian - NYC', 'ABA Therapist', 'Construction Project Manager', 'Diesel Mechanic'],
    ['Finance', "Software", 'Information Technology', 'Business Services', 'Health Care', 'Retail', 'Construction, Repair & Maintenance', 'Architecture'],
    ['Chief Marketing Officer (CMO)', "Dental Hygienist", 'National Debt Relief', 'National Advocates for Pregnant Women', 'Emergency Veterinarian - NYC', 'ABA Therapist', 'Construction Project Manager', 'Diesel Mechanic'],
];
let head = ['Industry', 'Skills', 'Location', 'Funcion','Roles','Company'];
export function FilteringDiv({filteringData}) {
    return(
        <Box bg="white" height="fit-content">
            <Text fontSize="xl" p={2} color="grey">Filter By </Text>
            <Divider />
            {
                menu.map((item,index)=>(
                    <Accordion  allowMultiple key={index} allowToggle >
                        <AccordionItem>
                        <Text >
                            <AccordionButton>
                                <Box flex='1' textAlign='left' fontWeight="bold" fontSize="md">{head[index]}</Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </Text>
                        <AccordionPanel pb={4} display="grid">
                        <CheckboxCreator data = {item} filteringData={filteringData}/>
                        </AccordionPanel>
                    </AccordionItem>

                </Accordion>
                ))
            }
            </Box>
    )
}