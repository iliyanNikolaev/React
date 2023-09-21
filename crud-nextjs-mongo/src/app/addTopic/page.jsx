"use client"
import "./AddTopic.css"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function AddTopic() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const [formValues, setFormValues] = useState({ title: '', text: '' });
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
      const res = await fetch('http://localhost:3000/api/topics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, text })
      });

      if(!res.ok) {
        setIsLoading(false);
        throw new Error('Failed to create a topic! Please try again later!');
      }
      router.push('/');
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div className="addTopic-container">
      <form onSubmit={formSubmit}>
        <input type="text"
          placeholder="Topic title"
          name="title"
          value={formValues.title}
          onChange={onChange} />

        <input
          className="text"
          type="text"
          placeholder="Topic text"
          name="text"
          value={formValues.text}
          onChange={onChange} />

        {isLoading ? <p>Loading...</p> : <button>Add topic</button>}
      </form>
    </div>
  )
}
