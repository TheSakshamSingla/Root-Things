import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Navbar />
      <main className="flex flex-col items-center justify-center py-20">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-6">
          Welcome to RootThings
        </motion.h1>
        <p className="text-xl">Explore all the rooted stuff in one place!</p>
      </main>
      <Footer />
    </div>
  );
}