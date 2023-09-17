import './App.css'
import { useState } from 'react'

function App() {

  const [selectedImg, setSelectedImg] = useState('');

async function uploadImg(img) {
    const formData = new FormData();

    formData.append('file', img);
    formData.append('upload_preset', 'wunldj1y');

    const response = await fetch('https://api.cloudinary.com/v1_1/dwq3ysahj/image/upload', {
      method: 'POST',
      body: formData
    });

    const data = await response.json();

    console.log(data.url);
  }
  return (
    <>
      <input type="file" onChange={(e) => setSelectedImg(e.target.files[0])}/>

      <button onClick={() => uploadImg(selectedImg)}>Upload</button>
    </>
  )
}

export default App
