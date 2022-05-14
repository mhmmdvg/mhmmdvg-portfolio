import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/layout/navbar/Navbar';
import Socmed from '../components/layout/footer/Socmed';
import { ThemeProvider } from 'next-themes';
import '../styles/prism.css';

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
