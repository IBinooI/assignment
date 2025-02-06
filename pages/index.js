import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';


export default function Home() {
  return (
    <>
      <Head>
        <title>Assignment 1</title>
        <meta name="description" content="Next.js App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.page}>
        <nav>
          <Link href="/">Home</Link> | <Link href="/fun">FUN</Link> | <Link href="/contact">Contact</Link>
        </nav>

        <h1>Welcome to My Assignment</h1>
        <p>This is the home page thats it please go to the fun page</p>
      </div>
    </>
  );
}
