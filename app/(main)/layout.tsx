import "../globals.css";
import NavBar from "./components/NavBar";
import ReduxProvider from "./components/ReduxProvider";
import { ChatBot } from "./components/ChatBot";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body
        className={`relative w-full flex flex-col min-h-screen h-full bg-linear-to-br from-[#010101] via-slate-900 to-emerald-900 mx-auto overflow-x-hidden`}
      >
        <ReduxProvider>
          <NavBar />
          {children}
          <ChatBot />
          <footer className="py-5 text-lg sm:text-xl font-medium text-white text-center">
            &copy; 2026 NutritutioN. All rights reserved.
          </footer>
        </ReduxProvider>
      </body>
    </html>
  );
}
