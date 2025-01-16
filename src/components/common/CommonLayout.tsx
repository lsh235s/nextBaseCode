import React from 'react';
import { cn } from '@/lib/utils';

interface CommonLayoutProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const commonStyle = cn('w-full mx-auto');

function MainContainer({ children, className }: CommonLayoutProps) {
  return <main className={cn(commonStyle, className)}>{children}</main>;
}

function BannerSection({ children, className }: CommonLayoutProps) {
  return <section className={cn(commonStyle, className)}>{children}</section>;
}

function MainHeader({ children, className }: CommonLayoutProps) {
  return <header className={cn(commonStyle, className)}>{children}</header>;
}

function MainSection({ children, className, id }: CommonLayoutProps) {
  return (
    <section
      className={cn(
        commonStyle,
        className,
        'w-full py-[5rem] flex flex-col justify-center items-center gap-[3rem]'
      )}
      id={id}
    >
      {children}
    </section>
  );
}

export const CommonLayout = {
  MainContainer,
  MainHeader,
  MainSection,
  BannerSection,
};
