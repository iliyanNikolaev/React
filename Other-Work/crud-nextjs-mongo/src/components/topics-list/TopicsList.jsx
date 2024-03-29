import Link from "next/link"
import "./TopicsList.css"
import DeleteBtn from "../delete-btn/DeleteBtn";

const getTopics = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/topics', { cache: 'no-store' });
        console.log('response')
        if (!response.ok) {
            throw new Error('Error in DB, please try again later!');
        }
        const topics = await response.json();
        
        return { ok: true, topics };
    } catch (err) {
        return { ok: false, error: err.message };
    }
}

export default async function TopicsList() {
    const data = await getTopics();

    return (
        <div className="topics-list">
            {data.ok &&
                <>
                    {data.topics.map(t =>
                        <div className="topic-item" key={t._id}>
                            <div className="content-container">
                                <h1>{t.title}</h1>
                                <p className="text">{t.text}</p>
                            </div>
                            <div className="icons">
                                <Link href={`/editTopic/${t._id}`}><i className="fas fa-edit"></i></Link>
                                <DeleteBtn id={t._id} />
                            </div>
                        </div>
                    )}
                </>
            }

            {!data.ok && <p>{data.error}</p>}
        </div>
    )
}
