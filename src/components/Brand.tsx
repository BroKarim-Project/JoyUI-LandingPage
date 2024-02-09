import React from 'react';
import { motion } from 'framer-motion';
import SectionContainer from './SectionContainer';

const brandData = [
  {
    id: 0.25,
    name: 'Client',
    href: '#',
    image: '/Image/brand/brand-light-01.svg',
    imageLight: '/Image/brand/brand-dark-01.svg',
  },
  {
    id: 0.3,
    name: 'Client',
    href: '#',
    image: '/Image/brand/brand-light-02.svg',
    imageLight: '/Image/brand/brand-dark-02.svg',
  },
  {
    id: 0.4,
    name: 'Client',
    href: '#',
    image: '/Image/brand/brand-light-03.svg',
    imageLight: '/Image/brand/brand-dark-03.svg',
  },
 
];

const Brands = () => {
  return (
    <>
      <SectionContainer className="md:py-10  dark:border-y-strokedark dark:bg-black">
        <div className="mx-auto px-4 md:px-8 2xl:px-0">
          <div className="flex items-center justify-center gap-8  lg:gap-12 xl:gap-20">
            {brandData.map((brand) => (
              <motion.a
                key={brand.id}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: brand.id }}
                viewport={{ once: true }}
                href={brand.href}
                className="animate_top mx-w-full relative block h-10 w-40"
              >
                <img className="opacity-65 w-full transition-all duration-300 hover:opacity-100 dark:hidden" src={brand.image} alt={brand.name} />
                <img className="hidden opacity-50 w-full transition-all duration-300 hover:opacity-100 dark:block" src={brand.imageLight} alt={brand.name} />
              </motion.a>
            ))}
          </div>
        </div>
      </SectionContainer>
    </>
  );
};

export default Brands;
