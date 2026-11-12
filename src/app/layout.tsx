import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  colorScheme: 'dark',
};

export const metadata: Metadata = {
  title: {
    default: 'Pedro Brito — Engenharia de Dados, BI & Desenvolvimento Web',
    template: '%s | Pedro Brito',
  },
  description:
    'Portfólio de Pedro Henrique Brito Lucas. Estudante de Engenharia da Computação (UFES), atuação em Engenharia de Dados (AWS, Terraform, Airflow, dbt, SQL, Python, ETL), Análise de Dados (Power BI) e Desenvolvimento Full Stack (Next.js, TypeScript, Laravel).',
  keywords: [
    'Pedro Brito',
    'Pedro Henrique Brito Lucas',
    'Engenharia de Dados',
    'Data Engineer',
    'AWS',
    'Terraform',
    'Apache Airflow',
    'dbt',
    'ETL',
    'Desenvolvedor Web',
    'Desenvolvedor Full Stack',
    'Analista de Dados',
    'Business Intelligence',
    'Power BI',
    'Portfólio',
    'Laravel',
    'Next.js',
    'React',
    'TypeScript',
    'Python',
    'SQL',
    'São Mateus ES',
    'UFES',
  ],
  authors: [{ name: 'Pedro Henrique Brito Lucas', url: 'https://www.pedrobritol.com.br' }],
  creator: 'Pedro Henrique Brito Lucas',
  icons: {
    icon: '/favicon.ico',
  },
  metadataBase: new URL('https://www.pedrobritol.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Pedro Brito — Engenharia de Dados, BI & Desenvolvimento Web',
    description:
      'Pipelines ETL em nuvem com AWS, Terraform, Apache Airflow, dbt, Python e SQL, além de Power BI e aplicações web com Next.js, TypeScript e Laravel.',
    url: 'https://www.pedrobritol.com.br',
    siteName: 'Portfólio Pedro Brito',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pedro Brito — Engenharia de Dados, BI & Desenvolvimento Web',
    description:
      'Portfólio de Pedro Brito: Engenharia de Dados (AWS, Terraform, Airflow, dbt, SQL, Python), Power BI e aplicações web com Next.js e Laravel.',
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Pedro Henrique Brito Lucas',
  alternateName: 'Pedro Brito',
  url: 'https://www.pedrobritol.com.br',
  email: 'mailto:pb_lucasbol@hotmail.com',
  jobTitle: 'Estagiário de Engenharia de Dados, Analista de Dados e Desenvolvedor Web',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'São Mateus',
    addressRegion: 'ES',
    addressCountry: 'BR',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Universidade Federal do Espírito Santo (UFES)',
  },
  sameAs: [
    'https://www.linkedin.com/in/pedro-britol/',
    'https://github.com/PedroBritol',
    'https://instagram.com/pedrobrito04',
  ],
  knowsAbout: [
    'AWS',
    'Terraform',
    'Apache Airflow',
    'dbt',
    'ETL',
    'Python',
    'SQL',
    'Power BI',
    'Power Query',
    'Excel',
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Laravel',
    'PHP',
    'MySQL',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-neutral-950 text-neutral-100 selection:bg-violet-600/40 selection:text-white`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
