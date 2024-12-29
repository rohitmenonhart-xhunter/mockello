import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;