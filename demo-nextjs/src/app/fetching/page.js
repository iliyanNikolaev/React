import Image from "next/image";

const getAllTodos = async () => {
    const response = await fetch('http://localhost:3030/jsonstore/todos');
    const data = await response.json();
    
    return Object.values(data);
}

const getAllContacts = async () => {
    const response = await fetch('http://localhost:3030/jsonstore/phonebook');
    const data = await response.json();

    return Object.values(data);
}

const getDogPicture = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random', {cache: 'no-store'});
    const data = await response.json();

    return data;
}

export default async function FetchingData() {
    const [todos, contacts, dog] = await Promise.all([
        getAllTodos(), 
        getAllContacts(),
        getDogPicture()
    ]);



    return (
        <>
            <h2>Todo List</h2>
            <ul>
                {todos.map(x => <li key={x._id}>{x.text}</li>)}
            </ul>

            <h2>Contacts</h2>
            <ul>
                {contacts.map(x => <li key={x._id}>{x.person}</li>)}
            </ul>

            <h2>Random dog</h2>

            <Image src={dog.message} alt="dog" width={300} height={300}></Image>
        </>
    );
}