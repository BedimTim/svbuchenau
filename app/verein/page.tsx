import Button from '../Components/Button';
import Link from 'next/link';
import Image from 'next/image';
import React from "react";


export default function Home() {
  return (
    <main className="">
      <div className='flex min-h-screen flex-col items-center sm:justify-between sm:p-24 bg-cover bg-center'>
      <section className="flex-col w-full text-center mt-32 sm:mt-12 p-8 shadow-2xl text-left bg-white  rounded-lg">
        <div className="sm:text-3xl font-semibold  text-black" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Unsere Räumlichkeiten</div>
        <p className="sm:text-lg mt-4 text-black">
            Der Schützenraum befindet sich an der Unterseite des DGHs in Buchenau. <br/>
            <br/>
            </p>
            <p className='flex-col items-center text-center place-items-center'>Adresse: Giesenhainer Str. 6, 36132 Eiterfeld-Buchenau <br/>
            <br />
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d911.705129862128!2d9.76718404854487!3d50.77838583534661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a3514a631b403b%3A0x3ee0e38a06bacbfb!2sSch%C3%BCtzenverein%20Buchenau-Giesenhain!5e1!3m2!1sde!2sde!4v1730911357827!5m2!1sde!2sde" width="350" height="350" className='flex items-center text-center border-3 rounded-3xl border-black' allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <br />
        </p>
            
        <Image src="" alt="Schützenraum" width={250} height={150} className="m-auto p-8 bg-black bg-center" />
        
      </section>

      <section className="flex-col w-full mt-8 sm:mt-4 p-4 shadow-2xl text-left bg-white  rounded-lg">
        <div className="sm:text-3xl font-semibold text-center text-black" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Mitgliedschaft</div>
        <div>
          <ul>
            <li className="sm:text-lg mt-4 text-black">Der Jahresbeitrag beträgt 24€ für Erwachsene. Der verminderte Beitrag kostet 12€.</li>
            <li className="sm:text-lg mt-4 text-black">Der Mitgliedsantrag kann mit einem Klick auf die Schaltfläche heruntergeladen werden.</li>
            <li className="text-center"><Button name="Mitgliedsantrag herunterladen" file="/api/file" /></li>
            <li className="sm:text-lg mt-4 text-black">Der Antrag kann per E-Mail an <a href="mailto:schuetzenverein-buchenau-giesenhain@web.de" className="text-black underline hover:text-lime-600 duration-500">schuetzenverein-buchenau-giesenhain@web.de</a> gesendet werden.</li>

          </ul>
          
        </div>
      </section>
      </div>
    </main>
  );
}