export default function reducer (state, action) {
    switch(action.type){
        case 'LOGIN_REQUEST' : 
            return {...state, isLoading : true}
        case 'LOGIN_FAILURE' :  
            return {...state,isLoading:false, isError : true}
        case 'LOGIN_SUCCESS' :
            return {...state, isLoading:false, isError: false, user: action.payload, isAuth:true}
        case 'DATA_LOADING' :
            return {...state, isLoading: true}
        case 'DATA_FAILURE' : 
            return {...state, isLoading :false, isError:true }
        case "DATA_SUCCESS" :
            return {...state, isLoading:false, isError:false}
        case "LOGOUT" : 
            return {...state, isLoggingOut:false, isAuth: false, user : {Email : "",Token : "" }}
        case "LOGOUT_SUCCESS" :
            return {...state, isLoggingOut:true}
        case "SET_QUERY"  :
            return {...state, isLoading:true, query : action.payload}
        case "RESET_QUERY" :
            return {...state, query: ""}
        default : 
            return state

    }
} 