import '../styles/globals.css';
import type { AppProps } from 'next/app';
import SmoothScroll from '../components/smooth-scroll';
import CustomCursor from '../components/custom-cursor';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SmoothScroll>
      <CustomCursor />
      <div className="noise-overlay" />
      <Component {...pageProps} />
    </SmoothScroll>
  );
}

export default MyApp;
