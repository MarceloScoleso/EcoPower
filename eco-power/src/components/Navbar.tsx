// src/components/Navbar.tsx
import React from 'react';
import Link from 'next/link';

export default function Navbar() {
return (
    <nav className="bg-green-600 text-white py-4">
    <ul className="flex justify-center space-x-8">
        <li>
        <Link href="/">Início</Link>
        </li>
        <li>
        <Link href="/pontos-coleta">Pontos de Coleta</Link>
        </li>
        <li>
        <Link href="/impacto">Impacto Ambiental</Link>
        </li>
        <li>
        <Link href="/parcerias">Parcerias</Link>
        </li>
    </ul>
    </nav>
);
}
