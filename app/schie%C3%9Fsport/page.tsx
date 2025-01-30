import Button from '../Components/Button';
import Link from 'next/link';
import Image from 'next/image';
import React from "react";



export default function Home() {
  return (
    <main className="">
      <div className='flex min-h-screen flex-col items-center sm:justify-between sm:p-24 bg-cover bg-center'>
      <section className="flex-col w-full mt-32 sm:mt-12 p-8 shadow-2xl text-left bg-white  rounded-lg">
        <div className="sm:text-3xl font-semibold text-center text-black" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Training & Wettkämpfe</div>
        <p className="sm:text-lg mt-4 text-black">
            Unser wöchentliches Training findet jeden Freitag ab 19:30 in unserem Schützenraum statt.<br/>
            Unter folgendem Link finden sie den Wettkampfplan für den Rundenwettkampf Luftgewehr 2024/2025.<br/>
            <a className='underline duration-500 hover:text-lime-600' href="https://www.rwk-onlinemelder.de/online/listen/hsvsb27?sel_group_id=31&sel_discipline_id=4&sel_class_id=18&sel_list_type=competitionSchedule&sel_turn_date=&showCombined=0">RWK-Onlinemelder LG 24/25 Bezirksklasse 3 Nord</a>
        </p>
      </section>

      <section className="flex-col w-full mt-32 sm:mt-12 p-8 shadow-2xl text-left bg-white  rounded-lg">
        <div className="sm:text-3xl font-semibold text-center text-black" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Disziplinen</div>
        <p className="sm:text-lg mt-4 text-black">
            Unser Verein bietet die Disziplinen Luftgewehr und Luftpistole an.<br/>
            <br/>
            </p>
            <ul>
                <li>Distanz: 10m</li>
                <li>Maximal zugelassene Mündungsenergie: 7,5 Joule</li>
                <li>Munition: 4,5mm Diabolo</li>
                <li>Alter: ab 12 Jahren</li>
                <li>LG aufgelegt und freistehend</li>
            </ul>
        
      </section>
      </div>
    </main>
  );
}