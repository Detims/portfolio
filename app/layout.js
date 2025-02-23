import { Ovo, Open_Sans } from "next/font/google";
import "./globals.css";

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400"],
})

export const metadata = {
  title: "Nhan's Portfolio",
  description: "Portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${ovo.className} ${openSans.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
