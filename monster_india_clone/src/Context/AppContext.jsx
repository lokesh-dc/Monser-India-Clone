import { useReducer } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

export default function AppContextProvider (props) {

    const [isAuth,setIsAuth] = useState(false);
    return (
        <AppContext.Provider value={{isAuth}} >
            {props.children}
        </AppContext.Provider>
    )
}