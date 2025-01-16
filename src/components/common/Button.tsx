'use client';

import { cn } from '@/lib/utils';
import { ButtonProps } from '@/types/props/ButtonProps';
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

function Button({ children, size, bgColorClassName, arrow }: ButtonProps) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push('/apply')}
      className={cn(
        'border-[0.5px] border-solid border-[#00AAFF] rounded-[41px] flex justify-center items-center gap-1',
        bgColorClassName,
        size === 'sm' && 'h-[28px] w-[100px] text-xs',
        size === 'md' && 'h-[34px] w-[125px] text-sm',
        size === 'lg' &&
          'h-[60px] w-[180px] text-lg xl:h-[70px] xl:w-[200px] xl:text-xl 2xl:h-[80px] 2xl:w-[250px] 2xl:text-2xl'
      )}
    >
      {children}
      {arrow && <ArrowUpRight size={22} />}
    </button>
  );
}

export default Button;
