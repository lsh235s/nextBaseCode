'use client';
import React, { useEffect, useState } from 'react';
import UpIcon from '@/../public/icons/upIcon.svg';
import Image from 'next/image';

function ScrollToTopButton() {
  const [isView, setIsView] = useState(false);
  const handleTopToScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsView(true);
      } else {
        setIsView(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      onClick={handleTopToScroll}
      className={`
        flex items-center justify-center relative
        scroll-btn  bg-gradient-to-br from-[#00AAFF20] to-[#FF00EA10]
      ${isView ? 'go-Up-view' : 'go_Down-hide'}
      `}
      aria-label='scroll to top'
    >
      <Image src={UpIcon} alt='scroll to top' width={50} height={50} />
      <div className='absolute top-0 left-0 gradient-border-nobg rounded-full w-full h-full opacity-25'></div>
    </div>
  );
}

export default ScrollToTopButton;
