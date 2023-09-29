"use client"
import styles from './page.module.css';
import { useEffect, useState } from 'react';
import { notFound, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import apiHostURL from '@/utils/apiHostURL';

export default function Dashboard() {

    const session = useSession();
    const router = useRouter();
    const [userPosts, setUserPosts] = useState(null);
    const [err, setErr] = useState(false);

    useEffect(() => {
        const getUserPosts = async () => {
            const res = await fetch(apiHostURL + '/api/posts?username=' + session?.data?.user?.username);
            if (!res.ok) {
                return setErr('problem')
            }
            const posts = await res.json();
            setUserPosts(state => posts);
        }
        getUserPosts();
    }, []);

    if (session.status == 'unauthenticated') {
        return router.push('/login');
    }

    if (session.status == 'loading') {
        return <p>Loading...</p>;
    }

    if (err) {
        return notFound();
    }

    const submitHandler = async (e) => {
        e.preventDefault();


    }

    return (
        <div className={styles.container}>
            <div className={styles.userPosts}>
                {userPosts ? <>

                    {userPosts.length == 0 && <p className={styles.noPosts}>You don't have posts yet :(</p>}

                    {userPosts.map(x => <div className={styles.post} key={x._id}>
                        <Image className={styles.postImage} src={x.image} width={100} height={200} alt='postimg' />
                        <div className={styles.postContent}>
                            <h1 className={styles.postTitle}>{x.title}</h1>

                            <div className={styles.buttons}>
                                <i className="far fa-edit"></i>
                                <i className="fas fa-trash-alt"></i>
                            </div>
                        </div>
                    </div>)}</>

                    : <p>Loading...</p>}
            </div>
            <form className={styles.createPost} onSubmit={submitHandler}>
                <h1 className={styles.title}>Add new post</h1>
                <input type="text" placeholder="Title" className={styles.input} />
                <input type="text" placeholder="Image URL (copy URL from img on internet)" className={styles.input} />
                <input type="text" placeholder="Short description" className={styles.input} />
                <textarea placeholder="Text content" className={`${styles.input} ${styles.textarea}`} />

                <button className={styles.button}>Add</button>
            </form>
        </div>
    )
}
