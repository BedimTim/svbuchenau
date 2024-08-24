'use client'
import React from 'react';
import Link from 'next/link';

interface ButtonProps {
    name: string;
    file: string;
}

const Button: React.FC<ButtonProps> = ({ name, file }) => {
    return (
        <a href={file} download className="bg-gray-600">
            {name}
        </a>
    );
};

export default Button;
