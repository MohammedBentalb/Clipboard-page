import { device } from '@/public';
import Image from 'next/image';
import React from 'react';

function HeadOfThirdSection() {
  return (
    <div className="mx-6 flex flex-col items-center gap-[5.75rem] max-lg:gap-16 max-md:gap-10">
      <div className="mx-6 flex flex-col items-center gap-4">
        <h1 className="w-fit text-center text-[2.21rem] font-bold tracking-[-0.0366875rem] text-primary-headers">
          Access Clipboard anywhere
        </h1>
        <p className="paragraph w-full max-w-[45.625rem] text-center text-[1.125rem]">
          Whether you’re on the go, or at your computer, you can access all your
          Clipboard snippets in a few simple clicks.
        </p>
      </div>
      <div className="relative h-[36.6875rem] w-full max-w-[56.75rem] max-lg:h-[30rem] max-md:h-[25rem] max-sm:h-[11rem]">
        <Image
          fill
          sizes="(min-width: 1020px) 908px, calc(93.71vw - 29px)"
          src={device}
          alt="devices photo"
          className="select-none object-contain lg:ml-[.15rem]"
        />
      </div>
    </div>
  );
}

export default HeadOfThirdSection;
