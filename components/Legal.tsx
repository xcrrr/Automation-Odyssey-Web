import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { useLanguage } from '../src/LanguageContext';

interface LegalPageProps {
  title: string;
  children: React.ReactNode;
}

const LegalPage: React.FC<LegalPageProps> = ({ title, children }) => (
  <div className="min-h-screen bg-dark text-white">
    <Header />
    <div className="max-w-4xl mx-auto px-4 pt-32 pb-20">
      <h1 className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center gradient-text">{title}</h1>
      <div className="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-3xl">{children}</div>
    </div>
    <Footer />
  </div>
);

const PrivacyPL: React.FC = () => (
  <div className="space-y-6 text-gray-300">
    <section><h2 className="text-xl font-bold text-white mb-3">1. Informacje ogólne</h2><p>Właścicielem serwisu automationodyssey.pl oraz Administratorem Danych Osobowych jest Adam Parszewski, działający w ramach modelu inkubacji biznesowej. Kontakt: automationodyssey@gmail.com.</p></section>
    <section><h2 className="text-xl font-bold text-white mb-3">2. Jakie dane zbieramy?</h2><p>Zbieramy dane, które dobrowolnie podajesz w celach kontaktowych i biznesowych: imię i nazwisko, adres e-mail, numer telefonu, nazwa firmy, dane z rozmów z botami AI.</p></section>
    <section><h2 className="text-xl font-bold text-white mb-3">3. Cel i podstawa przetwarzania</h2><p>Dane przetwarzane są w celu nawiązania kontaktu (Art. 6 ust. 1 lit. f RODO), przygotowania umowy (Art. 6 ust. 1 lit. b RODO) oraz marketingu bezpośredniego (Art. 6 ust. 1 lit. a RODO).</p></section>
    <section><h2 className="text-xl font-bold text-white mb-3">4. Odbiorcy danych</h2><p>Twoje dane mogą być przekazywane: Vapi, ElevenLabs, Cal.com oraz dostawcy usług hostingowych.</p></section>
    <section><h2 className="text-xl font-bold text-white mb-3">5. Twoje prawa</h2><p>Masz prawo do dostępu, sprostowania, usunięcia, ograniczenia przetwarzania, sprzeciwu oraz skargi do PUODO.</p></section>
    <section><h2 className="text-xl font-bold text-white mb-3">6. Cookies i analityka</h2><p>Strona używa plików cookies. Możesz zarządzać ustawieniami cookies w swojej przeglądarce.</p></section>
  </div>
);

const PrivacyEN: React.FC = () => (
  <div className="space-y-6 text-gray-300">
    <section><h2 className="text-xl font-bold text-white mb-3">1. General Information</h2><p>The owner of automationodyssey.pl and Data Controller is Adam Parszewski, operating within a business incubation model. Contact: automationodyssey@gmail.com.</p></section>
    <section><h2 className="text-xl font-bold text-white mb-3">2. What data do we collect?</h2><p>We collect data you voluntarily provide: full name, email address, phone number, company name, data shared during AI bot conversations.</p></section>
    <section><h2 className="text-xl font-bold text-white mb-3">3. Purpose and legal basis</h2><p>Data is processed to respond to inquiries (Art. 6(1)(f) GDPR), fulfil contracts (Art. 6(1)(b) GDPR), and for direct marketing with consent (Art. 6(1)(a) GDPR).</p></section>
    <section><h2 className="text-xl font-bold text-white mb-3">4. Data Recipients</h2><p>Your data may be shared with: Vapi, ElevenLabs, Cal.com, and hosting providers.</p></section>
    <section><h2 className="text-xl font-bold text-white mb-3">5. Your Rights</h2><p>You have the right to access, rectify, erase, restrict processing, object, and lodge a complaint with the supervisory authority (UODO).</p></section>
    <section><h2 className="text-xl font-bold text-white mb-3">6. Cookies & Analytics</h2><p>The site uses cookies. You can manage cookie settings in your browser.</p></section>
  </div>
);

