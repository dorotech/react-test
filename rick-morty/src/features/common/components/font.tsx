import { Inter } from '@next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const Font = () => (
  <style jsx global>
    {`
      html {
        --font-inter: ${inter.style.fontFamily};
      }
    `}
  </style>
);
