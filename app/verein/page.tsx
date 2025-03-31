"use client";

import Button from '../Components/Button';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from "react";
import GoogleMaps from '../Components/GoogleMaps';
import Vereinschronik  from '../Components/Vereinschronik';

export default function Home() {


  return (
    <main className="">
      <div className="flex min-h-screen flex-col items-center sm:justify-between sm:p-24 bg-cover bg-center">
        <section className="flex-col w-full text-center mt-32 sm:mt-12 p-8 shadow-2xl bg-white rounded-lg">
          <div className="sm:text-3xl font-semibold text-black">Unsere Räumlichkeiten</div>
          <p className="sm:text-lg mt-4 text-black flex-col items-center text-center place-items-center">
            Der Schützenraum befindet sich an der Unterseite des DGHs in Buchenau.
          </p>
          <p className="m-4">
            Adresse: Giesenhainer Str. 6, 36132 Eiterfeld-Buchenau
          </p>
          <div className="flex flex-col sm:flex-row"> 
            <GoogleMaps />
            <Image src="" alt="Schützenraum" width={250} height={150} className="mx-auto mt-2 sm:m-auto p-8 bg-black bg-center" />
          </div>
        </section>

        <section className="flex-col w-full mt-8 sm:mt-4 p-4 shadow-2xl text-left bg-white rounded-lg">
          <div className="sm:text-3xl font-semibold text-center text-black">Mitgliedschaft</div>
          <div>
            <ul>
              <li className="sm:text-lg mt-4 text-black">
                Der Jahresbeitrag beträgt 24€ für Erwachsene. Der verminderte Beitrag kostet 12€.
              </li>
              <li className="sm:text-lg mt-4 text-black">
                Der Mitgliedsantrag kann mit einem Klick auf die Schaltfläche heruntergeladen werden.
              </li>
              <li className="text-center">
                <Button name="Mitgliedsantrag herunterladen" file="/api/file" />
              </li>
              <li className="sm:text-lg mt-4 text-black">
                Der Antrag kann bei ihrem nächsten Besuch bei uns abgegeben werden.
              </li>
            </ul>
          </div>
        </section>

        {/* Neuer Abschnitt für die Vereinschronik */}
        <section className="flex-col w-full mt-8 sm:mt-4 p-4 shadow-2xl text-left bg-white rounded-lg">
          <div className="sm:text-3xl font-semibold text-center text-black">Vereinschronik</div>
          <div className="sm:text-lg mt-4 text-black max-w-2xl mx-auto">
          <div className="chronik-container max-w-2xl mx-auto p-6 font-sans leading-relaxed">
            <Vereinschronik />
          </div>
          </div>
        </section>
      </div>
    </main>
  );
}