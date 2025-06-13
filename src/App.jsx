import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import CalculatorCTA from './components/CalculatorCTA';
import Testimonials from './components/Testimonials';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <CalculatorCTA />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </div>
  );
}

export default App;