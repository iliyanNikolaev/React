import { useState, useEffect } from "react"
import { getAllUsers } from "../../../services/user"
import { usePagination } from "../../../hooks/usePagination";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
import DbUserItem from "./DbUserItem";

export default function UsersData() {

    const [isLoading, setIsLoading] = useState(true);
    const [users, setUsers] = useState([]);

    const { start, end, next, prev } = usePagination(users, 10);


    useEffect(() => {
        getAllUsers()
            .then(data => {
                setUsers(data.results);
                setIsLoading(false);
            })
    }, [])

    return (
        <div className="users">
            {isLoading ? <LoadingSpinner className="db-loading"/>
                : <>
                    <div>
                        <h3>Users</h3>

                        {users.slice(start, end).map(x => <DbUserItem key={x.objectId} user={x} />)}
                    </div>

                    <div className="paginationBtns">
                        <button onClick={prev}>&lt; Prev</button>
                        <button onClick={next}>Next &gt;</button>
                    </div>
                </>}
        </div>
    )
}
