"use client";

import Image from "next/image";
import Marquee from "react-marquee-slider";

import QutubMinar from "@/app/qutub_minar.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const Main = () => {
  const location = [
    "New Delhi",
    "South Delhi",
    "North Delhi",
    "East Delhi",
    "West Delhi",
    "Central Delhi",
    "North East Delhi",
    "North West Delhi",
    "South West Delhi",
    "South East Delhi",
  ];

  return (
    <main className="flex flex-col items-center justify-center py-8 ">
      <Image
        src={QutubMinar}
        alt="Picture of the Qutub Minar"
        height={650}
        style={{
          // filter: "sepia(100%)",
          filter: "brightness(75%) grayscale(100%) contrast(110%) sepia(10%)",
          zIndex: 10,
        }}
      />
      <section className="hidden lg:block absolute top-48 w-full px-[24rem] text-center">
        <h1 className="text-white text-left text-4xl  py-4 opacity-25">
          OUR EXPERIENCE
        </h1>
        <h1 className="text-white text-right text-5xl  py-4 px-16 pr-8 opacity-25">
          EXPERTISE
        </h1>
        <h1 className="text-white text-left  text-5xl  py-4 opacity-25">
          TIME
        </h1>
      </section>

      <section
        className="absolute bottom-32 text-center"
        style={{ zIndex: 11 }}
      >
        {/* Main Heading  */}
        <div className="">
          <h1 className="text-golden  text-7xl font-bold py-4">REAL ESTATE</h1>
          <h3 className="text-golden text-4xl font-bold ">INVESTMENT</h3>
        </div>
        <div
          className=" text-2xl px-8 py-4  mt-4  text-black font-bold"
          style={{
            background: "linear-gradient(30deg, #ffffff 0%, #987952 100%)",
          }}
        >
          FIND A PROPERTY
        </div>
      </section>

      {/* animation */}
      <div className="hidden md:block absolute bottom-0 ">
        {/* @ts-ignore */}
        <Marquee velocity={20}>
          {location.map((item) => (
            <div className="flex flex-row px-8 items-center gap-4">
              <LocationOnIcon className="text-white text-2xl " />
              <h3 key={item} className="text-white text-2xl ">
                {item}
              </h3>
            </div>
          ))}
        </Marquee>
      </div>
    </main>
  );
};
