import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>web-whatsapp</title>
        <meta name="description" content="message to your friends" />
      </Head>

    <Sidebar />
      
    </div>
  )
}
