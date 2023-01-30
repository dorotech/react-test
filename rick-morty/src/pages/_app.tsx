import type { AppProps } from 'next/app';

import '../styles/global.css';
import { Font } from '@/features/common/components/font';
import { Header } from '@/features/common/components/header';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Font />
      <main className="w-full h-full max-w-[75rem] mx-auto p-4">
        <Header />

        <Component {...pageProps} />
      </main>
    </>
  );
}
