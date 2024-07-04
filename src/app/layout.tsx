import { Aside } from './components/Aside';
import './globals.css';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Code Connect",
  description: "Uma rede social para devs!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-Br">
      <body>
        <div className='flex gap-[28px] w-[1200px] max-w-[90%] h-screen my-[56px] mx-auto'>
          <Aside />
          {children}
        </div>
      </body>
    </html>
  );
}
