import "@/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import { ClerkProvider } from "@clerk/nextjs";
import TailwindIndicator from "@/components/TailwindIndicator";
import { ThemeContextProvider } from "@/context/theme";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "ShaderHub",
  description: "3D Web Repository",
  icons: "/favicon.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <ThemeContextProvider>
        <html lang="en">
          <body className={`font-sans ${inter.variable}`}>
            <TRPCReactProvider>{children}</TRPCReactProvider>
            <TailwindIndicator />
          </body>
        </html>
      </ThemeContextProvider>
    </ClerkProvider>
  );
}
