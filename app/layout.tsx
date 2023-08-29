import "./globals.css";
import { Theme } from "@radix-ui/themes";
import { Providers } from "./utils/store/provider";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CustomNavbar from "./components/customNavBar/CustomNavBar";
import Footer from "./components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AgSteward",
  description: "Lapis test",
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
          <Providers>
            <CustomNavbar />
            {children}
            <Footer />
          </Providers>
        </Theme>
      </body>
    </html>
  );
}
