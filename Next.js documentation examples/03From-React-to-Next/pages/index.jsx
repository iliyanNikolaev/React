import { useState } from "react";

function Header({title}) {
    return <h1>{ title || 'Next.js default title'}</h1>
}

export default function HomePage() {
    const laptops = ['Asus TUF', 'Acer Nitro', 'Lenovo Legion'];

    const [likes, setLikes] = useState(0);

    const handleClick = () => {
        setLikes(prev => prev + 1);
    }

    return <>
        <Header title={'Laptops'}/>

        <ul>
            { laptops.map(x => <li key={x}>{x}</li>)}
        </ul>

        <button onClick={handleClick}>Likes: {likes}</button>
    </>
}

