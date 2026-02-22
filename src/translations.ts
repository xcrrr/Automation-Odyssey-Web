export type Language = 'pl' | 'en';

export interface Translation {
  header: {
    strategy: string;
    process: string;
    faq: string;
    consultation: string;
    bookCall: string;
  };
  hero: {
    badge: string;
    titleMain: string;
    titleHighlight: string;
    description: string;
    startProject: string;
    hotline: string;
    products: {
      dbr: {
        title: string;
        description: string;
        badge: string;
      };
      speedToLead: {
        title: string;
        description: string;
        badge: string;
      };
      reputation: {
        title: string;
        description: string;
      };
    };
  };
  features: {
    title: string;
    titleHighlight: string;
    description: string;
    voiceSupport: {
      title: string;
      description: string;
    };
    instantContact: {
      title: string;
      description: string;
    };
    leadRecovery: {
      title: string;
      description: string;
    };
    authorityBuilding: {
      title: string;
      description: string;
    };
  };
  howItWorks: {
    title: string;
    titleHighlight: string;
    description: string;
    bookConsultation: string;
    steps: {
      audit: { title: string; description: string };
      architecture: { title: string; description: string };
      ecosystem: { title: string; description: string };
      scaling: { title: string; description: string };
    };
  };
  comparison: {
    title: string;
    titleHighlight: string;
    human: {
      label: string;
      title: string;
      features: string[];
    };
    ai: {
      label: string;
      title: string;
      features: string[];
    };
  };
  faq: {
    title: string;
    titleHighlight: string;
    items: Array<{ question: string; answer: string }>;
  };
  footer: {
    mission: string;
    navTitle: string;
    contactTitle: string;
    strategy: string;
    process: string;
    support: string;
    createdWith: string;
    privacy: string;
    terms: string;
  };
  legal: {
    privacyTitle: string;
    termsTitle: string;
  };
}

