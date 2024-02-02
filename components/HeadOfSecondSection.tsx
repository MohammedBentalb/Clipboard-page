import React from 'react';

function HeadOfSecondSection() {
  return (
    <>
      <div className="mx-6 flex flex-col items-center gap-4">
        <h1 className="w-fit text-center text-[2.21rem] font-bold tracking-[-0.0366875rem] text-primary-headers">
          Keep track of your snippets
        </h1>
        <p className="paragraph w-full max-w-[45.625rem] text-center text-[1.125rem]">
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </p>
      </div>
    </>
  );
}

export default HeadOfSecondSection;
