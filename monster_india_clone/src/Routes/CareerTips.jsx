import { useContext, useEffect, useState } from "react"
import { Flex, Grid, Text} from "@chakra-ui/react"
import { fetchData } from "../Components/API/fetchApi"
import { AppContext } from "../Context/AppContext"
import { data_failure, data_Loading, data_success } from "../Context/createActions"
import ArticleDiv from "../Components/WFH/ArticleDiv"

export default function CareerTips () {
    const {dispatch} = useContext(AppContext);
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

      useEffect(()=>{
        dispatch(data_Loading)
        fetchData({page:1, limit:26})
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
                <Text className="Heading">LATEST ARTICLES</Text>
            <Grid gap={5} templateColumns="repeat(2,1fr)" >
                {
                articles?.map((article)=>(
                    <ArticleDiv article={article} key={article.id}/>
                    ))
                }
            </Grid>
        </Grid>
    )
}