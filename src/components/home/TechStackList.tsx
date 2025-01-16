import { TechStackData } from '@/data/DummyData';
import React from 'react';
import Image from 'next/image';

export default function TechStackList() {
  return (
    <ul className='flex flex-wrap gap-2 md:gap-4 items-center justify-center w-full md:w-[90%] lg:w-[80%] xl:w-[65%] px-[1.4rem] lg:px-0'>
      {TechStackData.map((data) => (
        <li
          key={data.id}
          className='flex items-center gap-2 rounded-lg px-[1rem] md:px-[3rem] py-3 relative'
        >
          {data.icon && (
            <Image src={data.icon} alt={data.title} width={30} height={30} />
          )}
          <span className='text-[0.825rem] font-semibold tracking-tighter'>
            {data.title}
          </span>
          <div className='absolute top-0 left-0 gradient-border-nobg rounded-lg w-full h-full opacity-25'></div>
        </li>
      ))}
    </ul>
  );
}
