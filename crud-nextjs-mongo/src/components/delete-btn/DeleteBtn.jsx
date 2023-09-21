"use client"
import { useRouter } from "next/navigation";

export default function DeleteBtn({
    id
}) {

    const router = useRouter();

    const deleteHandler = async () => {

        const choice = confirm('Are you sure, you want to delete this topic?');

        if (choice) {
            try {

                const response = await fetch('http://localhost:3000/api/topics?id='+id, {
                    method: 'DELETE'
                });

                if(response.ok) {
                    router.refresh();
                } else {
                    throw new Error('Problem in db, topic is not deleted!')
                }
            } catch (err) {
                alert(err.message);
            }
        }
    }

    return (
        <i onClick={deleteHandler} className="fas fa-trash-alt"></i>
    )
}
