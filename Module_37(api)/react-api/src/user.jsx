import { use } from "react"

export default function Users({fetchUser}){

    const users = use(fetchUser);
    console.log(users);

    return(
        <div className="box">
            <h3>Users : {users.length}</h3>
        </div>
    )
}