import axios from "axios"


 function fetchData (params={}) {
    return axios.get('https://monsterbackend.herokuapp.com/jobs',{
        params:{
            _page : params.page,
            _limit : params.limit,
            _sort : "Date_Posted",
            _order:  params.sort
        }
    })
    .then((res)=>{
        return res.data;
    })
    .catch((err)=>{
        console.log(err);
    })
}

 function filter(params={}) {
    return axios.get('https://monsterbackend.herokuapp.com/jobs',{
        params:{
            "Industry": params.name
        }
    })
    .then((res)=>{
        return res.data;
    })
    .catch((err)=>{
        console.log(err);
    })
}

function searchApi(value) {
    return axios.get('https://monsterbackend.herokuapp.com/jobs',{
        params:{
            q: value
        }
    })
    .then((res)=>{
        return res.data;
    })
    .catch((err)=>{
        console.log(err);
    })
}

export function fetchJobArticle(id) {
    return axios.get(`https://monsterbackend.herokuapp.com/jobs/${id}`)
    .then((res)=>{
        return res.data;
    })
    .catch((err)=>{
        console.log(err);
    })
}

function searchFilteredArticles (params={}) {
    return axios.get(`https://monsterbackend.herokuapp.com/jobs`,{
        params:{
            q : params.q,
            Industry : params.Industry,
            Job_title : params.Job_title,
            _limit : 26
        }
    })
    .then((res)=>{
        return res.data;
    })
    .catch((err)=>{
        console.log(err);
    })
}


export {fetchData, filter, searchApi, searchFilteredArticles};