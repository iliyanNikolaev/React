import Link from 'next/link';
import styles from './page.module.css';
import Image from 'next/image';
import posts from '@/dummydata';


export default function Blog() {
  return (
    <div className={styles.container}>
        {posts.map(x => <Link className={styles.post} href={`/blog/${x._id}`} key={x._id}>
            <Image className={styles.postImage} src={x.image} width={200} height={400} alt='postimg'/>
            <div className={styles.postContent}>
                <h1 className={styles.postTitle}>{x.title}</h1>

                <p className={styles.postDesc}>{x.desc}</p>
            </div>
        </Link>)}
    </div>
  )
}
