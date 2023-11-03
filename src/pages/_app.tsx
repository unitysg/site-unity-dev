// src/pages/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';  // Import the Head component from next/head
import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    const html = document.querySelector('html');
    if (html) {
      html.style.scrollBehavior = 'smooth';
    }
  }, []);

  return (
    <Layout>
      <Head>
        <title>Unity Devs - Pioneering Digital Solutions for Everyone</title>
        <meta
          name="description"
          content="Unity Devs is a forward-thinking software agency delivering top-tier digital solutions to Fortune 500 firms and pioneering a unique charitable initiative. Our innovative projects not only drive business transformation but also contribute to a meaningful social impact through our Endowment-as-a-Service (EaaS). Engage with us for a blend of technological excellence and a step towards bettering the world."
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
