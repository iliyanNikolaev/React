import EditTopicForm from "@/components/edit-topic-form/EditTopicForm"
import "./EditTopic.css"

const getTopicById = async (id) => {
  try {
      const response = await fetch('http://localhost:3000/api/topics/'+id, { cache: 'no-store' });
      if (!response.ok) {
          throw new Error('Error in DB, please try again later!');
      }
      const topic = await response.json();
      return { ok: true, topic };
  } catch (err) {
      return { ok: false, error: err.message };
  }
}

export default async function EditTopic({ params }) {
  const { id } = params;
  
  const data = await getTopicById(id);

  return (
    <>
      {data.ok && <EditTopicForm topic={data.topic}/>}
      {!data.ok && <p>{data.error}</p>}
    </>
  )
}
