import Head from 'next/head'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Widgets from '../components/Widgets';

export default function Home() {
  return (
    <div className="h-screen overflow-hidden bg-gray-100">
      <Head>
        <title>Facebook</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex">
          <Sidebar />
          <Feed />
          <Widgets />
      </main>
    </div>
  )
}

