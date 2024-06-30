"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "../ui/wobble-card";
import App from "@/public/appdev.svg"
import Cloud from "@/public/cloud.svg"
import Dsa from "@/public/datastuctures.svg"
import Web from "@/public/webdev.svg"


export default function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Data Strucures and Algoritms 
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
          This course propels you from beginner to building complex solutions. Master data structures, algorithms, and impress recruiters – all in one program. Explore More!
          </p>
        </div>
        <Image
          src={Dsa}
          width={500}
          height={500}
          alt="DSA"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          App Development
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
        The course takes you starting from no stock knowledge, to the stage where you develop your own full fledged applications. It also contains the untold factors to fascinate recruiters.

        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            App Dev and Cloud Computing
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Imagine building the next game-changing app. With app dev and cloud skills, you'll code it AND store it on a powerful, scalable platform - making your dream app a reality for millions!
          </p>
        </div>
        <Image
          src={Web}
          width={500}
          height={500}
          alt="web and cloud"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
