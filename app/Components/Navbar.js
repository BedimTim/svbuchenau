'use client'
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
    const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "startseite",
    },
    {
      id: 2,
      link: "aktuelles",
    },
    {
      id: 3,
      link: "verein",
    },
    {
      id: 4,
      link: "schießsport",
    },
  ];

  return (
    <div className="flex items-center w-full h-32 px-4 text-black fixed nav bg-white z-50 border-black shadow-xl">
      <div className="flex max-h-28 size-28 hover:bg-gray-100 rounded-full hover:scale-105 shadow-2xl bg-white border-black duration-150 border-2 ">
        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
          <Link
            className="link-underline link-underline-black flex justify-center items-center mx-2"
            href="/"
            target="_blank"
            rel="noreferrer"
          >
            <Image className="size-24 " src="/Buchenau.png" width={1080} height={1324} />
          </Link>      
      </div>
      <div className="my-auto ml-10 mr-auto text-sm sm:text-base">Schützenverein<br/> Buchenau/Giesenhain</div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="nav-links px-10 size-full cursor-pointer capitalize font-medium text-black hover:scale-125 hover: duration-200 link-underline"
          >
              {link === "startseite" ? <Link href="/">{link}</Link> : <Link href={link}>{link}</Link>}
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-black md:hidden hover:scale-105  duration-200"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b duration-300 from-white to-white text-black">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 hover:text-lime-600 duration-200"
            >
              {link === "startseite" ? <Link onClick={() => setNav(!nav)} href="/">{link}</Link> :  <Link onClick={() => setNav(!nav)} href={link}>{link}</Link>}
              
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;