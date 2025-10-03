import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Particles from "../../Reactbits/Particles";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pedro Brito - Desenvolvedor & Analista de Dados",
  description: "Portfólio de Pedro Brito, especialista em desenvolvimento web com Laravel e Next.js, e análise de dados.",
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://www.pedrobritol.com.br"),
  openGraph: {
    title: "Pedro Brito - Desenvolvedor & Analista de Dados",
    description: "Portfólio de Pedro Brito, especialista em desenvolvimento web com Laravel e Next.js, e análise de dados.",
    url: "https://www.pedrobritol.com.br",
    siteName: "Portfólio Pedro Brito",
    images: [
      {
        url: "https://www.pedrobritol.com.br/avatar.png",
        width: 1200,
        height: 630,
        alt: "Pedro Brito - Desenvolvedor & Analista de Dados",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-950`}
      >
        {children}
      </body>
    </html>
  );
}
