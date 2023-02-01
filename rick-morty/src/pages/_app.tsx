import type { AppProps } from 'next/app';
import { QueryClientProvider } from '@tanstack/react-query';

import '../styles/global.css';
import { Font } from '@/features/common/components/font';
import { Header } from '@/features/common/components/header';
import { queryClient } from '@/features/common/lib/react-query';
import { AppServiceProvider } from '@/features/common/services/app-service-context';
// import { CharacterHead } from '@/features/common/components/character-head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Font />
      <QueryClientProvider client={queryClient}>
        <AppServiceProvider>
          <main className="w-full h-full max-w-[75rem] mx-auto p-4 flex flex-col gap-10">
            <Header />
            {/* <CharacterHead /> */}
            <Component {...pageProps} />
          </main>
        </AppServiceProvider>
      </QueryClientProvider>
    </>
  );
}
