import Head from 'next/head'

import { Welcome } from "@components/Welcome/Welcome"

import styles from '../styles/Home.module.css'

export default function Home(): JSX.Element {
    return (
        <>
            <Head>
                <title>Igor Abramov Backend Developer</title>
                <meta content="Hire a professional PHP JS Backend developer with knowledge of Symfony AWS" name="description" />
                <meta content="width=device-width, initial-scale=1" name="viewport" />
                <link href="/favicon.ico" rel="icon" />
            </Head>
            <main className={styles.main}>
                <Welcome/>
            </main>
        </>
    )
}
