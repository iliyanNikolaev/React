"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function Dashboard() {

    const [err, setErr] = useState(false);
    const session = useSession();
    const router = useRouter();

    if(session.status == 'unauthenticated') {
        return router.push('/login');
    }

    if(session.status == 'loading') {
        return <p>Loading...</p>
    }

    return (
        <div>
            Dashboard..
        </div>
    )
}
