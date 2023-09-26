import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { AuthProvider } from "./context/authContext";

const poppins = Poppins({
  style: ["normal"],
  weight: "700",
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "XGROW - Learning Area",
  description: "Desafio do time inicial Learning Area",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="pt-BR">
        <body className={`${poppins.variable} bg-zinc-900 h-screen`}>
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
