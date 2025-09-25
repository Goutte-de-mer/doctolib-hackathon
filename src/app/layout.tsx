import type { Metadata } from "next";
import "@/style/globals.css";
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Doctolib : Prenez rendez-vous en ligne chez un soignant",
  description:
    "Trouvez rapidement un spécialiste près de chez vous et prenez rendez-vous gratuitement en ligne en quelques clics",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Navbar />
      </body>
    </html>
  );
}
