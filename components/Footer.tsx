import { facebook, instagram, logo, twitter } from '@/public';
import Image from 'next/image';
import React from 'react';

function Footer() {
  return (
    <div className="mx-6 flex w-full max-w-[69.375rem] items-center gap-[8.5rem] max-xl:my-[3.25rem] max-xl:gap-[4rem] max-[900px]:flex-col">
      <div className="relative size-[53px]">
        <Image fill src={logo} alt="logo" priority className="select-none" />
      </div>
      <ul className="flex gap-8 max-[900px]:justify-center max-sm:flex-col max-sm:items-center max-sm:gap-5 lg:gap-[1.3rem]">
        <li className="flex flex-col gap-3 max-sm:gap-5 lg:w-[10.5rem]">
          <a href="/" className="anchor">
            FAQs
          </a>
          <a href="/" className="anchor">
            Contact Us
          </a>
        </li>
        <li className="flex flex-col gap-3 lg:w-[10.5rem]">
          <a href="/" className="anchor">
            Privacy Policy
          </a>
          <a href="/" className="anchor">
            Press Kit
          </a>
        </li>
        <li className="flex flex-col gap-3 lg:w-[10.5rem]">
          <a href="/" className="anchor">
            Install Guide
          </a>
        </li>
      </ul>

      <div className="flex w-[7.5rem] justify-between min-[900px]:ml-auto">
        <Image width={24} height={24} src={facebook} alt="facebook" />
        <Image width={25} height={25} src={twitter} alt="twitter" />
        <Image width={24} height={24} src={instagram} alt="instagram" />
      </div>
    </div>
  );
}

export default Footer;
