import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";

import awsconfig from "../../src/aws-exports";
Amplify.configure({ ...awsconfig, ssr: true });
// import { studioTheme } from "@/ui-components";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
