import { useState } from "react"

export default function CommentsData({
    comments
}) {
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(10);

    const next = () => {
        if (end <= comments.length) {
            setStart(state => state + 10);
            setEnd(state => state + 10);
        }
    }

    const prev = () => {
        if (start - 10 >= 0) {
            setStart(state => state - 10);
            setEnd(state => state - 10);
        }
    }

    return (<>
        <div className="comments">
            <h3>Comments</h3>
            {
                comments.slice(start, end).map(x => <p key={x.objectId}>{x.username}: {x.content}</p>)
            }

            <div className="paginationBtns">
                <button onClick={prev}>&lt; Prev</button>
                <button onClick={next}>Next &gt;</button>
            </div>
        </div>
    </>

    )
}
