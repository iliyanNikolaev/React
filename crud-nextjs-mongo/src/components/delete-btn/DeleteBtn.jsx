"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeleteBtn({
    id
}) {

    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const deleteHandler = async () => {

        const choice = confirm('Are you sure, you want to delete this topic?');

        if (choice) {
            try {
                setIsLoading(true);
                const response = await fetch('http://localhost:3000/api/topics?id='+id, {
                    method: 'DELETE'
                });

                if(response.ok) {
                    router.refresh();
                } else {
                    throw new Error('Problem in db, topic is not deleted!')
                }
            } catch (err) {
                setIsLoadin(false);
                alert(err.message);
            }
        }
    }

    return (
        <>{isLoading ? <><i className="fas fa-spinner"></i></> : <><i onClick={deleteHandler} className="fas fa-trash-alt"></i></>}</>
    )
}
