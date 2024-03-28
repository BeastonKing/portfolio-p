import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

// const inter = Inter({ subsets: ['latin'] });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
	// metadataBase: new URL("https://next-supabase-vote.vercel.app/"),
	metadataBase: new URL("http://localhost:3000"),

	title: "Bintang Pratama - Portfolio Website",
	authors: {
		name: "Bintang Pratama",
	},

	description:
    'I\'m a third-year Information System student at the University of Indonesia who\'s passionate in Website and Software Engineering, specializing in both Front-End and Back-End Development.',
	openGraph: {
		title: "Bintang Pratama's Portfolio Website",
		description:
        'I\'m a third-year Information System student at the University of Indonesia who\'s passionate in Website and Software Engineering, specializing in both Front-End and Back-End Development.',
		// url: "https://next-supabase-vote.vercel.app/",
		url: "http://localhost:3000",
		siteName: "Bintang Pratama's Portfolio Website",
		images: "/star.png",
		type: "website",
	},
	keywords: ["website developer", "webdev", "front end", "bac end", "software engineer", "bintang pratama"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' suppressHydrationWarning>
            <body className={spaceGrotesk.className}>
                <ThemeProvider
                    attribute='class'
                    defaultTheme='dark'
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
