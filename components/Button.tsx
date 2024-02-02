import React from 'react';

function Button({ text, type }: { text: string; type: 'mac' | 'ios' }) {
  return (
    <button
      className={`${type === 'mac' ? 'mac-button-shadow' : 'ios-button-shadow'} h-[56px] w-[227px] rounded-[28px] text-[18px] font-semibold leading-[30px] tracking-[0.03125rem] text-white max-sm:w-full max-sm:max-w-[311px]`}
    >
      {text}
    </button>
  );
}

export default Button;
