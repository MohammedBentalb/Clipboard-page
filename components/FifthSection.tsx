import React from 'react';
import Button from './Button';

function FifthSection() {
  return (
    <div className="mx-6 flex flex-col items-center gap-4">
      <h1 className="w-fit text-center text-[2.21rem] font-bold tracking-[-0.0366875rem] text-primary-headers">
        Clipboard for iOS and Mac OS
      </h1>
      <p className="paragraph w-full max-w-[45.625rem] text-center text-[1.125rem]">
        Available for free on the App Store. Download for Mac or iOS, sync with
        iCloud and you’re ready to start adding to your clipboard.
      </p>

      <div className="flex w-full justify-center gap-[0.9rem] max-sm:flex-col max-sm:items-center sm:mt-[1.9rem]">
        <Button text={'Download for iOS'} type="ios" />
        <Button text={'Download for Mac'} type="mac" />
      </div>
    </div>
  );
}

export default FifthSection;
