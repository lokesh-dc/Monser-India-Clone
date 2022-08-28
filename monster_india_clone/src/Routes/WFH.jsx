import { Flex, Grid, Img } from "@chakra-ui/react"
import { useState } from "react"
import { useEffect } from "react"
import { fetchData , filter, searchApi } from "../Components/API/fetchApi"
import { useSearchParams } from "react-router-dom"
import { FilteringDiv } from "../Components/WFH/FilteringDiv"
import { useContext } from "react"
import { AppContext } from "../Context/AppContext"
import Pagination from "../Components/Pagination"
import SearchingDiv from "../Components/WFH/SearchingDiv"
import ArticleDiv from "../Components/WFH/ArticleDiv"
import SortingDiv from "../Components/WFH/SortingDiv"
import { data_failure, data_Loading, data_success } from "../Context/createActions"


export default function WorkFromHome () {
    const [searchParams, setSearchParams] = useSearchParams();
    const initPage = Number(searchParams.get("page")) || 1;
    const [page,setPage] = useState(initPage);
    const initLimit = Number(searchParams.get("limit")) || 25;
    const [limit,setLimit] = useState(initLimit);
    const initSortMethod = searchParams.get("sort") || "asc"
    const [sort,setSort] = useState(initSortMethod);
    const [articles, setArticles] = useState([]);
    const {state,dispatch} = useContext(AppContext);

    function handlePageChange(value) {
        setPage(prev=>prev+value);
    }
    function handleLimitChange(e) {
        setLimit(e.target.value);
    }
    function handleSortingChange(e) {
        setSort(e.target.value)
    }
    function filteringData(name) {
        dispatch(data_Loading)
        filter({name})
            .then((res)=>{
                setArticles(res);
                dispatch(data_success);
                setPage(1);
            })
            .catch((err)=>{
                console.log(err)
                dispatch(data_failure);
            })
    }

    function Search (value) {
        dispatch(data_Loading)
        searchApi(value)
        .then((res)=>{
            setArticles(res);
            dispatch(data_success);
            setPage(1);
        })
        .catch((err)=>{
            console.log(err)
            dispatch(data_failure);
        })
    }
    useEffect(()=>{
        dispatch(data_Loading)
        fetchData({page,limit, sort})
        .then((res)=>{
            setArticles(res);
            dispatch(data_success);
        })
        .catch((err)=>{
            console.log(err);
            dispatch(data_failure);
        })
    },[page,limit,sort])

    useEffect(()=>{
        setSearchParams({page,limit,sort});
    },[page,limit,sort])

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    
    return (
        <>
            <SearchingDiv Search={Search} />
            <Grid templateColumns={{base:"1fr", sm:"1fr", md:"1fr", lg:"1fr 3fr"}} w="80%" margin="auto"  gap={10} p={10}>
                <FilteringDiv filteringData={filteringData}/>
                    <Grid gap={5} >
                        {
                            state.isLoading!==true &&
                            <SortingDiv handleSortingChange={handleSortingChange} initLimit={initLimit} handleLimitChange={handleLimitChange} initSortMethod={initSortMethod}/>
                        }
                        {
                            state.isError ? 
                            <Flex justifyContent="center">
                                <Img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=826&t=st=1661607682~exp=1661608282~hmac=fafd74e0a56f4f039dfbbce2d4c838cdf60094e902f584a8bca02a5d55ce10a0" alt="Error 404" />
                            </Flex> :
                            articles?.map((article)=>(
                                <ArticleDiv article={article} key={article.id}/>
                                ))
                        }
                        {   
                            state.isLoading!==true &&
                            <Pagination currentPage={page} handlePageChange={handlePageChange} handleSortingChnage={handleSortingChange}/>
                        }
                    </Grid>
            </Grid>

        </>
    )
}