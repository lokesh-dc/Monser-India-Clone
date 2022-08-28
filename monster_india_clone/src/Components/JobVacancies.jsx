import { Text, Box, Tabs, TabList, Tab, TabPanel, TabPanels} from "@chakra-ui/react";
import TabsData from "./TabsData";
export default function JobVacancies() {

    

    return (
        <Box w={{base:"95%",sm:"95%", md:"95%", lg:"80%"}} margin="auto" p={10} pb={0}>
            <Text className="Heading">FIND JOB VACANCIES BY </Text>
            <Tabs p={5}>
            <TabList display="flex" gap={10}>
                <Tab _selected={{ color: 'white', bg: 'primary' }}>Skills</Tab>
                <Tab _selected={{ color: 'white', bg: 'primary' }}>Location</Tab>
                <Tab _selected={{ color: 'white', bg: 'primary' }}>Industry</Tab>
                <Tab _selected={{ color: 'white', bg: 'primary' }}>Function</Tab>
                <Tab _selected={{ color: 'white', bg: 'primary' }}>Roles</Tab>
                <Tab _selected={{ color: 'white', bg: 'primary' }}>Company</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <TabsData type="skills" />
                </TabPanel>
                <TabPanel>
                    <TabsData type="location" />
                </TabPanel>
                <TabPanel>
                    <TabsData type="Industry" />
                </TabPanel>
                <TabPanel>
                    <TabsData type="Function" />
                </TabPanel>
                <TabPanel>
                    <TabsData type="Roles" />
                </TabPanel>
                <TabPanel>
                    <TabsData type="Company" />
                </TabPanel>
                <TabPanel>
                    <TabsData type="Company" />
                </TabPanel>
            </TabPanels>
            </Tabs>
        </Box>
    )
}