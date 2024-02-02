import Image from 'next/image';
import { headerDesktop, headerMobile, logo } from '@/public/index';
import Button from './Button';

function Hero() {
  return (
    <header className="overflow-x-hidden">
      <div className="relative h-[363px] w-full">
        <Image
          src={headerDesktop}
          fill
          priority
          sizes="100vw"
          alt="banner"
          className="select-none object-cover max-sm:hidden"
        />
        <Image
          src={headerMobile}
          fill
          priority
          sizes="100vw"
          alt="banner"
          className="select-none object-cover sm:hidden"
        />
      </div>
      <section className="absolute left-[50%] top-[8.2rem] flex translate-x-[-50%] flex-col items-center gap-[3.2rem] max-sm:top-[7.6875rem] md:w-[45.625rem]">
        <div className="relative size-[125px]">
          <Image fill src={logo} alt="logo" priority className="select-none" />
        </div>
        <div className="flex flex-col items-center gap-[.7rem]">
          <h1 className="w-fit text-center text-[2.875rem] font-semibold tracking-[-0.046875rem] text-primary-headers max-sm:w-[15ch] max-sm:text-[2rem] max-[325px]:w-[260px]">
            A history of everything you copy
          </h1>
          <p className="w-full max-w-[45.625rem] text-center text-[1.25rem] font-normal leading-[1.875rem] tracking-[0.009375rem] text-primary-paragraphs max-sm:max-w-[31ch]">
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </p>
        </div>
        <div className="flex w-full justify-center gap-[0.9rem] px-[0.85rem] max-sm:flex-col max-sm:items-center sm:mt-[-0.3rem]">
          <Button text={'Download for iOS'} type="ios" />
          <Button text={'Download for Mac'} type="mac" />
        </div>
      </section>
    </header>
  );
}

export default Hero;
