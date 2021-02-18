import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import Header from '../Components/Header';

function MyApp({ Component, pageProps }) {
  const gradientCss = {
    background: '#0f2027',
    background: '-webkit-linear-gradient(to bottom, #0f2027, #203a43, #2c5364)',
    background: 'linear-gradient(to bottom, #0f2027, #203a43, #2c5364)',
  };
  return (
    <>
      <Head>
        <title>BlogStones.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen h-full text-green-200" style={gradientCss}>
        <Header />
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
