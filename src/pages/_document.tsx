import {Html, Head, Main, NextScript} from 'next/document';

export default function Document() {
  return (
    <Html
      lang={
        typeof window !== 'undefined'
          ? (localStorage.getItem('lang') as string)
          : 'es'
      }>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
