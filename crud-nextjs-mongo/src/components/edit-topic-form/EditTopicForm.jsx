"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function EditTopicForm({
    topic
}) {
    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);

    const [formValues, setFormValues] = useState({ title: topic.title, text: topic.text });
    const onChange = (e) => {
        setFormValues(state => ({ ...state, [e.target.name]: e.target.value }));
    }
    const formSubmit = async (e) => {
        e.preventDefault();
        const { title, text } = formValues;
        if (!title || !text || title.length < 3 || title.length > 30 || text.length < 10 || text.length > 500) {
            return alert('Title must be between 3 and 30 characters!\nText must be between 10 and 500 characters!');
        }
        setIsLoading(true);
        try {
            const res = await fetch('http://localhost:3000/api/topics/' + topic._id, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, text })
            });

            if (!res.ok) {
                setIsLoading(false);
                throw new Error('Failed to edit a topic! Please try again later!');
            }

            router.refresh();
            router.push('/');
        } catch (err) {
            alert(err.message);
        }
    }

    return (
        <div className="editTopic-container">
            <form onSubmit={formSubmit}>
                <input
                    type="text"
                    name="title"
                    value={formValues.title}
                    onChange={onChange} />
                <input
                    className="text"
                    type="text"
                    name="text"
                    value={formValues.text}
                    onChange={onChange} />

                {isLoading ? <p>Loading...</p> : <button>Edit topic</button>}
            </form>
        </div>
    )
}
