import './App.css'
import { useState } from 'react'

function App() {

  const [selectedImg, setSelectedImg] = useState('');

async function uploadImg() {
    const formData = new FormData();

    formData.append('file', selectedImg);
    formData.append('upload_preset', 'wunldj1y');
    formData.append('cloudname', 'dwq3ysahj');

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

      <button onClick={uploadImg}>Upload</button>
    </>
  )
}

export default App
