import Image from "next/image";
import QutubMinar from "./qutub_minar.png";
import Marquee from "react-marquee-slider";
import { Navbar } from "@/components/Navbar";
import { Main } from "@/components/Main";
import { WeOffer } from "@/components/WeOffer";
import { Payment } from "@/components/Payment";

export default function Home() {
  return (
    <main className="flex py-8 bg-black justify-center items-center flex-col">
      {/* NavBar  */}
      <Navbar />

      {/* Main Section  */}
      <Main />

      {/* WHAT WE OFFER */}
      <WeOffer />

      {/* Payment  */}
      <Payment />
    </main>
  );
}
