import { DashboardProvider } from "@/app/context/dashboard.context";
import "@/app/globals.css";
import type { AppProps } from "next/app";
import { Inter, IBM_Plex_Sans, Lato } from "next/font/google";

const inter = Inter({
  subsets: ["vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});
const plex = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${inter.variable} ${plex.variable} ${lato.variable} overflow-hidden`}
    >
      <DashboardProvider>
        <Component {...pageProps} />;
      </DashboardProvider>
    </div>
  );
}
