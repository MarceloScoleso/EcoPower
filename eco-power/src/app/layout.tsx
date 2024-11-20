// src/app/layout.tsx
import { ReactNode } from 'react';

import '../styles/globals.css'; // Verifique se o caminho está correto

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="pt-BR">
      <head />
      <body>
      
        <main>{children}</main>
      </body>
    </html>
  );
}
