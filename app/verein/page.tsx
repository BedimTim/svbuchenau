import Button from '../Components/Button';
import Link from 'next/link';
import Image from 'next/image';
import React from "react";
import GoogleMaps from '../Components/GoogleMaps';

export default function Home() {
  return (
    <main className="">
      <div className='flex min-h-screen flex-col items-center sm:justify-between sm:p-24 bg-cover bg-center'>
      <section className="flex-col w-full text-center mt-32 sm:mt-12 p-8 shadow-2xl bg-white  rounded-lg">
          <div className="sm:text-3xl font-semibold  text-black" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Unsere Räumlichkeiten</div>
          <p className="sm:text-lg mt-4 text-black flex-col items-center text-center place-items-center">
            Der Schützenraum befindet sich an der Unterseite des DGHs in Buchenau.
          </p>
          <p className='m-4'>
            Adresse: Giesenhainer Str. 6, 36132 Eiterfeld-Buchenau
          </p>
          <div className='flex flex-row'> 
              <GoogleMaps />
              
              <Image src="" alt="Schützenraum" width={250} height={150} className="m-auto p-8 bg-black bg-center" />
          </div>
          
        
      </section>

      <section className="flex-col w-full mt-8 sm:mt-4 p-4 shadow-2xl text-left bg-white  rounded-lg">
        <div className="sm:text-3xl font-semibold text-center text-black" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Mitgliedschaft</div>
        <div>
          <ul>
            <li className="sm:text-lg mt-4 text-black">Der Jahresbeitrag beträgt 24€ für Erwachsene. Der verminderte Beitrag kostet 12€.</li>
            <li className="sm:text-lg mt-4 text-black">Der Mitgliedsantrag kann mit einem Klick auf die Schaltfläche heruntergeladen werden.</li>
            <li className="text-center"><Button name="Mitgliedsantrag herunterladen" file="/api/file" /></li>
            <li className="sm:text-lg mt-4 text-black">Der Antrag kann bei ihrem nächsten Besuch bei uns abgegeben werden.</li>

          </ul>
          
        </div>
      </section>
      </div>
    </main>
  );
}