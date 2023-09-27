"use client"
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/AuthContext";
import { useEffect } from "react";

export default function Logout() {
    const router = useRouter();
    const { setAuth } = useAuthContext();

    useEffect(() => {
        setAuth({});
        router.push('/');
    }, [])

    return <>Loading...</>;
}