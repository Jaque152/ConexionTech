import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter", 
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ConexionTech — Ingeniería Web y Growth Marketing",
  description:
    "Desarrollo full-stack, automatización y estrategias de marketing basadas en datos. Soluciones tecnológicas desde CDMX.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body suppressHydrationWarning className="antialiased bg-[#0f172a]">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}