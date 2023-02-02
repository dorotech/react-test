import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script
          strategy="beforeInteractive"
          id="theme"
          dangerouslySetInnerHTML={{
            __html: `
          const savedTheme = window.localStorage.getItem('REACT_QUERY_APP_THEME');

          const html = window.document.querySelector('html');

          if (savedTheme === 'dark') {
            html.classList.add('dark');
          } else {
            html.classList.remove('dark');
          }
       `,
          }}
        ></Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
