"use client";
import { useState, useEffect } from "react";
import CookieBanner from "./CookieBanner";
import { Analytics } from "@vercel/analytics/react";

export default function AppClient() {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("cookiesAccepted")) {
      setCookiesAccepted(true);
    }
  }, []);

  return (
    <>
      <CookieBanner onAccept={() => setCookiesAccepted(true)} />
      {cookiesAccepted && <Analytics />}
    </>
  );
}