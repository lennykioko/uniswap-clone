import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Main from '../components/Main'
import TransactionHistory from '../components/TransactionHistory'

const style = {
  wrapper: `h-min-screen h-screen w-min-screen bg-[#2D242F] text-white select-none flex flex-col justify-between overflow-scroll`,
}

const Home: NextPage = () => {
  return (
    <div className={style.wrapper}>
      <Head>
        <title>Uniswap</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Main />
      <TransactionHistory />

    </div>
  )
}

export default Home
