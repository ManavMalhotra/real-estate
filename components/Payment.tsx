import Image from "next/image";
import Crypto from "@/app/./crypto.jpg";
import { Button } from "@mui/material";

export const Payment = () => {
  return (
    <section className="flex flex-col lg:flex-row py-16 pl-32">
      <div className="">
        <h1 className="text-5xl text-golden">
          PAYMENT BY CRYPTOCURRENCY IS POSSIBLE!
        </h1>

        <div className="my-16">
          <h2 className="text-white text-2xl ">
            <strong>Stablecoin:</strong> USDT
          </h2>
          <h2 className="text-white text-2xl">
            <strong>Cryptocurrency: </strong>BTC, ETH
          </h2>
        </div>

        <button
          className=" text-2xl px-8 py-4  mt-4  text-black font-bold"
          style={{
            background: "linear-gradient(30deg, #ffffff 0%, #987952 100%)",
          }}
        >
          <h1>LEAVE A REQUEST</h1>
        </button>
      </div>
      <div className="hidden lg:block">
        <Image
          src={Crypto}
          alt="Cryptocurreny"
          width={1000}
          style={{
            filter: "grayscale(100%)",
            filter: "brightness(-30%)",
            filter: "contrast(75%)",
            filter: "blur(10px)",
            filter: "hue-rotate(20deg)",
            opacity: "0.9",
          }}
        />
      </div>
    </section>
  );
};