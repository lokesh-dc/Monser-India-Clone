import { Grid} from "@chakra-ui/react";
import EmployersDiv from "../Components/LandingPage/LP_EmployersDiv";
import PremiumBanner from "../Components/LandingPage/Lp_PremiumBanner";
import JobsGrid from "../Components/Jobs_Grid";
import PremiumServices from "../Components/LandingPage/LP_PremiumServices";
import JobVacancies from "../Components/JobVacancies";
import BackgroundBox from "../Components/LandingPage/BackgroundBox";
import { useEffect } from "react";

export default function Home () {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <Grid gap="20px" className="landing-div" pb={10}>  
            <BackgroundBox />
            <EmployersDiv />
            <PremiumBanner />
            <JobsGrid type="WORK FROM HOME JOBS"/>
            <JobsGrid type="RECENT JOBS" />
            <PremiumServices />
            <JobVacancies />
        </Grid>
    )
}