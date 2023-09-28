import { useSession } from 'next-auth/react';

const getSession = () => {
    const session = useSession();
    let user = {};
    if (session.status == 'authenticated') {
        user = session.data.user.name;
    }

    return {
        ...user,
        status: session.status
    };
}

export default getSession;