"use client"
import { useState } from 'react';
import getSession from '@/utils/getSession';
import { useRouter } from 'next/navigation';

export default function Dashboard() {

    const [err, setErr] = useState(false);
    const session = getSession();
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
