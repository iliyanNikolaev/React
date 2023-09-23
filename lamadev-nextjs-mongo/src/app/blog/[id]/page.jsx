import Image from 'next/image';
import styles from './page.module.css';
import posts from '@/dummydata';

export default function Post({ params }) {
    const { id } = params;
    const post = posts.find(x => x._id == id);

    return (
        <div className={styles.container}>
            <div className={styles.upper}>
                <div className={styles.left}>
                    <h1>{post.title}</h1>
                    <p>{post.desc}</p>
                    <div className={styles.owner}>
                        <Image className={styles.authorProfilePic} src={post.owner.profilePic} width={48} height={48} alt='authorProfilePic' />
                        <span>{post.owner.username}</span>
                    </div>
                </div>

                <Image className={styles.postImg} src={post.image} width={500} height={300} alt='authorProfilePic' />
            </div>

            <div className={styles.lower}>
                <p>{post.text}</p>
            </div>
        </div>
    )
}
