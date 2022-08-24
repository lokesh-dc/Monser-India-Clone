import { useContext } from "react"
import { AppContext } from "../Context/AppContext"

export default function Home () {
    const {isAuth} = useContext(AppContext);
    console.log(isAuth);
    return (
        <div>
            <h1>HOME</h1>
        </div>
    )
}