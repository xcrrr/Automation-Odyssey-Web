import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { useLanguage } from '../src/LanguageContext';

interface LegalPageProps {
  title: string;
  children: React.ReactNode;
}

const LegalPage: React.FC<LegalPageProps> = ({ title, children }) => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Header />
      <div className="max-w-4xl mx-auto px-4 pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center">
          {title}
        </h1>
        <div className="glass-card p-8 md:p-12 rounded-3xl border-white/5 prose prose-invert max-w-none">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export const PrivacyPolicy: React.FC = () => {
  const { language } = useLanguage();

  if (language === 'en') {
    return (
      <LegalPage title="Privacy Policy">
        <div className="space-y-6 text-gray-300">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. General Information</h2>
            <p>The owner of the automationodyssey.pl service and the Personal Data Administrator is Adam Parszewski, operating within a business incubation model (legal support: Parents / Legal Guardians). Contact: automationodyssey@gmail.com.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. What data do we collect?</h2>
            <p>We collect data that you voluntarily provide for contact and business purposes:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>First and last name</li>
              <li>E-mail address</li>
              <li>Phone number</li>
              <li>Company name</li>
              <li>Data transmitted during conversations with our AI bots (solely for service delivery).</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Purpose and basis of processing</h2>
            <p>Data is processed for the purpose of:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Establishing contact and responding to inquiries (Art. 6 sec. 1 lit. f GDPR – legitimate interest of the administrator).</li>
              <li>Preparing and executing a contract (Art. 6 sec. 1 lit. b GDPR).</li>
              <li>Direct marketing (Art. 6 sec. 1 lit. a GDPR – with your consent).</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Data Recipients</h2>
            <p>Your data may be transferred to technical entities supporting our services: Vapi (voicebot infrastructure), ElevenLabs (speech synthesis), Cal.com (appointment management), and hosting service providers.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Your Rights</h2>
            <p>You have the right to access your data, rectify it, delete it ("the right to be forgotten"), restrict processing, object, and lodge a complaint with the data protection authority (PUODO).</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Cookies and Analytics</h2>
            <p>The site uses cookies to ensure proper operation and to analyze traffic. You can manage cookie settings in your browser.</p>
          </section>
        </div>
      </LegalPage>
    );
  }

  return (
    <LegalPage title="Polityka Prywatności">
      <div className="space-y-6 text-gray-300">
        <section>
          <h2 className="text-xl font-bold text-white mb-3">1. Informacje ogólne</h2>
          <p>Właścicielem serwisu automationodyssey.pl oraz Administratorem Danych Osobowych jest Adam Parszewski, działający w ramach modelu inkubacji biznesowej (wsparcie prawne: Rodzice / Opiekunowie Prawni). Kontakt: automationodyssey@gmail.com.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-3">2. Jakie dane zbieramy?</h2>
          <p>Zbieramy dane, które dobrowolnie podajesz w celach kontaktowych i biznesowych:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Imię i nazwisko</li>
            <li>Adres e-mail</li>
            <li>Numer telefonu</li>
            <li>Nazwa firmy</li>
            <li>Dane przekazywane w trakcie rozmów z naszymi botami AI (wyłącznie w celu realizacji usługi).</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-3">3. Cel i podstawa przetwarzania</h2>
          <p>Dane przetwarzane są w celu:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Nawiązania kontaktu i odpowiedzi na zapytania (Art. 6 ust. 1 lit. f RODO – uzasadniony interes administratora).</li>
            <li>Przygotowania i realizacji umowy (Art. 6 ust. 1 lit. b RODO).</li>
            <li>Marketingu bezpośredniego (Art. 6 ust. 1 lit. a RODO – za Twoją zgodą).</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-3">4. Odbiorcy danych</h2>
          <p>Twoje dane mogą być przekazywane podmiotom technicznym wspierającym nasze usługi: Vapi (infrastruktura voicebotów), ElevenLabs (synteza mowy), Cal.com (zarządzanie terminami spotkań) oraz dostawcy usług hostingowych.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-3">5. Twoje prawa</h2>
          <p>Masz prawo do dostępu do swoich danych, ich sprostowania, usunięcia („prawo do bycia zapomnianym”), ograniczenia przetwarzania, wniesienia sprzeciwu oraz wniesienia skargi do PUODO.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-3">6. Cookies i analityka</h2>
          <p>Strona wykorzystuje pliki cookies w celu zapewnienia poprawnego działania serwisu oraz analizy ruchu. Możesz zarządzać ustawieniami cookies w swojej przeglądarce.</p>
        </section>
      </div>
    </LegalPage>
  );
};

