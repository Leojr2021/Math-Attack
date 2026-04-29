import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pelea de Matematica",
  description: "Juego educativo 2D para practicar operaciones matematicas en una aventura divertida."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
