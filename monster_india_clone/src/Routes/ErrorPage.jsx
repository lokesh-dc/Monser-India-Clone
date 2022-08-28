import { useEffect } from "react"

export default function ErrorPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
            <h1>ERROR 404</h1>
        </div>
    )
}