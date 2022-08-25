import axios from "axios"


export function fetchData () {
    return axios.get('https://monsterbackend.herokuapp.com/jobs',{
        params:{
            _page : 1,
            _limit : 4

        }
    })
    .then((res)=>{
        return res.data;
    })
    .catch((err)=>{
        console.log(err);
    })
}