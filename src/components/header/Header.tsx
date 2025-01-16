'use client';
import React, { useState } from 'react';
import Navigator from '@/components/common/Navigator';
import Button from '@/components/common/Button';
import { CommonLayout } from '@/components/common/CommonLayout';
import { cn } from '@/lib/utils';
import { Sidebar } from '../common/SideBar';
import { MenuIcon } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const handleMenuOpen = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setIsMenuOpen(true);
  };
  return (
    <>
      <Sidebar open={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <CommonLayout.MainHeader
        className={cn(
          'flex justify-between z-[100] fixed top-0 left-0',
          'sm:top-[43px] sm:left-[50%] sm:translate-x-[-50%]',
          'container',
          'items-center rounded-none sm:rounded-full w-full px-[2rem] md:px-[1rem] h-[80px] sm:h-[60px] backdrop-blur-[3px] text-white sm:bg-[#000000] bg-[#000000]'
        )}
      >
        <Navigator />
        <div className='flex gap-4 items-center'>
          <MenuIcon
            onClick={() => handleMenuOpen()}
            className='block md:hidden'
          />

          <Button
            size='md'
            bgColorClassName='gradient font-bold z-[20] hidden md:block'
            arrow={false}
          >
            apply
          </Button>
        </div>
        <div className='absolute w-full h-[60px] gradient-border rounded-full opacity-50 top-0 left-0 hidden sm:block pointer-events-none'></div>
      </CommonLayout.MainHeader>
    </>
  );
}

export default Header;
