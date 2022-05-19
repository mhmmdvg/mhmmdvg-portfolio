import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/layout/navbar/Navbar';
import Socmed from '../components/layout/footer/Socmed';
import { ThemeProvider } from 'next-themes';
import '../styles/prism.css';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import 'react-tippy/dist/tippy.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const pathNow = router.pathname.split('/')[1];

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          <Component {...pageProps} />
          {/* <Socmed /> */}
          {pathNow === '' ? null : <Socmed />}
        </ThemeProvider>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