const TermsPL: React.FC = () => (
  <div className="space-y-6 text-gray-300">
    <section><h2 className="text-xl font-bold text-white mb-3">1. Postanowienia wstępne</h2><p>Regulamin określa zasady korzystania z serwisu automationodyssey.pl. Usługodawcą jest Adam Parszewski (Automation Odyssey).</p></section>
    <section><h2 className="text-xl font-bold text-white mb-3">2. Zakres usług</h2><ul className="list-disc pl-5 space-y-1 mt-2"><li>Voiceboty AI (Vapi, ElevenLabs, Retell)</li><li>Chatboty AI i WhatsApp Automation</li><li>Systemy Revenue Recovery i DBR</li><li>Integracje (Zapier, Make.com)</li></ul></section>
    <section><h2 className="text-xl font-bold text-white mb-3">3. Realizacja i płatności</h2><p>Działalność prowadzona w modelu inkubacji biznesowej. Rozliczenia przez Useme, inkubatory lub bezpośrednie umowy cywilnoprawne.</p></section>
    <section><h2 className="text-xl font-bold text-white mb-3">4. Odpowiedzialność</h2><p>Modele LLM mogą generować nieprzewidywalne odpowiedzi. Dostawca nie odpowiada za przerwy usług zewnętrznych. Krytyczne automatyzacje podlegają fazie testowej.</p></section>
    <section><h2 className="text-xl font-bold text-white mb-3">5. Dane osobowe (RODO)</h2><p>Zasady przetwarzania danych określa <a href="#privacy" className="text-primary hover:underline">Polityka Prywatności</a>.</p></section>
    <section><h2 className="text-xl font-bold text-white mb-3">6. Postanowienia końcowe</h2><p>Usługodawca zastrzega prawo zmiany regulaminu. W sprawach spornych dążymy do polubownego rozwiązania.</p></section>
  </div>
);

const TermsEN: React.FC = () => (
  <div className="space-y-6 text-gray-300">
    <section><h2 className="text-xl font-bold text-white mb-3">1. Preliminary Provisions</h2><p>These terms govern the use of automationodyssey.pl. The service provider is Adam Parszewski (Automation Odyssey).</p></section>
    <section><h2 className="text-xl font-bold text-white mb-3">2. Scope of Services</h2><ul className="list-disc pl-5 space-y-1 mt-2"><li>AI Voicebots (Vapi, ElevenLabs, Retell)</li><li>AI Chatbots and WhatsApp Automation</li><li>Revenue Recovery and DBR systems</li><li>Business process integrations (Zapier, Make.com)</li></ul></section>
    <section><h2 className="text-xl font-bold text-white mb-3">3. Service Delivery & Payment</h2><p>Operations conducted within a business incubation model. Settlements via Useme, incubators, or direct civil law agreements.</p></section>
    <section><h2 className="text-xl font-bold text-white mb-3">4. Liability</h2><p>LLM models may generate unpredictable responses. The provider is not liable for third-party service outages. All critical automations go through a sandbox phase.</p></section>
    <section><h2 className="text-xl font-bold text-white mb-3">5. Personal Data (GDPR)</h2><p>Data processing rules are defined in the <a href="#privacy" className="text-primary hover:underline">Privacy Policy</a>.</p></section>
    <section><h2 className="text-xl font-bold text-white mb-3">6. Final Provisions</h2><p>The service provider reserves the right to amend these terms. We seek amicable resolution in case of disputes.</p></section>
  </div>
);

export const PrivacyPolicy: React.FC = () => {
  const { lang, tr } = useLanguage();
  return (
    <LegalPage title={tr.legal.privacyTitle}>
      {lang === 'en' ? <PrivacyEN /> : <PrivacyPL />}
    </LegalPage>
  );
};

export const TermsOfService: React.FC = () => {
  const { lang, tr } = useLanguage();
  return (
    <LegalPage title={tr.legal.termsTitle}>
      {lang === 'en' ? <TermsEN /> : <TermsPL />}
    </LegalPage>
  );
};
