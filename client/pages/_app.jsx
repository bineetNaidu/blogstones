import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import Header from '../Components/Header';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

function MyApp({ Component, pageProps }) {
  const gradientCss = {
    background: '#0f2027',
    background: '-webkit-linear-gradient(to bottom, #0f2027, #203a43, #2c5364)',
    background: 'linear-gradient(to bottom, #0f2027, #203a43, #2c5364)',
  };

  const client = new ApolloClient({
    uri: 'http://localhost:4242/admin/api',
    cache: new InMemoryCache(),
  });

  return (
    <>
      <Head>
        <title>BlogStones.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen h-full text-green-200" style={gradientCss}>
        <ApolloProvider client={client}>
          <Header />
          <Component {...pageProps} />
        </ApolloProvider>
      </main>
    </>
  );
}

export default MyApp;
