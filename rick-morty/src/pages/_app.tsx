import type { AppProps } from 'next/app';

import '../styles/global.css';
import { Font } from '@/features/common/components/font';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Font />
      <main className="w-full h-full max-w-[75rem] mx-auto">
        <Component {...pageProps} />
      </main>
    </>
  );
}
