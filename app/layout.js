"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { persistor, store } from '../Redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from "redux-persist/integration/react";
import Footer from "@/components/HomePage/Footer";
import Quote from "@/components/HomePage/Quote";
import WhatsappButton from "@/components/WhatsappButton";
// import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Bonvo Exports",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Bonvo Exports</title>
        <meta name='description' content='Description' />
      </head>
      <body className={`${inter.className}  bg-[url(/home/background1.jpg)] bg-fixed bg-cover w-screen `}>
        {/* <Toaster /> */}
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Navbar />
            {children}
            <WhatsappButton />
            <Quote />
            <Footer />
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
