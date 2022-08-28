export const login_request = {
    type:"LOGIN_REQUEST"
}

export const login_failure = {
    type:"LOGIN_FAILURE"
}

export function login_success (data){
    return {
        type:"LOGIN_SUCCESS",
        payload : data
    }
}

export const data_Loading ={
    type : "DATA_LOADING"
}

export const data_failure = {
    type : "DATA_FAILURE"
}

export const data_success = {
    type : "DATA_SUCCESS"
}

export const logout = {
    type : "LOGOUT"
}

export const logout_success = {
    type : "LOGOUT_SUCCESS"
}
export const set_query = (data) => {
    return {
        type : "SET_QUERY" ,
        payload : data
    }
}

export const reset_query = {
    type : "RESET_QUERY"
}