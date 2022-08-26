import {Grid, Text} from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
export default function Footer () {
    return (
        <>
        <Grid templateColumns="repeat(4,1fr)">
            <select>
                <option value="India">India</option>
            </select>

        </Grid>

        <Grid bg="primary"  color="white" templateColumns="repeat(5,1fr)" px={20} py={5}>
            <Grid>
                <Text className="Sub-Heading">Job Seekers</Text>
                <NavLink to="/search">Job Search</NavLink>
                <NavLink to="/login"> Job Seekers Login</NavLink>
                <Text>Upload Resume</Text>
                <Text>Career Advice</Text>
                <Text>Search Tips</Text>
                <Text>Free Job Alerts</Text>
                <Text>Find Companies</Text>
                <Text>Help</Text>
            </Grid>
            <Grid>
                <Text className="Sub-Heading">Employers</Text>
                <NavLink to="/employer">Employee Login</NavLink>
                <NavLink to="/login"> Job Seekers Login</NavLink>
                <Text>Upload Resume</Text>
                <Text>Career Advice</Text>
                <Text>Search Tips</Text>
                <Text>Free Job Alerts</Text>
                <Text>Find Companies</Text>
                <Text>Help</Text>
            </Grid>
            <Grid>
                <Text className="Sub-Heading">Monster</Text>
                <NavLink to="/search">Job Search</NavLink>
                <NavLink to="/login"> Job Seekers Login</NavLink>
                <Text>Upload Resume</Text>
                <Text>Career Advice</Text>
                <Text>Search Tips</Text>
                <Text>Free Job Alerts</Text>
                <Text>Find Companies</Text>
                <Text>Help</Text>
            </Grid>
            <Grid>
                <Text className="Sub-Heading">Stay Connected</Text>
                <NavLink to="/search">Job Search</NavLink>
                <NavLink to="/login"> Job Seekers Login</NavLink>
                <Text>Upload Resume</Text>
                <Text>Career Advice</Text>
                <Text>Search Tips</Text>
                <Text>Free Job Alerts</Text>
                <Text>Find Companies</Text>
                <Text>Help</Text>
            </Grid>
            <Grid>
                <Text className="Sub-Heading">Legal</Text>
                <NavLink to="/search">Job Search</NavLink>
                <NavLink to="/login"> Job Seekers Login</NavLink>
                <Text>Upload Resume</Text>
                <Text>Career Advice</Text>
                <Text>Search Tips</Text>
                <Text>Free Job Alerts</Text>
                <Text>Find Companies</Text>
                <Text>Help</Text>
            </Grid>
        </Grid>
        </>
    )
}