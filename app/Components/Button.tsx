'use client'
import React from 'react';
import Link from 'next/link';

interface ButtonProps {
    name: string;
    file: string;
}

const Button: React.FC<ButtonProps> = ({ name, file }) => {
    const handleClick = async () => {
        const response = await fetch(file);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "Beitritt.pdf";
        link.click();
        window.URL.revokeObjectURL(url);
    };

    return (
        <button className='bg-slate-500 rounded-2xl p-4 mt-6 hover:bg-slate-600 duration-500 text-white font-bold border-4  hover:border-sky-300' onClick={handleClick}>
            {name}
        </button>
    );
};

export default Button;
