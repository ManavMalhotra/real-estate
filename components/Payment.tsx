import Image from "next/image";
import Crypto from "@/app/./crypto.jpg";
import { Button } from "@mui/material";

export const Payment = () => {
  return (
    <section className="flex flex-col md:flex-row py-16 px-8 md:pl-32">
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
      <div className="hidden md:block">
        <Image
          src={Crypto}
          alt="Cryptocurreny"
          className="w-[100vw]"
          style={{
            filter:
              "grayscale(100%), brightness(-30%), contrast(75%), blur(10px), hue-rotate(20deg)",
            opacity: "0.9",
          }}
        />
      </div>
    </section>
  );
};
