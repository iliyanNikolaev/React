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
                    <h1 className={styles.title}>{post.title}</h1>
                    <p className={styles.desc}>{post.desc}</p>
                    <div className={styles.owner}>
                        <span className={styles.author}><span>Author:</span> <span>{post.owner}</span></span>
                    </div>
                </div>

                <Image className={styles.postImg} src={post.image} width={500} height={300} alt='authorProfilePic' />
            </div>

            <div className={styles.lower}>
                <p className={styles.text}>{post.text}</p>
            </div>
        </div>
    )
}
