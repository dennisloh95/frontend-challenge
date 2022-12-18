import React from "react";
import {
  Audiophile,
  Databiz,
  HeroDesktop,
  HeroMobile,
  Maker,
  Meet,
} from "../assets";

const Banner = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-4 lg:gap-16 text-center lg:text-left pb-5 lg:pb-0 lg:pt-8 max-w-[1024px] mx-auto">
      <div className="flex flex-1 flex-col relative z-0 justify-between">
        <div className="flex flex-col justify-evenly grow items-center lg:items-start px-2 lg:px-0">
          <h1 className="text-almost-black text-4xl lg:text-[4.5rem] lg:leading-[4.5rem] font-bold">
            Make remote work
          </h1>
          <p className="py-5 text-medium-gray">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="text-almost-white bg-almost-black rounded-xl px-5 py-2 border border-almost-black hover:bg-almost-white hover:text-almost-black text-[18px] lg:py-3 lg:px-8 font-medium">
            Learn more
          </button>
        </div>
        <ul className=" flex mt-[3rem] gap-8 items-center justify-center lg:justify-start px-3 lg:px-0">
          <li>
            <img src={Databiz} alt="Client Databiz Logo" />
          </li>
          <li>
            <img src={Audiophile} alt="Client Audiophile Logo" />
          </li>
          <li>
            <img src={Meet} alt="Client Meet Logo" />
          </li>
          <li>
            <img src={Maker} alt="Client Maker Logo" />
          </li>
        </ul>
      </div>
      <div className="order-first  flex flex-1 lg:order-last items-end">
        <img className="lg:hidden mb-9" src={HeroMobile} alt="Hero" />
        <img className="hidden lg:block" src={HeroDesktop} alt="Hero" />
      </div>
    </section>
  );
};

export default Banner;
