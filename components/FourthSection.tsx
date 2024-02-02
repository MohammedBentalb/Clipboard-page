import { fourthSectionInfo } from '@/public';
import Image from 'next/image';
import React from 'react';

function FourthSection() {
  return (
    <div className="grid-carts mx-6 max-w-[69.375rem] max-sm:grid-cols-1">
      {fourthSectionInfo.map((item, i) => (
        <div key={i} className="flex flex-col items-center gap-[2.3rem]">
          <div
            className={`relative h-[2.5rem] w-[3.125rem] ${i === 1 ? 'scale-[0.8]' : ''}`}
          >
            <Image
              fill
              src={item.image}
              alt={'image'}
              className="select-none object-contain"
            />
          </div>
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-center  text-[1.5rem] font-semibold tracking-[-0.0244375rem] text-primary-headers">
              {item.title}
            </h1>
            <p className="w-full text-center leading-[1.875rem] tracking-[0.0075rem] text-primary-paragraphs">
              {item.paragraph}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FourthSection;
