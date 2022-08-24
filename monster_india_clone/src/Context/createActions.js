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

