'use client';

import { companies } from '@/public';
import Image from 'next/image';
import { useEffect, useState } from 'react';

function Scroller() {
  const [animate, setAnimate] = useState(true);
  useEffect(() => {
    const scroller = document.querySelector('.scroller');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      scroller?.setAttribute('data-animated', 'false');
      setAnimate(false);
    } else {
      setAnimate(true);
    }
  }, []);

  return (
    <div className="scroller" data-animated="true">
      <ul className="list">
        {companies.map((company, i) => (
          <li key={i} className="relative flex items-center">
            <Image src={company} alt="company logo" className="select-none" />
          </li>
        ))}
        {animate &&
          companies.map((company, i) => (
            <li key={i + 10} className="relative flex items-center">
              <Image src={company} alt="company logo" className="select-none" />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Scroller;
