import styles from './EditForm.module.css';

export default function EditForm({
    post
}) {
  return (
    <form className={styles.editPost}>
                <h1 className={styles.title}>Edit "{post.title}"</h1>
                <input type="text" placeholder="Title" className={styles.input} value={post.title}/>
                <div className={styles.imageInputs}>
                    <div
                        type="text"
                        className={`${styles.input} ${styles.imgURLinput}`}>
                            <p>{false ? "New image selected" : "Keep the old photo"}</p>
                        <label htmlFor="file" className={styles.addFile}>
                            <span><i className="fas fa-image"></i>New photo</span>
                            <input type="file" id='file' className={styles.file} />
                        </label>
                    </div>
                </div>
                <input type="text" placeholder="Short description" className={styles.input} value={post.desc}/>
                <textarea placeholder="Text content" className={`${styles.input} ${styles.textarea}`} value={post.text}/>

                {/* {error && <Error message={error} setError={setError} />} */}

                <button className={styles.button}>Edit</button>
            </form>
  )
}
