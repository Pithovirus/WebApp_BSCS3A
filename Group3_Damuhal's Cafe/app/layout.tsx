// app/layout.tsx
import Navbar from '@/components/Navbar';
import { ClerkProvider } from '@clerk/nextjs';
import { Metadata } from 'next';
import './globals.css';

// Load fonts (make sure the paths are correct)

export const metadata: Metadata = {
  title: 'Coffee Shop Landing Page',
  description: 'Aesthetic coffee shop landing page',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="h-full">
      <body className="h-full flex flex-col">
        <Navbar /> {/* Fixed navbar at the top */}
        <main className="flex-1">{children}</main> {/* Main content */}
      </body>
    </html>
    </ClerkProvider>
  );
}
