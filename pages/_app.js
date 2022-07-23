import '../styles/globals.css'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Covid Tracker</title>
      <link rel="icon" href="/favicon.png"/>
    </Head>
    <Component {...pageProps} />
    </>
  );
}

export default MyApp
