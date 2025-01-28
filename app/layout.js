import "./globals.css";
import Navbar from "@/components/Navbar";
import { ModernFooter } from "@/components/modern-footer";
import { FooterNav } from "@/components/footer-nav";


export const metadata = {
  title: "Gaadizo",
  description: "Gaadizo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        
        <Navbar/>
        {children}
        <ModernFooter/>
        <FooterNav/>
      </body>
    </html>
  );
}
