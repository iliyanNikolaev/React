import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
    return (
        <div className={styles.container}>
            <div className={styles.softuni}>
                <Link href='https://softuni.bg/' target='_blank'>
                    <Image src={'/softunilogo.png'} width={435} height={82} alt='softuni' />
                </Link>
            </div>

            <div className={styles.section}>
                <h2 className={styles.title}>I started from here :)</h2>

                <div className={styles.course}>
                    <div className={styles.content}>
                        <h3>1. Programming basics</h3>
                        <p>"Programming Basics" course imparts essential coding skills for Software University students, covering code writing, IDE usage, variables, operators, expressions, console interaction, and control structures.</p>
                    </div>
                    <Link href={'https://github.com/iliyanNikolaev/SoftUni-Programming-Basics-JavaScript'} target='_blank'>View repo in GitHub</Link>
                </div>

                
                <div className={styles.course}>
                <div className={styles.content}>
                        <h3>2. Programming fundamentals</h3>
                        <p>"Programming Fundamentals" at SoftUni covers advanced concepts like arrays, objects, HTML, CSS, HTTP, and prepares students for professional software development.</p>
                    </div>
                    <Link href={'https://github.com/iliyanNikolaev/SoftUni-Programming-Fundamentals-JavaScript'} target='_blank'>View repo in GitHub</Link>
                </div>
            </div>

            <div className={styles.section}>
                <h2 className={styles.title}>I realized that this job is for me :O</h2>

                <div className={styles.course}>
                    <div className={styles.content}>
                        <h3>3. JS advanced</h3>
                        <p>"JS Advanced" course delves into JavaScript, covering syntax, arrays, objects, functions, DOM manipulation, event handling, and advanced programming concepts like OOP and inheritance.</p>
                    </div>
                    <Link href={'https://github.com/iliyanNikolaev/SoftUni-JS-Advanced'} target='_blank'>View repo in GitHub</Link>
                </div>

                
                <div className={styles.course}>
                <div className={styles.content}>
                        <h3>4. JS apps</h3>
                        <p>"JS Applications" course covers HTTP, REST, BaaS, async code, templating, routing, single-page apps, app architecture, design patterns, Web Components, and Webpack setup.</p>
                    </div>
                    <Link href={'https://github.com/iliyanNikolaev/SoftUni-JS-Applications'} target='_blank'>View repo in GitHub</Link>
                </div>
            </div>

            <div className={styles.section}>
                <h2 className={styles.title}>Some real world things 8)</h2>

                <div className={styles.course}>
                    <div className={styles.content}>
                        <h3>5. JS Back End</h3>
                        <p>The intensive course covers server-side JavaScript with Node.js and Express.js, data-driven web apps, MongoDB, Mongoose, and REST API development.</p>
                    </div>
                    <Link href={'https://github.com/iliyanNikolaev/SoftUni-JS-Back-End'} target='_blank'>View repo in GitHub</Link>
                </div>

                
                <div className={styles.course}>
                <div className={styles.content}>
                        <h3>6. React</h3>
                        <p>The course focuses on building Single Page Applications (SPA) with ReactJS, covering JSX, components, routing, data handling, styling, React Hooks, Context API, and unit testing with JEST.</p>
                    </div>
                    <Link href={'https://github.com/iliyanNikolaev/SoftUni-ReactJS'} target='_blank'>View repo in GitHub</Link>
                </div>
            </div>
        </div>
    )
}
