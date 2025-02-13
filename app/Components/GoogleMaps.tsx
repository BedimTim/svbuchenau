"use client";

import { useState, useEffect } from "react";

export default function GoogleMaps() {
  const [consentGiven, setConsentGiven] = useState<boolean | null>(null);

  useEffect(() => {
    const consent = localStorage.getItem("google-maps-consent");
    if (consent === "true") {
      setConsentGiven(true);
    } else {
      setConsentGiven(false);
    }
  }, []);

  const handleConsent = () => {
    localStorage.setItem("google-maps-consent", "true");
    setConsentGiven(true);
  };

  return (
    <div className="map-container">
      {consentGiven === null ? (
        <p>Lade Einstellungen...</p>
      ) : consentGiven ? (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d911.705129862128!2d9.76718404854487!3d50.77838583534661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a3514a631b403b%3A0x3ee0e38a06bacbfb!2sSch%C3%BCtzenverein%20Buchenau-Giesenhain!5e1!3m2!1sde!2sde!4v1730911357827!5m2!1sde!2sde"
          className="w-80 h-80  mx-auto mt-8 border-4 rounded-3xl border-black"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className="w-80 h-80 mx-auto mt-8 border-4 bg-black rounded-3xl border-black text-white text-center">
          <p>Zum Laden von Google Maps müssen Sie zustimmen.</p>
          <button className='bg-slate-200 rounded-2xl p-4 mt-6 hover:bg-gray-400 duration-500 text-black font-bold hover:font- border-4 border-black  ' onClick={handleConsent}>Google Maps laden</button>
        </div>
      )}
    </div>
  );
}
