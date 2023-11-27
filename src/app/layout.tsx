import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme/themeprovider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Contacts App',
    description: 'Contacts app made for resonate solutions',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en' suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
