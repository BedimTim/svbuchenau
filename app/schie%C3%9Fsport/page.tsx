import Button from '../Components/Button';
import Link from 'next/link';
import Image from 'next/image';
import React from "react";


export default function Home() {
  return (
    <main className="">
      <div className='flex min-h-screen flex-col items-center sm:justify-between sm:p-24 bg-cover bg-center'>
      <section className="flex-col w-full mt-32 sm:mt-12 p-8  text-left bg-lime-600 bg-opacity-75 rounded-lg">
        <div className="sm:text-3xl font-semibold text-center text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Training & Wettkämpfe</div>
        <p className="sm:text-lg mt-4 text-white">
            Unser wöchentliches Training findet jeden Freitag ab 19:30 in unserem Schützenraum statt.<br/>
            Unter folgendem Link finden sie den Wettkampfplan für den Rundenwettkampf Luftgewehr 2024/2025.<br/>
            <Link href="https://www.rwk-onlinemelder.de/online/listen/hsvsb27?sel_group_id=31&sel_discipline_id=4&sel_class_id=18&sel_list_type=competitionSchedule&sel_turn_date=&showCombined=0"><p className='underline'>RWK-Onlinemelder LG 24/25 3 Nord</p></Link>
        </p>
      </section>
      </div>
    </main>
  );
}