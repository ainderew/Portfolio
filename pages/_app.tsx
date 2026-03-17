import '../styles/globals.css';
import type { AppProps } from 'next/app';
import SmoothScroll from '../components/smooth-scroll';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SmoothScroll>
      <div className="noise-overlay" />
      <Component {...pageProps} />
    </SmoothScroll>
  );
}

export default MyApp;
