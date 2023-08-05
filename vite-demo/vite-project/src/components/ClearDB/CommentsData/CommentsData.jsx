import { useState, useEffect } from "react"
import { usePagination } from "../../../hooks/usePagination";
import { getAllComments } from "../../../services/comment";

export default function CommentsData() {
    const [comments, setComments] = useState([]);

    const {start, end, next, prev} = usePagination(comments, 10);

    useEffect(() => {
        getAllComments()
            .then(data => {
                setComments(data.results);
            });
    }, []);

    return (
        <div className="comments">
            <div className="comments-wrapper">
                <h3>Comments</h3>
                {
                    comments.slice(start, end).map(x => <p key={x.objectId}>{x.username}: {x.content}</p>)
                }

                <div className="paginationBtns">
                    <button onClick={prev}>&lt; Prev</button>
                    <button onClick={next}>Next &gt;</button>
                </div>
            </div>
        </div>

    )
}
