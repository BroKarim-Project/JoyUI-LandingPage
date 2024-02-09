import React from 'react';
import { useEffect, useState } from 'react';


import menuData from '../../data/menu';

const Header = () => {
  //   const pathUrl = useLocation();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleStickyNavbar);
  });

  return (
    <>
      <header
        className={`px-10 py-4 md:py-0 left-0 top-0 z-40 flex w-full items-center border-b-2 border-black ${
          sticky ? 'shadow-nav fixed z-[9999] border-b border-stroke bg-white/20 backdrop-blur-[5px] transition dark:border-dark-3/20 dark:bg-dark/10' : 'absolute bg-transparent'
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            {/* logo */}
            <div className="w-60 max-w-full px-4">
              <a href="#home" aria-label="logo" className="flex space-x-2 items-center">
                <div aria-hidden="true" className="flex space-x-1">
                  <div className="h-4 w-4 rounded-full bg-gray-900 "></div>
                  <div className="h-6 w-2 bg-primary"></div>
                </div>
                <span className="text-2xl font-bold text-gray-900 ">JoyUI</span>
              </a>
            </div>
            {/* menu */}
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button onClick={navbarToggleHandler} id="navbarToggler" aria-label="Mobile Menu" className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden">
                  <span className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${navbarOpen ? 'top-[7px] rotate-45' : ' '} ${sticky ? 'bg-dark dark:bg-white' : 'bg-black'}`} />
                  <span className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${navbarOpen ? 'top-[7px] rotate-45' : ' '} ${sticky ? 'bg-dark dark:bg-white' : 'bg-black'}`} />
                  <span className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${navbarOpen ? 'top-[7px] rotate-45' : ' '} ${sticky ? 'bg-dark dark:bg-white' : 'bg-black'}`} />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark-2 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 lg:dark:bg-transparent ${
                    navbarOpen ? 'visibility top-full opacity-100' : 'invisible top-[120%] opacity-0'
                  }`}
                >
                  <ul className="block lg:ml-8 lg:flex lg:gap-x-8 xl:ml-14 xl:gap-x-12">
                    {menuData.map((menuItem, index) => (
                      <li key={menuItem.id} className="group relative">
                        <a
                          href={menuItem.path}
                          className={`ud-menu-scroll flex py-2 text-base ${sticky ? 'text-dark group-hover:text-primary dark:group-hover:text-primary' : 'text-body-color lg:text-[#19394e]'} ${sticky && '!text-primary'}
                            lg:inline-flex lg:px-0 lg:py-6`}
                        >
                          {menuItem.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className=" items-center justify-end pr-16 flex lg:pr-0">
                {/* <div>
                  <a href="/" className="px-7 py-3 text-base font-medium text-dark hover:opacity-70 text-black">
                    Sign In
                  </a>
                  <a href="/" className="rounded-lg bg-primary px-6 py-3 text-base font-medium text-black duration-300 ease-in-out hover:bg-primary/90 dark:bg-white/10 dark:hover:bg-white/20">
                    Sign Up
                  </a>
                </div> */}
                <div>
                  <a href="#">
                    <button
                      className={`
                      hidden rounded bg-yellow-500
                      px-2.5 py-1 text-xs
                      text-white transition
                      duration-200
                      ease-out hover:bg-yellow-400 lg:block
                    `}
                    >
                      Get Started
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
