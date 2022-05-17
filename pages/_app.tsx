import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/layout/navbar/Navbar';
import Socmed from '../components/layout/footer/Socmed';
import { ThemeProvider } from 'next-themes';
import '../styles/prism.css';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          <Component {...pageProps} />
          <Socmed />
        </ThemeProvider>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
