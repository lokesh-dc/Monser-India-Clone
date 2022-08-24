import { useReducer } from "react";
import { createContext } from "react";
import reducer from "./reducer";


export const AppContext = createContext();
const initState = {
    isLoading:false,
    isError:false,
    isAuth:false,
    user :{
        Email : "",
        Token : ""
    }
    
}
export default function AppContextProvider (props) {

    const [state, dispatch] = useReducer(reducer, initState)
    return (
        <AppContext.Provider value={{state,dispatch}} >
            {props.children}
        </AppContext.Provider>
    )
}