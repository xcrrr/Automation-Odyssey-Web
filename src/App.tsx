import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { HowItWorks } from '../components/HowItWorks';
import { FAQ } from '../components/FAQ';
import { Footer } from '../components/Footer';
import { ChatWidget } from '../components/ChatWidget';
import { PrivacyPolicy, TermsOfService } from '../components/Legal';

import { CelestialBackground } from '../components/CelestialBackground';
import { LanguageProvider } from './LanguageContext';

function App() {
  const [view, setView] = useState<'home' | 'privacy' | 'terms'>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#privacy') setView('privacy');
      else if (hash === '#terms') setView('terms');
      else setView('home');
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (view === 'privacy') return <LanguageProvider><PrivacyPolicy /></LanguageProvider>;
  if (view === 'terms') return <LanguageProvider><TermsOfService /></LanguageProvider>;

  return (
    <LanguageProvider>
      <div className="font-sans antialiased text-white bg-dark selection:bg-primary selection:text-dark relative">
        <CelestialBackground />
        <Header />
        <main className="relative z-10">
          <Hero />
          <Features />
          <HowItWorks />
          <FAQ />
        </main>
        <ChatWidget />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;