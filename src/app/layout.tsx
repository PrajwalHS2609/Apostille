import Footer from "@/components/Footer/Footer";
import "./global.css";
import Navbar from "@/components/Navbar/Navbar";
import TopBar from "@/components/TopBar/Topbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="./Fevicon.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body>
        <TopBar />
        <Navbar />
        <main className="main-container"> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
