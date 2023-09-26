import './App.css'
import io from 'socket.io-client';
import { useEffect, useState } from 'react';

const socket = io.connect('http://localhost:3001');

function App() {

  const [message, setMessage] = useState('');

  const onChange = (e) => {
    setMessage(e.target.value);
  }

  useEffect(() => {
    socket.on("receive_message", (data) => {
      alert(data.message);
    });
  }, [socket])

  const sendMessage = (message) => {
    socket.emit("send_message", { message });
    setMessage('');
  }

  return (
    <>
      <input 
        type="text" 
        placeholder="your message here..."
        onChange={onChange}
      />

      <button onClick={() => sendMessage(message)}>Send message</button>
    </>
  )
}

export default App
