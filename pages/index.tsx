import Head from 'next/head';
import { Badge } from 'react-bootstrap';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Joseph Sayad</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>
          <Badge variant="primary">Hello World!</Badge>
        </h1>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
