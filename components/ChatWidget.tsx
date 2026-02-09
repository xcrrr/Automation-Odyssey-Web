import React, { useEffect } from 'react';

export const ChatWidget: React.FC = () => {
  useEffect(() => {
    // Vapi Widget Script
    const scriptSrc = "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/vapi-widget.js";
    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const script = document.createElement('script');
      script.src = scriptSrc;
      script.defer = true;
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        (window as any).vapiConfig = {
          apiKey: "4e62cdba-03d8-4557-849f-2395f5c5799b", // Public Token
          assistantId: "199da0a9-a008-4f63-8ac4-e2601b5f7830", // Odyssey Assistant
          config: {
            button: {
              position: "bottom-right",
              offset: "24px",
              width: "64px",
              height: "64px",
              color: "#00d4ff",
            }
          }
        };
      };
    }
  }, []);

  return (
    <div className="hidden md:block">
      {/* Vapi Widget will mount itself to the body */}
    </div>
  );
};