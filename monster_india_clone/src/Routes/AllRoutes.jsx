import {Routes, Route} from "react-router-dom"
import CareerTips from "./CareerTips"
import ErrorPage from "./ErrorPage"
import Home from "./Home"
import JobSearch from "./JobSearch"
import Login from "./Login"
import WorkFromHome from "./WFH"
import ArticleRead from "./ArticleRead"
export default function AllRoutes () {

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/work-from-home-jobs" element={<WorkFromHome />}/>
            <Route path="/search" element={<JobSearch/>}/>
            <Route path="/career-tips" element={<CareerTips/>}/>
            <Route path="*" element={<ErrorPage/>}/>
            <Route path="/jobs/:id" element={<ArticleRead />} />
         </Routes>
    )

}