import type { Metadata } from "next";
import "@/style/globals.css";
import Header from "@/components/layout/Header";

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
     
      <body className="color-bg p-8">

         <Header></Header>
        
        
        {children}
        
        </body>
    </html>
  );
}
