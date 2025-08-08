"use client";
import { useState, useEffect } from "react";

export default function CookieBanner({ onAccept }: { onAccept: () => void }) {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("cookiesAccepted")) {
      setCookiesAccepted(true);
      onAccept();
    }
  }, [onAccept]);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setCookiesAccepted(true);
    onAccept();
  };

  if (cookiesAccepted) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white text-black border border-black rounded-xl shadow-lg px-6 py-3 flex flex-col sm:flex-row items-center gap-2 z-50 max-w-md w-full">
      <span className="text-sm">
        Diese Website verwendet Cookies und Analyse-Tools (z.B. Vercel Analytics), um Ihr Nutzungserlebnis zu verbessern.{" "}
        <a href="/datenschutz" className="underline text-black hover:text-lime-600">Mehr erfahren</a>
      </span>
      <button
        onClick={acceptCookies}
        className="mt-2 sm:mt-0 bg-black text-white font-semibold px-4 py-2 rounded-xl border border-black hover:bg-gray-800 transition"
      >
        Akzeptieren
      </button>
    </div>
  );
}