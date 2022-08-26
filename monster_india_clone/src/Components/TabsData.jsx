import { Grid } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const tabsData = {
    skills : ['Sales', 'Software Eng', 'Customer Service', 'Voice Process', 'Java', 'Operations', 'Good Communication', 'Problem Solver' ],
    location : ['New York', 'Rego Park','West New York', 'Williston Park', 'Brooklyn', 'Maspeth', 'Paramus', 'West Orange' ],
    Industry : ['Finance', "Software", 'Information Technology', 'Business Services', 'Health Care', 'Retail', 'Construction, Repair & Maintenance', 'Architecture'],
    Function : ['Chief Marketing Officer (CMO)', "Dental Hygienist", 'National Debt Relief', 'National Advocates for Pregnant Women', 'Emergency Veterinarian - NYC', 'ABA Therapist', 'Construction Project Manager', 'Diesel Mechanic'],
    Roles : ['Finance', "Software", 'Information Technology', 'Business Services', 'Health Care', 'Retail', 'Construction, Repair & Maintenance', 'Architecture'],
    Company : ['Chief Marketing Officer (CMO)', "Dental Hygienist", 'National Debt Relief', 'National Advocates for Pregnant Women', 'Emergency Veterinarian - NYC', 'ABA Therapist', 'Construction Project Manager', 'Diesel Mechanic'],
}


export default function TabsData({type}){
    return (
        <Grid templateColumns="repeat(4,1fr)" gap={5} p={5} pt={0}>
        {
            tabsData[type].map((item)=>(
                <NavLink to="/search" key={item}> {item}</NavLink>
            ))
        }
    </Grid>
    )
}