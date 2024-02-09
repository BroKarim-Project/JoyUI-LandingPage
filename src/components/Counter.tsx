import SectionContainer from './SectionContainer';
import React from 'react';

import { TypeAnimation } from 'react-type-animation';

const Counter = () => {
  return (
    <>
      <SectionContainer className="bg-[#a6a4e5] md:py-10">
        <div className="flex flex-col items-center text-black justify-center ">
          <h2>We help over </h2>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              '100.000+ User',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              '25.000+ Teams',
              1000,
              '11.000+ Labs',
              1000,
              '1.000+ Institute',
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
          />
        </div>
      </SectionContainer>
    </>
  );
};

export default Counter;
