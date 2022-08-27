import axios from "axios"


export function fetchData (params={}) {
    return axios.get('https://monsterbackend.herokuapp.com/jobs',{
        params:{
            _page : params.page,
            _limit : params.limit

        }
    })
    .then((res)=>{
        return res.data;
    })
    .catch((err)=>{
        console.log(err);
    })
}