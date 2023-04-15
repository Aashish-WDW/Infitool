// import '@/styles/globals.css';
import '../styles/navbar.css';
import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Nav/Header'
import Footer from './Nav/Footer'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}
