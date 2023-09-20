import "./AddTopic.css"

export default function AddTopic() {
  return (
    <div className="addTopic-container">
      <form>
        <input type="text" placeholder="Topic title"/>
        <input className="text" type="text" placeholder="Topic text"/>
        <button>
          Add topic
        </button>
      </form>
    </div>
  )
}
