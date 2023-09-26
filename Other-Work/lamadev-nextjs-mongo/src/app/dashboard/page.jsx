"use client"
import { useState, useEffect } from 'react';

export default function Dashboard() {

    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');

            if (!res.ok) {
                setErr(true);
                setLoading(false);
            }

            const data = await res.json();

            setLoading(false);
            console.log(data);
            return data;
        };

        getData();
    }, []);

    return (
        <div>
            { loading && <p>Loading...</p> }
            { err && <p>Error in fetch</p> }
            { !loading && !err && <p>Check the console...</p>}
        </div>
    )
}
