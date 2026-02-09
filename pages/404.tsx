import Link from 'next/link';
import { motion } from 'framer-motion';
import Head from 'next/head';

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
      <Head>
        <title>404 - Page Not Found | Andrew Pinon</title>
        <meta name="description" content="Page not found" />
      </Head>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-9xl font-black mb-4 text-accent">404</h1>
        <h2 className="text-2xl md:text-4xl font-bold mb-8 uppercase tracking-widest">Page Not Found</h2>
        <p className="text-gray-400 mb-12 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <Link
          href="/"
          className="inline-block px-8 py-3 border border-white/20 hover:bg-white hover:text-black transition-all duration-300 font-bold uppercase tracking-widest text-sm"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
