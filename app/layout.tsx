import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JAAPS - Premium Automotive Spare Parts',
  description: 'Quality spare parts for heavy-duty trucks and commercial vehicles. Trusted by professionals worldwide.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans">{children}</body>
    </html>
  );
}