import type { Metadata } from "next";
import { Outfit, Roboto_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const robotoMono = Roboto_Mono({ subsets: ["latin"], variable: "--font-roboto-mono" });

export const metadata: Metadata = {
    title: "Azzedine Lakhdar | Software Engineer",
    description: "Software Engineer specializing in AUTOSAR, automotive safety standards, and embedded systems.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${outfit.variable} ${robotoMono.variable} font-sans antialiased bg-background text-foreground`}>
                {children}
            </body>
        </html>
    );
}
