import './App.css'
import io from 'socket.io-client';

const socket = io.connect('http://localhost:3001');

function App() {

  const sendMessage = () => {
    socket.emit("send_message", { message: 'test message' });
  }

  return (
    <>
      <input type="text" placeholder="your message here..."/>
      <button onClick={sendMessage}>Send message</button>
    </>
  )
}

export default App
