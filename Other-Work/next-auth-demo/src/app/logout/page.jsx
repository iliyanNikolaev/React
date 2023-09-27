"use client"
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/AuthContext";
import { useEffect } from "react";

export default function Logout() {
    const router = useRouter();
    const { auth, setAuth } = useAuthContext();

    useEffect(() => {
        const logoutHandler = async () => {
            try {
                const res = await fetch('api/logout', {
                    method: 'GET',
                    headers: {
                        'X-Authorization': auth.accessToken
                    }
                });

                if(res.ok) {
                    setAuth({});
                    router.push('/');
                }
            } catch (err) {
                console.log(err.message);
            }
        }

        logoutHandler();
    }, [])

    return <>Loading...</>;
}