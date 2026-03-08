import "./globals.css";
import { Koulen, DM_Mono, Host_Grotesk } from "next/font/google";

import ClientLayout from "../client-layout";

import Menu from "../components/Menu/Menu";
import Footer from "../components/Footer/Footer";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";
import TransitionProvider from "../providers/TransitionProvider";

const koulen = Koulen({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-koulen",
});

const hostGrotesk = Host_Grotesk({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-host-grotesk",
});

const dmMono = DM_Mono({
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
});

export const metadata = {
  title: "MangaStyle | Playeras de Anime",
  description:
    "Ecommerce de playeras de anime con enfoque streetwear, drops limitados y catalogo editorial.",
  icons: {
    icon: [
      {
        url: "/Favicon/LOGO-MANGASTYLE-03.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/Favicon/LOGO-MANGASTYLE-04.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    shortcut: [
      {
        url: "/Favicon/LOGO-MANGASTYLE-03.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/Favicon/LOGO-MANGASTYLE-04.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${koulen.variable} ${hostGrotesk.variable} ${dmMono.variable}`}
      >
        <TransitionProvider>
          <ClientLayout footer={<Footer />}>
            <Menu />
            {children}
          </ClientLayout>
          <ShoppingCart />
        </TransitionProvider>
      </body>
    </html>
  );
}
