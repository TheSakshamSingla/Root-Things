import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto p-10">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-4 text-lg">Feel free to reach out!</p>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;