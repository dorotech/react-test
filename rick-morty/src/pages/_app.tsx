import type { AppProps } from 'next/app';
import { QueryClientProvider } from '@tanstack/react-query/build/lib/QueryClientProvider';

import '../styles/global.css';
import { Font } from '@/features/common/components/font';
import { Header } from '@/features/common/components/header';
import { queryClient } from '@/features/common/lib/react-query';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Font />
      <QueryClientProvider client={queryClient}>
        <main className="w-full h-full max-w-[75rem] mx-auto p-4">
          <Header />

          <Component {...pageProps} />
        </main>
      </QueryClientProvider>
    </>
  );
}
