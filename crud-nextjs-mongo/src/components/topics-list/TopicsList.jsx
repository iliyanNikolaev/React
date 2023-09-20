import Link from "next/link"
import "./TopicsList.css"

const getTopics = async () => {
    try {
        const response = await fetch(process.env.API_HOST + '/topics', {cache: 'no-store'});

        if (!response.ok) {
            throw new Error('Topics not loaded!!');
        }

        return response.json();
    } catch (err) {
        return { error: err.message };
    }
}

export default async function TopicsList() {
    const topics = await getTopics();

    return (
        <div className="topics-list">

            {topics.map(t =>
                <div className="topic-item" key={t._id}>
                    <div className="content-container">
                        <h1>{t.title}</h1>
                        <p className="text">{t.text}</p>
                    </div>

                    <div className="icons">
                        <Link href={`/editTopic/${t._id}`}><i className="fas fa-edit"></i></Link>
                        <i className="fas fa-trash-alt"></i>
                    </div>
                </div>
            )}

        </div>
    )
}