export const translations: Record<Language, Translation> = {
  pl: {
    header: {
      strategy: 'Strategia',
      process: 'Proces',
      faq: 'FAQ',
      consultation: 'Konsultacja',
      bookCall: 'Umów Rozmowę'
    },
    hero: {
      badge: 'TWOJA BEZPOŚREDNIA PRZEWAGA RYNKOWA',
      titleMain: 'WYZNACZAMY',
      titleHighlight: 'STANDARD.',
      description: 'Wdrażamy najpotężniejsze na świecie systemy AI, które myślą i sprzedają za Ciebie. Zero kompromisów. Tylko czysta wydajność.',
      startProject: 'Poznaj Proces',
      hotline: 'Rozmawiaj z naszym AI',
      products: {
        dbr: {
          title: 'Reaktywacja Bazy (DBR)',
          description: "Wyciągamy 'ukryte pieniądze' z Twoich starych leadów. System AI kontaktuje się z zapomnianymi klientami i generuje nowe zamówienia.",
          badge: 'Najszybsze ROI'
        },
        speedToLead: {
          title: 'Błyskawiczny Kontakt',
          description: 'Nigdy więcej uciekających leadów. System AI oddzwania do klienta w 3 minuty po wysłaniu formularza, 24/7.',
          badge: 'Speed-to-Lead'
        },
        reputation: {
          title: 'Budowa Reputacji',
          description: 'Automatycznie zbieraj opinie 5* w Google Maps od zadowolonych klientów i wyprzedź konkurencję w Szczecinie.'
        }
      }
    },
    features: {
      title: 'Ekosystem',
      titleHighlight: 'Odyssey.',
      description: 'Korzystamy z najnowocześniejszych technologii dostępnych w 2026 roku. Nasze systemy są stale aktualizowane do najnowszych silników AI.',
      voiceSupport: {
        title: 'Głosowi Agenci AI',
        description: 'Autonomiczne systemy, które brzmią jak człowiek. Obsługują klientów i realizują sprzedaż bez ingerencji ludzkiej.'
      },
      instantContact: {
        title: 'Reakcja Błyskawiczna',
        description: 'Systemy "Speed-to-Lead". Gdy klient zostawia dane, AI kontaktuje się z nim w mniej niż 30 sekund, domykając transakcję.'
      },
      leadRecovery: {
        title: 'Odzyskiwanie Leadów',
        description: 'AI przeprowadza kampanie reaktywacyjne, które budzą uśpione kontakty i zamieniają je w realne zamówienia.'
      },
      authorityBuilding: {
        title: 'Agentic Workflows',
        description: 'AI przejmuje żmudne procesy, analizuje dokumenty i zarządza przepływem pracy, redukując koszty o 80%.'
      }
    },
    comparison: {
      title: 'Matematyka',
      titleHighlight: 'Przyszłości',
      human: {
        label: 'Pracownik Tradycyjny',
        title: 'Klasyczny Model',
        features: [
          'Dostępność 8h dziennie (Pn-Pt)',
          'Obsługuje tylko 1 połączenie naraz',
          'Ryzyko pomyłek i zapomnianych leadów',
          'Koszty składek, urlopów i sprzętu',
          'Przerwy, zmęczenie, spadek formy'
        ]
      },
      ai: {
        label: 'Agent AI Odyssey',
        title: 'Nowy Standard',
        features: [
          'Gotowość 24/7/365 (również święta)',
          'Nielimitowana ilość rozmów naraz',
          '100% precyzji w danych i kalendarzu',
          'Stały koszt bez "ukrytych wydatków"',
          'Nigdy nie śpi, nigdy nie traci formy'
        ]
      }
    },
    howItWorks: {
      title: 'Standard Dostarczania',
      titleHighlight: 'Odyssey',
      description: 'Od mapowania procesów do pełnej autonomii. Szybko, konkretnie, profesjonalnie.',
      bookConsultation: 'Umów Konsultację',
      steps: {
        audit: { title: 'Audyt & Strategia', description: 'Analizujemy Twój model biznesowy i identyfikujemy miejsca, gdzie AI przyniesie największy zysk.' },
        architecture: { title: 'Budowa & Testy', description: 'Tworzymy dedykowane systemy i łączymy je z Twoimi narzędziami. 100% niezawodności.' },
        ecosystem: { title: 'Wdrożenie Systemu', description: 'Uruchamiamy gotowe rozwiązanie. Twoja firma wchodzi na poziom automatycznego skalowania.' },
        scaling: { title: 'Nadzór & Serwis', description: 'Zapewniamy ciągły monitoring i aktualizacje do najnowszych wersji silników AI.' }
      }
    },
    faq: {
      title: 'Pytania do',
      titleHighlight: 'Ekspertów.',
      items: [
        {
          question: "Czy to się opłaca małej firmie?",
          answer: "Zdecydowanie. Nasze systemy kosztują ułamek pensji pracownika, a pracują 24/7. System Speed-to-Lead zwraca się zazwyczaj już przy pierwszym uratowanym leadzie."
        },
        {
          question: "Czy AI zastąpi moich pracowników?",
          answer: "Naszym celem jest zastąpienie żmudnych zadań. Twoi pracownicy będą mogli skupić się na budowaniu relacji i strategii."
        },
        {
          question: "Czy muszę znać się na technologii?",
          answer: "Absolutnie nie. My zajmujemy się wszystkim. Ty otrzymujesz gotowy panel i powiadomienia o nowych klientach na telefon."
        },
        {
          question: "Czy technologia jest bezpieczna?",
          answer: "Stosujemy najwyższe standardy izolacji danych. Twoje dane biznesowe nigdy nie wyciekną do modeli publicznych."
        }
      ]
    },
    footer: {
      mission: 'Budujemy inteligencję, która uwalnia potencjał Twojego biznesu. Przyszłość nie jest do przewidzenia – jest do zaprojektowania.',
      navTitle: 'Nawigacja',
      contactTitle: 'Kontakt',
      strategy: 'Strategia',
      process: 'Proces',
      support: 'Wsparcie',
      createdWith: '2026 AUTOMATION ODYSSEY | SZCZECIN & GLOBAL',
      privacy: 'Prywatność',
      terms: 'Regulamin'
    },
    legal: {
      privacyTitle: 'Polityka Prywatności',
      termsTitle: 'Regulamin'
    }
  },
  en: {
    header: {
      strategy: 'Strategy',
      process: 'Process',
      faq: 'FAQ',
      consultation: 'Consultation',
      bookCall: 'Book a Call'
    },
    hero: {
      badge: 'YOUR DIRECT MARKET ADVANTAGE',
      titleMain: 'SETTING THE',
      titleHighlight: 'STANDARD.',
      description: 'We deploy the world\'s most powerful AI systems that think and sell for you. Zero compromises. Only pure performance.',
      startProject: 'Explore Process',
      hotline: 'Talk to our AI',
      products: {
        dbr: {
          title: 'Database Reactivation (DBR)',
          description: "We extract 'hidden revenue' from your old leads. Our AI system contacts dormant customers and generates new orders.",
          badge: 'Fastest ROI'
        },
        speedToLead: {
          title: 'Instant Response',
          description: 'No more lost leads. Our AI system calls the customer back within 3 minutes of form submission, 24/7.',
          badge: 'Speed-to-Lead'
        },
        reputation: {
          title: 'Reputation Building',
          description: 'Automatically collect 5* Google Maps reviews from satisfied customers and outpace your competition.'
        }
      }
    },
    features: {
      title: 'Odyssey',
      titleHighlight: 'Ecosystem.',
      description: 'We use the most advanced technologies available in 2026. Our systems are constantly updated to the latest AI engines.',
      voiceSupport: {
        title: 'AI Voice Agents',
        description: 'Autonomous systems that sound identical to humans. They handle customers and close sales without human intervention.'
      },
      instantContact: {
        title: 'Instant Response',
        description: '"Speed-to-Lead" systems. When a lead leaves data, AI contacts them in less than 30 seconds, closing the deal.'
      },
      leadRecovery: {
        title: 'Lead Recovery',
        description: 'AI performs reactivation campaigns that wake up dormant contacts and turn them into real orders.'
      },
      authorityBuilding: {
        title: 'Agentic Workflows',
        description: 'AI takes over tedious processes, analyzes documents, and manages workflow, reducing costs by 80%.'
      }
    },
    comparison: {
      title: 'Future',
      titleHighlight: 'Math',
      human: {
        label: 'Traditional Employee',
        title: 'Classic Model',
        features: [
          'Available 8h/day (Mon-Fri)',
          'Handles only 1 call at a time',
          'Risk of mistakes and forgotten leads',
          'Costs of taxes, vacations, and equipment',
          'Breaks, fatigue, drop in performance'
        ]
      },
      ai: {
        label: 'Odyssey AI Agent',
        title: 'New Standard',
        features: [
          'Ready 24/7/365 (including holidays)',
          'Unlimited simultaneous calls',
          '100% accuracy in data and calendar',
          'Fixed cost without "hidden expenses"',
          'Never sleeps, never loses form'
        ]
      }
    },
    howItWorks: {
      title: 'Odyssey Delivery',
      titleHighlight: 'Standard',
      description: 'From process mapping to full autonomy. Fast, concrete, professional.',
      bookConsultation: 'Book Consultation',
      steps: {
        audit: { title: 'Audit & Strategy', description: 'We analyze your business model and identify where AI will bring the most profit.' },
        architecture: { title: 'Build & Test', description: 'We create dedicated systems and connect them with your tools. 100% reliability.' },
        ecosystem: { title: 'System Deployment', description: 'We launch the ready solution. Your company enters the level of automatic scaling.' },
        scaling: { title: 'Supervision & Service', description: 'We provide continuous monitoring and updates to the latest AI engine versions.' }
      }
    },
    faq: {
      title: 'Expert',
      titleHighlight: 'FAQ.',
      items: [
        {
          question: "Is it worth it for a small business?",
          answer: "Definitely. Our systems cost a fraction of an employee's salary and work 24/7. Speed-to-Lead usually pays for itself with the first saved lead."
        },
        {
          question: "Will AI replace my employees?",
          answer: "Our goal is to replace tedious tasks. Your employees will be able to focus on building relationships and strategy."
        },
        {
          question: "Do I need to be tech-savvy?",
          answer: "Absolutely not. We handle everything. You get a ready-to-use panel and new customer notifications on your phone."
        },
        {
          question: "Is the technology safe?",
          answer: "We use the highest data isolation standards. Your business data will never leak into public models."
        }
      ]
    },
    footer: {
      mission: 'We build intelligence that unlocks your business potential. The future is not to be predicted – it is to be designed.',
      navTitle: 'Navigation',
      contactTitle: 'Contact',
      strategy: 'Strategy',
      process: 'Process',
      support: 'Support',
      createdWith: '2026 AUTOMATION ODYSSEY | SZCZECIN & GLOBAL',
      privacy: 'Privacy',
      terms: 'Terms'
    },
    legal: {
      privacyTitle: 'Privacy Policy',
      termsTitle: 'Terms of Service'
    }
  }
};
