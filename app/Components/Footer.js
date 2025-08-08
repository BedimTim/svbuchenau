'use client'
import React, { useState } from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="flex w-full bg-white text-black shadow-xl p-4 text-center mt-8 rounded-lg">
        <p className="hover:animate-spin duration-200">&copy;</p>
        <p> 2024 SV Buchenau/Giesenhain</p>
        <p className="ml-auto"><Link className="hover:text-lime-600 duration-200 underline" href= "/impressum">Impressum</Link><br /><Link className="hover:text-lime-600 duration-200 underline" href= "/datenschutz">Datenschutzerklärung</Link></p>
      </footer>
    );
};

export default Footer;