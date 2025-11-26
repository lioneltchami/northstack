'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function CrispChat() {
  const crispWebsiteId = process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID;

  // Don't show in development
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  // Don't show if not configured
  if (!crispWebsiteId) {
    if (typeof window !== 'undefined') {
      console.info(
        'ℹ️ Crisp Chat is not configured. Add NEXT_PUBLIC_CRISP_WEBSITE_ID to your environment variables to enable live chat.'
      );
    }
    return null;
  }

  return (
    <>
      <Script
        id="crisp-chat"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.$crisp=[];
            window.CRISP_WEBSITE_ID="${crispWebsiteId}";
            (function(){
              d=document;
              s=d.createElement("script");
              s.src="https://client.crisp.chat/l.js";
              s.async=1;
              d.getElementsByTagName("head")[0].appendChild(s);
            })();
          `,
        }}
      />
    </>
  );
}

// Custom hook to interact with Crisp programmatically
export function useCrisp() {
  const openChat = () => {
    if (typeof window !== 'undefined' && window.$crisp) {
      window.$crisp.push(['do', 'chat:open']);
    }
  };

  const closeChat = () => {
    if (typeof window !== 'undefined' && window.$crisp) {
      window.$crisp.push(['do', 'chat:close']);
    }
  };

  const sendMessage = (message: string) => {
    if (typeof window !== 'undefined' && window.$crisp) {
      window.$crisp.push(['do', 'message:send', ['text', message]]);
    }
  };

  const setUserEmail = (email: string) => {
    if (typeof window !== 'undefined' && window.$crisp) {
      window.$crisp.push(['set', 'user:email', [email]]);
    }
  };

  const setUserNickname = (nickname: string) => {
    if (typeof window !== 'undefined' && window.$crisp) {
      window.$crisp.push(['set', 'user:nickname', [nickname]]);
    }
  };

  return {
    openChat,
    closeChat,
    sendMessage,
    setUserEmail,
    setUserNickname,
  };
}

// Type declaration for Crisp
declare global {
  interface Window {
    $crisp: any;
    CRISP_WEBSITE_ID: string;
  }
}
