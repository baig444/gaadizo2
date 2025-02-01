import "./globals.css";
import Navbar from "@/components/Navbar";
import { ModernFooter } from "@/components/modern-footer";
import { FooterNav } from "@/components/footer-nav";
import { AppProvider } from "@/context/AppContext";


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
        
        
        <AppProvider>
        <Navbar/>
          {children}
          <ModernFooter/>
        <FooterNav/>
        </AppProvider>
        
      </body>
    </html>
  );
}