export const TermsOfService: React.FC = () => {
  const { language } = useLanguage();

  if (language === 'en') {
    return (
      <LegalPage title="Terms of Service">
        <div className="space-y-6 text-gray-300">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Introductory Provisions</h2>
            <p>These terms and conditions define the rules for using the automationodyssey.pl service and ordering AI automation services. The service provider is Adam Parszewski (Automation Odyssey).</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Scope of Services</h2>
            <p>Automation Odyssey offers services in advanced business process automation using artificial intelligence, including:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Design and implementation of AI Voicebots (Vapi, ElevenLabs, Retell).</li>
              <li>Customer communication automation (AI Chatbots, WhatsApp Automation).</li>
              <li>Revenue Recovery and customer database reactivation (DBR) systems.</li>
              <li>Business process integrations (Zapier, Make.com).</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Service Execution and Payments</h2>
            <p>Due to the age of the Contractor (15 years old), the activity is conducted within a business incubation model or with the participation of legal guardians. Settlements occur via:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>The <strong>Useme</strong> platform (issuing VAT invoices without the need for a company).</li>
              <li>Business incubators (e.g., Twój Startup).</li>
              <li>Direct civil law contracts with parental consent.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Liability and Warranty</h2>
            <p>Automation Odyssey makes every effort to ensure that AI systems operate precisely. The Customer acknowledges that:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>LLM (Large Language Models) may generate unpredictable responses (so-called hallucinations).</li>
              <li>The provider is not responsible for interruptions in external services (OpenAI, Vapi, Google).</li>
              <li>All critical automations are subject to a testing phase (sandbox).</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Personal Data (GDPR)</h2>
            <p>Rules for processing personal data are defined in the <a href="#privacy" className="text-primary hover:underline">Privacy Policy</a>. For services requiring access to the data of our Clients' customers, a separate Data Processing Agreement (DPA) is concluded.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Final Provisions</h2>
            <p>The Service Provider reserves the right to change the terms and conditions. Changes take effect on the day of publication on the website. In case of disputes, we strive for an amicable solution in the spirit of business partnership.</p>
          </section>
        </div>
      </LegalPage>
    );
  }

  return (
    <LegalPage title="Regulamin">
      <div className="space-y-6 text-gray-300">
        <section>
          <h2 className="text-xl font-bold text-white mb-3">1. Postanowienia wstępne</h2>
          <p>Niniejszy regulamin określa zasady korzystania z serwisu automationodyssey.pl oraz zamawiania usług automatyzacji AI. Usługodawcą jest Adam Parszewski (Automation Odyssey).</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-3">2. Zakres usług</h2>
          <p>Automation Odyssey oferuje usługi z zakresu zaawansowanej automatyzacji procesów biznesowych przy użyciu sztucznej inteligencji, w tym:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Projektowanie i wdrażanie Voicebotów AI (Vapi, ElevenLabs, Retell).</li>
            <li>Automatyzacja komunikacji z klientem (Chatboty AI, WhatsApp Automation).</li>
            <li>Systemy Revenue Recovery i reaktywacji bazy klientów (DBR).</li>
            <li>Integracje procesów biznesowych (Zapier, Make.com).</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-3">3. Realizacja usług i płatności</h2>
          <p>Z uwagi na wiek Wykonawcy (15 lat), działalność prowadzona jest w modelu inkubacji biznesowej lub przy udziale opiekunów prawnych. Rozliczenia następują za pośrednictwem:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Platformy <strong>Useme</strong> (wystawianie faktur VAT bez konieczności posiadania firmy).</li>
            <li>Inkubatorów przedsiębiorczości (np. Twój Startup).</li>
            <li>Bezpośrednich umów cywilnoprawnych za zgodą rodziców.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-3">4. Odpowiedzialność i Gwarancja</h2>
          <p>Automation Odyssey dokłada wszelkich starań, aby systemy AI działały precyzyjnie. Klient przyjmuje do wiadomości, że:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Modele LLM (Large Language Models) mogą generować nieprzewidywalne odpowiedzi (tzw. halucynacje).</li>
            <li>Dostawca nie odpowiada za przerwy w działaniu usług zewnętrznych (OpenAI, Vapi, Google).</li>
            <li>Wszelkie krytyczne automatyzacje podlegają fazie testowej (sandbox).</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-3">5. Dane osobowe (RODO)</h2>
          <p>Zasady przetwarzania danych osobowych określa <a href="#privacy" className="text-primary hover:underline">Polityka Prywatności</a>. W przypadku usług wymagających dostępu do danych klientów naszych Zleceniodawców, zawierana jest odrębna umowa powierzenia przetwarzania danych (DPA).</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-3">6. Postanowienia końcowe</h2>
          <p>Usługodawca zastrzega sobie prawo do zmiany regulaminu. Zmiany wchodzą w życie z dniem publikacji na stronie. W sprawach spornych dążymy do polubownego rozwiązania w duchu partnerstwa biznesowego.</p>
        </section>
      </div>
    </LegalPage>
  );
};
