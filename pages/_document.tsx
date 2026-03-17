import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&family=Fira+Code:wght@400&display=swap" rel="stylesheet" />
      </Head>
      <body className="bg-primary text-white antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
