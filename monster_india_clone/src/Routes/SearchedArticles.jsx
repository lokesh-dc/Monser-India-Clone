import { useContext, useEffect, useState } from "react"
import { Grid, Img, Text} from "@chakra-ui/react"
import { searchFilteredArticles } from "../Components/API/fetchApi"
import { AppContext } from "../Context/AppContext"
import { data_failure, data_Loading, data_success, reset_query } from "../Context/createActions"
import ArticleDiv from "../Components/WFH/ArticleDiv"

export default function SearchedArticles () {
    const {state,dispatch} = useContext(AppContext);
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      useEffect(()=>{
        dispatch(data_Loading)
        searchFilteredArticles(state.query)
        .then((res)=>{
            setArticles(res);
            dispatch(data_success);
        })
        .catch((err)=>{
            console.log(err);
            dispatch(data_failure);
        })
    },[])
    return (
        <Grid w={{base:"95%",sm:"95%", md:"95%", lg:"80%"}} margin="auto" p={8} >
                <Text className="Heading">SEARCHED JOB ARTICLES : {state.query.q} | {state.query.Job_title}</Text>
                {
                    articles.length===0 && state.isLoading!==true ? 
                    <div>
                        <Img src="https://img.freepik.com/free-vector/400-error-bad-request-concept-illustration_114360-1933.jpg?w=826&t=st=1661669671~exp=1661670271~hmac=9ad853e6a4a5ad01d9c05fa19390adcbe4770532226bf5c06de0bd384d83ff43"></Img>
                    </div> :
                    (
                        <Grid gap={5} templateColumns={{base:"1fr",sm:"1fr",md:"repeat(2,1fr)", lg:"repeat(2,1fr)"}} >
                        {
                            articles?.map((article)=>(
                            <ArticleDiv article={article} key={article.id}/>
                            ))
                        }
                    </Grid>
                    )
                }
        </Grid>
    )
}