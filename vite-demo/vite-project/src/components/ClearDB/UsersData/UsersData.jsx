import { useState, useEffect } from "react"
import { getAllUsers } from "../../../services/user"
import { usePagination } from "../../../hooks/usePagination";

export default function UsersData() {

    const [users, setUsers] = useState([]);

    const {start, end, next, prev } = usePagination(users, 10);

    useEffect(() => {
        getAllUsers()
            .then(data => {
                setUsers(data.results);
            })
    }, [])

    return (
        <div className="users">
            <div>
                <h3>Users</h3>

                {users.slice(start, end).map(x => <p key={x.objectId}>{x.username}</p>)}
            </div>

            <div className="paginationBtns">
                <button onClick={prev}>&lt; Prev</button>
                <button onClick={next}>Next &gt;</button>
            </div>
        </div>
    )
}
