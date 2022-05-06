import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../commons/components/navbar/Navbar';
import Socmed from '../commons/components/socmed/Socmed';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <Navbar />
        <Component {...pageProps} />
        <Socmed />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
