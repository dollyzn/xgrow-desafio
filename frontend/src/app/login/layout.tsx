import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - XGROW Learning Area",
  description: "Desafio do time inicial Learning Area",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
