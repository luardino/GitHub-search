import { userProps } from "../type/user"
import { Search } from "../components/Search"
import { useState } from "react"

export const Home = () => {
    const [user, setUser] = useState<userProps | null>(null)

    const loadUser = async (userName: string){
        const res = await fetch(`https://api.github.com/users/${userName}`)
        const data = await res.json();
        console.log(data)
    }

    return (
        <div>
         <Search/>
        </div>
    )
}

export default Home