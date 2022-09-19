import Head from 'next/head';
import Faq from '../components/FAQ';
import Header from '../components/Header';
import Info from '../components/Info';
import Price from '../components/Pricing';
import StateMent from '../components/statement';
import Universities from '../components/Universities';

export default function Home() {
  return (
    <>
      <Head>
        <title>Kandor</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main>
        <StateMent />
        <Info />
        <Universities />
        <Price />
        <Faq />
      </main>
    </>
  );
}
