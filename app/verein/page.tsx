import Button from '../Components/Button';
import Link from 'next/link';
import Image from 'next/image';
import React from "react";


export default function Home() {
  return (
    <main className="">
      <div className='flex min-h-screen flex-col items-center sm:justify-between sm:p-24 bg-cover bg-center'>
      <section className="flex-col w-full mt-32 sm:mt-12 p-8  text-left bg-lime-600 bg-opacity-75 rounded-lg">
        <div className="sm:text-3xl font-semibold text-center text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Unsere Räumlichkeiten</div>
        <p className="sm:text-lg mt-4 text-white">
            Der Schützenraum befindet sich an der Unterseite des DGHs in Buchenau. <br/>
            <br/>
            Adresse: Giesenhainer Str. 6, 36132 Eiterfeld-Buchenau <br/>
        </p>
        <Image src="" alt="Schützenraum" width={250} height={150} className="m-auto p-8 bg-white bg-center" />
      </section>

      <section className="flex-col w-full mt-8 sm:mt-4 p-4  text-left bg-lime-600 bg-opacity-75 rounded-lg">
        <div className="sm:text-3xl font-semibold text-center text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Mitgliedschaft</div>
        <div>
          <ul>
            <li className="sm:text-lg mt-4 text-white">Der Jahresbeitrag beträgt 24€ für Erwachsene. Der verminderte Beitrag kostet 19€.</li>
            <li className="sm:text-lg mt-4 text-white">Der Mitgliedsantrag kann mit einem Klick auf die Schaltfläche heruntergeladen werden.</li>
            <li className="text-center"><Button name="Mitgliedsantrag herunterladen" file="/api/file" /></li>
            <li className="sm:text-lg mt-4 text-white">Der Antrag kann per E-Mail an <a href="mailto:schuetzenverein-buchenau-giesenhain@web.de" className="text-white underline hover:text-gray-600 duration-500">schuetzenverein-buchenau-giesenhain@web.de</a> gesendet werden.</li>

          </ul>
          
        </div>
      </section>

      <section className="flex-col w-full mt-8 sm:mt-4 p-8  text-left bg-lime-600 bg-opacity-75 rounded-lg">
        <div className="sm:text-3xl font-semibold text-center text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Vorsitz</div>
        <ul>
          <li className="sm:text-lg mt-4 text-white">Vorsitzender: Frank Hutzheimer</li>
          <li className="sm:text-lg mt-4 text-white">2. Vorsitzender: </li>
          <li className="sm:text-lg mt-4 text-white">Schriftführer: </li>
          <li className="sm:text-lg mt-4 text-white">Schatzmeister: Udo Schubert</li>
        </ul>
      </section>
      </div>
    </main>
  );
}