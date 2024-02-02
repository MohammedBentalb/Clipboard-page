import { computer, secondSectionInfo } from '@/public';
import Image from 'next/image';

function SecondSection() {
  return (
    <div
      className="mx-6 flex max-w-[75.75rem] items-center justify-between gap-4 max-xl:flex-col
        max-xl:gap-14 xl:ml-[-2rem]"
    >
      <div className="relative h-[35.75rem] w-full max-w-[47rem] max-lg:h-[30rem] max-md:h-[25rem] max-sm:h-[15rem]">
        <Image
          fill
          sizes="(min-width: 860px) 752px, calc(92.59vw - 26px)"
          src={computer}
          alt="computer image"
          className="select-none object-contain"
        />
      </div>
      <div className="mt-[-2rem] flex h-fit flex-col gap-[3.15rem] max-md:gap-12">
        {secondSectionInfo?.map((item, i) => (
          <div key={i} className="flex flex-col gap-[0.45rem]">
            <h1 className="text-[1.5rem] font-semibold tracking-[-0.0244375rem] text-primary-headers max-xl:text-center">
              {item.title}
            </h1>
            <p className="paragraph max-w-[21.875rem] text-[1rem] leading-[1.875rem] tracking-[0.0075rem] max-xl:text-center">
              {item.data}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SecondSection;
