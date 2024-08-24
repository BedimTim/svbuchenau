'use client'
import React from 'react';
import Link from 'next/link';

interface ButtonProps {
    name: string;
    file: string;
}

const Button: React.FC<ButtonProps> = ({ name, file }) => {
    const resFile = file;
    const handleClick = async () => {
        const response = await fetch(resFile);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "Beitritt.pdf";
        link.click();
        window.URL.revokeObjectURL(url);
    };

    return (
        <button onClick={handleClick}>
            {name}
        </button>
    );
};

export default Button;
