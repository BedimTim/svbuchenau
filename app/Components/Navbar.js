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
      link: "verein",
    },
    {
      id: 3,
      link: "schießsport",
    },
    {
      id: 4,
      link: "kontakt",
    },
    {
      id: 5,
      link: "mitgliederbereich",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-32 px-4 text-white fixed nav bg-lime-600">
      <div className=" max-h-28">
        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
          <a
            className="link-underline link-underline-black"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <img className="size-28 bg-gray-300 rounded-full hover:scale-105 hover:bg-white duration-150" src="./buchenau.png"/>
          </a>      
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="nav-links px-10 size-full cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
          >
            <Link href={link}>{link}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-white md:hidden hover:scale-105 hover:text-white duration-200"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b duration-300 from-black to-lime-600 text-white">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 hover:text-white duration-200"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;