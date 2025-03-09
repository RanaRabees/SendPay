import Hero from './components/Hero';
import Header from './components/Header';
import Currency from './components/Currency';
import Services from './components/Services';
import Feedback from './components/Feedback';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="m-6">
      <Hero />
      <Header />
      <Currency />
      <Services />
      <Feedback />
      <Footer />
    </main>
  );
}