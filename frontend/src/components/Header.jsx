import React from 'react';
import Icon from './Icon'

function Header() {
    return (
<header className="flex flex-row justify-between items-center p-4 mt-[20px]">
      
        <p className="text-[40px] font-bold"><i>AllMath</i></p>
        
        <nav className="flex space-x-8 ml-[-4%]">
          <a
            href="/"
            className="hover-underline-animation text-xl font-bold sm:text-[20px] md:text-[20px] lg:text-[20px] xl:text-[25px]"
          >
            HOME
          </a>
          <a
            href="/about"
            className="hover-underline-animation text-xl font-bold sm:text-[20px] md:text-[20px] lg:text-[20px] xl:text-[25px]"
          >
            ABOUT
          </a>
          <a
            href="/contact"
            className="hover-underline-animation text-xl font-bold sm:text-[20px] md:text-[20px] lg:text-[20px] xl:text-[25px]"
          >
            CONTACT
          </a>
        </nav>
        
        <Icon />
      </header>
    )
  }

  export default Header;