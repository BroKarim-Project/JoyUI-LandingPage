import React from 'react';
import SectionContainer from './SectionContainer';
import Lottie from 'lottie-react';
import WorkAnime from '../../public/work.json';

const HowItWorks = () => {
  return (
    <>
      <SectionContainer className="lg:pb-8 bg-[#a7dbd7]">
        <div className="container flex flex-col justify-center px-6 py-2 mx-auto   lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-left sm:text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h2 className="mb-4 text-xl text-neutral-700 lg:text-2xl">How does it work? 🧐</h2>
            <p className="text-neutral-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>

          <div className="md:flex hidden items-center justify-center   ">
            <img src="/work1.png" className="object-contain" alt="" />
          </div>
        </div>
      </SectionContainer>
    </>
  );
};

export default HowItWorks;
