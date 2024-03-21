"use client";
import Image from "next/image";
import QutubMinar from "./qutub_minar.png";
import Marquee from "react-marquee-slider";
import { Navbar } from "@/components/Navbar";
import { Main } from "@/components/Main";
import { WeOffer } from "@/components/WeOffer";
import { Payment } from "@/components/Payment";
import { Footer } from "@/components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main className="flex py-8 bg-black justify-center items-center flex-col">
      {/* NavBar  */}
      <Navbar />

      {/* Main Section  */}
      <Main data-scroll-content data-scroll data-scroll-speed="-0.5" />

      {/* WHAT WE OFFER */}
      <WeOffer data-scroll data-scroll-speed="0.5" />

      {/* Payment  */}
      <Payment data-scroll-container data-scroll data-scroll-speed="-0.5" />

      {/* Footer  */}
      <Footer />
    </main>
  );
}
