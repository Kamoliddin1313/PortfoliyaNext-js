import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import "../fonts/font.css";

// export const metadata = {
//   title: "%s | NFT Market Place",
//   description: "Generated by create next app",
// };

export const metadata = {
  title: {
    template: "% | NFT Market Place",
    default: "NFT Market Place",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-color-black  mx-auto">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
